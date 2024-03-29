import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ServeNavbar from "@/components/ServeNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grepsr-Demo",
  description: "Part of the Grepsr Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-myColor-100 text-myColor-900`}>
        <ServeNavbar />
        {children}
      </body>
    </html>
  );
}
