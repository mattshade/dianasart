import "../styles/index.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Flow Art Wellness Workshops",
    description: "Flow Art Wellness Workshops: mindful, guided acrylic painting sessions for workplace well-being. Help your team relieve stress, build creative confidence, and strengthen connection through a calming, judgment-free Flow Art experience led by mindfulness facilitator Diana.",
    openGraph: {
        title: "Flow Art Wellness Workshops",
        description: "Flow Art Wellness Workshops: mindful, guided acrylic painting sessions for workplace well-being. Help your team relieve stress, build creative confidence, and strengthen connection through a calming, judgment-free Flow Art experience led by mindfulness facilitator Diana.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
