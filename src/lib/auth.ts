import * as originalSchema from "@/db/schema";

import { betterAuth } from "better-auth";
import { db } from "@/db";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: originalSchema,
    }),

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
});
