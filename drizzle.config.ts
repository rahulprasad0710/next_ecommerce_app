import type { Config } from "drizzle-kit";

const DATABASE_URL =
    "postgresql://postgres:Rahul99pg@localhost:5432/next_ecom_local_2025";
export default {
    schema: "./src/db/schema.ts", // Adjust this path to your schema file
    out: "./drizzle", // Output directory for migrations
    dialect: "postgresql", // This should be a string, not an object
    dbCredentials: {
        url: DATABASE_URL, // Use environment variable for database URL
    },
} satisfies Config;
