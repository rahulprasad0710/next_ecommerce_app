import { and, asc, eq } from "drizzle-orm";
import { categories, products } from "@/db/schema"; // adjust path to your schema

import { db } from "@/db";

export async function getAllProducts(tag: string) {
    const allProducts = await db
        .select()
        .from(products)
        .where(and(eq(products.tag, tag), eq(products.isActive, true)))
        .orderBy(asc(products.name));

    const productsResponse = allProducts.map((product) => {
        return {
            ...product,
            id: product.id.toString(),
            description: product.description || "No description available",
        };
    });

    return productsResponse;
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
