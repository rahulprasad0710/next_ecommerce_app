import {
    bigint,
    bigserial,
    boolean,
    check,
    foreignKey,
    index,
    integer,
    numeric,
    pgTable,
    text,
    timestamp,
    unique,
    varchar,
} from "drizzle-orm/pg-core";

import { sql } from "drizzle-orm";

export const verification = pgTable(
    "verification",
    {
        id: text().primaryKey().notNull(),
        identifier: text().notNull(),
        value: text().notNull(),
        expiresAt: timestamp("expires_at", { mode: "string" }).notNull(),
        createdAt: timestamp("created_at", { mode: "string" })
            .defaultNow()
            .notNull(),
        updatedAt: timestamp("updated_at", { mode: "string" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        index("verification_identifier_idx").using(
            "btree",
            table.identifier.asc().nullsLast().op("text_ops")
        ),
    ]
);

export const user = pgTable(
    "user",
    {
        id: text().primaryKey().notNull(),
        name: text().notNull(),
        email: text().notNull(),
        emailVerified: boolean("email_verified").default(false).notNull(),
        image: text(),
        createdAt: timestamp("created_at", { mode: "string" })
            .defaultNow()
            .notNull(),
        updatedAt: timestamp("updated_at", { mode: "string" })
            .defaultNow()
            .notNull(),
    },
    (table) => [unique("user_email_unique").on(table.email)]
);

export const account = pgTable(
    "account",
    {
        id: text().primaryKey().notNull(),
        accountId: text("account_id").notNull(),
        providerId: text("provider_id").notNull(),
        userId: text("user_id").notNull(),
        accessToken: text("access_token"),
        refreshToken: text("refresh_token"),
        idToken: text("id_token"),
        accessTokenExpiresAt: timestamp("access_token_expires_at", {
            mode: "string",
        }),
        refreshTokenExpiresAt: timestamp("refresh_token_expires_at", {
            mode: "string",
        }),
        scope: text(),
        password: text(),
        createdAt: timestamp("created_at", { mode: "string" })
            .defaultNow()
            .notNull(),
        updatedAt: timestamp("updated_at", { mode: "string" }).notNull(),
    },
    (table) => [
        index("account_userId_idx").using(
            "btree",
            table.userId.asc().nullsLast().op("text_ops")
        ),
        foreignKey({
            columns: [table.userId],
            foreignColumns: [user.id],
            name: "account_user_id_user_id_fk",
        }).onDelete("cascade"),
    ]
);

export const session = pgTable(
    "session",
    {
        id: text().primaryKey().notNull(),
        expiresAt: timestamp("expires_at", { mode: "string" }).notNull(),
        token: text().notNull(),
        createdAt: timestamp("created_at", { mode: "string" })
            .defaultNow()
            .notNull(),
        updatedAt: timestamp("updated_at", { mode: "string" }).notNull(),
        ipAddress: text("ip_address"),
        userAgent: text("user_agent"),
        userId: text("user_id").notNull(),
    },
    (table) => [
        index("session_userId_idx").using(
            "btree",
            table.userId.asc().nullsLast().op("text_ops")
        ),
        foreignKey({
            columns: [table.userId],
            foreignColumns: [user.id],
            name: "session_user_id_user_id_fk",
        }).onDelete("cascade"),
        unique("session_token_unique").on(table.token),
    ]
);

export const categories = pgTable(
    "categories",
    {
        id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
        name: varchar({ length: 150 }).notNull(),
        slug: varchar({ length: 150 }).notNull(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        parentId: bigint("parent_id", { mode: "number" }),
        isActive: boolean("is_active").default(true),
        image: text(),
        createdAt: timestamp("created_at", {
            withTimezone: true,
            mode: "string",
        }).defaultNow(),
        updatedAt: timestamp("updated_at", {
            withTimezone: true,
            mode: "string",
        }).defaultNow(),
    },
    (table) => [
        foreignKey({
            columns: [table.parentId],
            foreignColumns: [table.id],
            name: "fk_category_parent",
        }).onDelete("set null"),
        unique("categories_slug_key").on(table.slug),
    ]
);

export const products = pgTable(
    "products",
    {
        id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        categoryId: bigint("category_id", { mode: "number" }).notNull(),
        name: varchar({ length: 200 }).notNull(),
        slug: varchar({ length: 200 }).notNull(),
        description: text(),
        sellingPrice: numeric("selling_price", {
            precision: 10,
            scale: 2,
        }).notNull(),
        mrpPrice: numeric("mrp_price", { precision: 10, scale: 2 }).notNull(),
        stock: integer().default(0),
        image: text(),
        isActive: boolean("is_active").default(true),
        tag: varchar({ length: 200 }).notNull(),
    },
    (table) => [
        foreignKey({
            columns: [table.categoryId],
            foreignColumns: [categories.id],
            name: "fk_product_category",
        }).onDelete("cascade"),
        unique("products_slug_key").on(table.slug),
        check(
            "products_selling_price_check",
            sql`selling_price >= (0)::numeric`
        ),
        check("products_mrp_price_check", sql`mrp_price >= (0)::numeric`),
        check("products_stock_check", sql`stock >= 0`),
    ]
);

export const userCart = pgTable(
    "user_cart",
    {
        id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
        userId: text("user_id").notNull(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        productId: bigint("product_id", { mode: "number" }).notNull(),
        quantity: integer().notNull(),
        addedAt: timestamp("added_at", { mode: "string" }).defaultNow(),
    },
    (table) => [
        foreignKey({
            columns: [table.userId],
            foreignColumns: [user.id],
            name: "fk_cart_user",
        }).onDelete("cascade"),
        foreignKey({
            columns: [table.productId],
            foreignColumns: [products.id],
            name: "fk_cart_product",
        }).onDelete("cascade"),
        unique("uq_user_cart").on(table.userId, table.productId),
        check("user_cart_quantity_check", sql`quantity > 0`),
    ]
);

export const userWishlist = pgTable(
    "user_wishlist",
    {
        id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
        userId: text("user_id").notNull(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        productId: bigint("product_id", { mode: "number" }).notNull(),
        addedAt: timestamp("added_at", { mode: "string" }).defaultNow(),
    },
    (table) => [
        foreignKey({
            columns: [table.userId],
            foreignColumns: [user.id],
            name: "fk_wishlist_user",
        }).onDelete("cascade"),
        foreignKey({
            columns: [table.productId],
            foreignColumns: [products.id],
            name: "fk_wishlist_product",
        }).onDelete("cascade"),
        unique("uq_user_wishlist").on(table.userId, table.productId),
    ]
);
