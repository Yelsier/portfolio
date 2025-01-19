import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";

const playfont = Play({
    weight: ["400", "700"],
    variable: "--font-play",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Yago Claros Seijo | Full Stack Developer",
    description: "Descubre el portfolio de Yago Claros Seijo, desarrollador web Full Stack especializado en TypeScript, React y MongoDB. Apasionado por crear aplicaciones modernas y escalables, con un enfoque en soluciones eficientes e innovación constante. ¡Conoce más sobre mí!",
    alternates: {
        canonical: "https://yagoclaros.dev",
    },
    authors: {
        name: "Yago Claros Seijo",
        url: "https://yagoclaros.dev",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es-ES">
            <body
                className={`${playfont.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
