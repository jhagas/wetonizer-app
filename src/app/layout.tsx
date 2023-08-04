import ThemeProvider from "@/provider/theme";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://wetonizer.vercel.app/"),
  title: "Wetonizer App",
  description:
    "A website to convert Anno Domini (AD) Calendar system to Javanese Calendar System. Build with Next.js and TypeScript",
  openGraph: {
    title: "Wetonizer App",
    description:
      "A website to convert Anno Domini (AD) Calendar system to Javanese Calendar System. Build with Next.js and TypeScript",
    type: "website",
    locale: "id_ID",
    url: "https://wetonizer.vercel.app/",
    siteName: "Wetonizer App",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
