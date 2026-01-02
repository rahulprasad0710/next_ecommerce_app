// app/layout.tsx
import "./globals.css";

import { Instrument_Serif, Inter, Manrope } from "next/font/google";

const instrumentSerif = Instrument_Serif({
    weight: ["400"],
    subsets: ["latin", "latin-ext"],
    variable: "--font-instrument-serif",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600"],
    variable: "--font-inter", // add CSS variable
});

export const metadata = {
    title: {
        default: "Homeable",
        template: "%s | Homeable",
    },
    description: "Your go-to marketplace for quality homily products.",
    twitter: {
        card: "summary_large_image",
        title: "Homeable",
        description: "Your go-to marketplace for quality homily products.",
        images: ["/og-image.png"],
    },
};

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang='en'
            className={`${inter.variable} ${instrumentSerif.variable} ${manrope.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
