import APP_CONSTANT from "@/constants/AppConfig";
import type { Config } from "drizzle-kit";

export default {
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: APP_CONSTANT.DATABASE_URL || "",
    },
} satisfies Config;
