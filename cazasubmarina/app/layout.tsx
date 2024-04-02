import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "@/app/ui/layout/NavBar";
import Footer from "@/app/ui/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cazasubmarina",
  description: "Cazasubmarina sitio web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior:"smooth"}}>
      <body className={inter.className}>
      <NavBar />
        {children}
        <Footer />
        
        </body>
    </html>
  );
}
