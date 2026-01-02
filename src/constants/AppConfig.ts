import dotenv from "dotenv";

dotenv.config();

const APP_CONSTANT = {
    PORT: process.env.PORT || 3000,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: Number(process.env.DB_PORT) as number,
    DB_NAME: process.env.DB_NAME,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    REVALIDATE_TOKEN: process.env.REVALIDATE_TOKEN,
    PMA_BACKEND_API_URL: process.env.PMA_BACKEND_API_URL,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
    DATABASE_URL: process.env.DATABASE_URL,
};

export default APP_CONSTANT;
