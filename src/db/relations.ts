import {
    account,
    categories,
    products,
    session,
    user,
    userCart,
    userWishlist,
} from "./schema";

import { relations } from "drizzle-orm/relations";

export const accountRelations = relations(account, ({ one }) => ({
    user: one(user, {
        fields: [account.userId],
        references: [user.id],
    }),
}));

export const userRelations = relations(user, ({ many }) => ({
    accounts: many(account),
    sessions: many(session),
    userCarts: many(userCart),
    userWishlists: many(userWishlist),
}));

export const sessionRelations = relations(session, ({ one }) => ({
    user: one(user, {
        fields: [session.userId],
        references: [user.id],
    }),
}));

export const categoriesRelations = relations(categories, ({ one, many }) => ({
    category: one(categories, {
        fields: [categories.parentId],
        references: [categories.id],
        relationName: "categories_parentId_categories_id",
    }),
    categories: many(categories, {
        relationName: "categories_parentId_categories_id",
    }),
    products: many(products),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
    category: one(categories, {
        fields: [products.categoryId],
        references: [categories.id],
    }),
    userCarts: many(userCart),
    userWishlists: many(userWishlist),
}));

export const userCartRelations = relations(userCart, ({ one }) => ({
    user: one(user, {
        fields: [userCart.userId],
        references: [user.id],
    }),
    product: one(products, {
        fields: [userCart.productId],
        references: [products.id],
    }),
}));

export const userWishlistRelations = relations(userWishlist, ({ one }) => ({
    user: one(user, {
        fields: [userWishlist.userId],
        references: [user.id],
    }),
    product: one(products, {
        fields: [userWishlist.productId],
        references: [products.id],
    }),
}));
