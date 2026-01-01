import { and, eq } from "drizzle-orm";

import { NextResponse } from "next/server";
import { db } from "@/db"; // adjust path to your drizzle instance
import { products } from "@/db/schema"; // adjust path to your schema

export async function GET(
    req: Request,
    params: { params: Promise<{ slug: string }> }
) {
    console.log({
        params,
    });
    try {
        const resolvedParams = await params.params;
        const productSlug = resolvedParams.slug;

        const result = await db
            .select()
            .from(products)
            .where(
                and(eq(products.slug, productSlug), eq(products.isActive, true))
            )
            .limit(1);

        if (result.length === 0) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(result[0]);
    } catch (error) {
        console.error("Error fetching product:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
