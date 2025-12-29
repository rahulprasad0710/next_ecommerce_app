import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1F2937", // Your existing dark gray
                secondary: "#ede5de", // Extracted secondary (light gray/beige)
                accent: "#D4A574", // Extracted primary (warm beige/accent)
                "accent-dark": "#B08A5D", // A darker shade of the accent
                black: "#000000",
                white: "#FFFFFF",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                heading: ["Poppins", "sans-serif"],
            },
            maxWidth: {
                nav: "1680px",
                container: "1440px",
            },
        },
    },
    plugins: [],
};
export default config;
