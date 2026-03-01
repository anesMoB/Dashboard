import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";

import React from "react";

import "./globals.css";
import SideBarProvider from "@/components/Custom/SidebarProvider";

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
}); */
/* 
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export const metadata: Metadata = {
  title: "Dashboard",
  description: "admin Dashboard built with NextJS and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          
          antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SideBarProvider>
            {children}
          </SideBarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
