import { and, asc, eq, ilike, sql } from "drizzle-orm";
import { categories, products } from "@/db/schema"; // adjust path to your schema

import { db } from "@/db";

const PAGE_SIZE = 6;

export async function getAllProducts(
    tag?: string,
    categoryId?: number,
    page?: number,
    searchQuery?: string
) {
    const currentPage = page ?? 1;
    const offset = (currentPage - 1) * PAGE_SIZE;

    console.log({
        tag,
        categoryId,
        page,
        searchQuery,
    });

    // 1️⃣ Get paginated products
    const allProducts = await db
        .select()
        .from(products)
        .where(
            and(
                tag ? eq(products.tag, tag) : undefined,
                categoryId && !searchQuery
                    ? eq(products.categoryId, categoryId)
                    : undefined,
                eq(products.isActive, true),
                searchQuery
                    ? sql`${products.name} ILIKE ${"%" + searchQuery + "%"}`
                    : undefined
            )
        )
        .orderBy(asc(products.name))
        .limit(PAGE_SIZE)
        .offset(offset);

    // 2️⃣ Get total product count
    const [{ count }] = await db
        .select({
            count: sql<number>`count(*)`,
        })
        .from(products)
        .where(
            and(
                tag ? eq(products.tag, tag) : undefined,
                categoryId ? eq(products.categoryId, categoryId) : undefined,
                eq(products.isActive, true)
            )
        );

    // 3️⃣ Serialize BIGINTs safely
    const productsResponse = allProducts.map((product) => ({
        ...product,
        id: product.id.toString(),
        categoryId: product.categoryId.toString(),
        description: product.description ?? "No description available",
    }));

    const totalPages = Math.ceil(count / PAGE_SIZE);

    return {
        products: productsResponse,
        pagination: {
            totalProducts: count,
            totalPages,
            currentPage,
            pageSize: PAGE_SIZE,
        },
    };
}

export async function getAllCategories() {
    const allCategories = await db
        .select()
        .from(categories)
        .where(eq(categories.isActive, true))
        .orderBy(asc(categories.name));

    const categoryWithChildren = allCategories.map((category) => {
        return {
            ...category,
            id: category.id.toString(),
            description: category.description || "No description available",
        };
    });

    return categoryWithChildren;
}

export async function getProductBySlug(slug: string) {
    const result = await db
        .select()
        .from(products)
        .where(and(eq(products.slug, slug), eq(products.isActive, true)))
        .limit(1);

    const product = result[0];

    if (!product) {
        return null;
    }

    return {
        ...product,
        id: product.id.toString(),
        categoryId: product.categoryId.toString(),
        description: product.description ?? "No description available",
    };
}
