import { categories, products } from "@/db/schema";

import { NextResponse } from "next/server";
import { db } from "@/db";
import { eq } from "drizzle-orm";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const tag = searchParams.get("tag");

        const result = await db
            .select()
            .from(products)
            .where(eq(products.isActive, true));
        return NextResponse.json(result);
    } catch (error) {
        console.error("Error fetching rooms:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
