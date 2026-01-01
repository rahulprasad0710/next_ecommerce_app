import { and, eq } from "drizzle-orm";

import { NextResponse } from "next/server";
import { categories } from "@/db/schema"; // adjust path to your schema
import { db } from "@/db"; // adjust path to your drizzle instance

export async function GET(
    req: Request,
    params: { params: Promise<{ categoryId: string }> }
) {
    try {
        const resolvedParams = await params.params;
        const categoryId = BigInt(resolvedParams.categoryId);
        const result = await db
            .select()
            .from(categories)
            .where(
                and(
                    eq(categories.id, categoryId),
                    eq(categories.isActive, true)
                )
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
