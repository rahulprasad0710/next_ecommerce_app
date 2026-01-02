import "dotenv/config";

import APP_CONSTANT from "../constants/AppConfig";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

// Create connection pool
const pool = new Pool({
    host: APP_CONSTANT.DB_HOST,
    port: APP_CONSTANT.DB_PORT,
    database: APP_CONSTANT.DB_NAME,
    user: APP_CONSTANT.DB_USER,
    password: APP_CONSTANT.DB_PASSWORD,
    ssl: {
        rejectUnauthorized: false,
    },
});

pool.on("connect", async (client) => {
    try {
        // Set timezone or other session settings
        await client.query(`SET TIME ZONE 'UTC'`);
        console.log("Database connected with UTC timezone");
    } catch (error) {
        console.error("Error setting time zone:", error);
    }
});

pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
});

// const pool = new Pool({
//     host: "localhost",
//     port: 5432,
//     database: "next_ecom_local_2025",
//     user: "postgres",
//     password: "Rahul99pg",
// });

// Enhanced drizzle client with better error handling
export const db = drizzle(pool, {
    logger: true, // Enable query logging for debugging,
});
