import AvatarHeader from "@/components/avatar-header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SwitchCustomization from "@/components/switch-theme";
import { BookOpen } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Collection - Azura Test Internship",
  description: "A simple book collection app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col ">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
              <div className="container flex h-14 items-center  justify-between px-10">
                <div className="flex items-center space-x-2 ">
                  <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold text-xl"
                  >
                    <BookOpen className="h-7 w-7" />
                    <span>Book Collection</span>
                  </Link>
                  {/* <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
                 
                  </nav> */}
                </div>
                <div className="flex items-center space-x-4">
                  <SwitchCustomization />
                  <AvatarHeader />
                </div>
              </div>
            </header>
            <main className="flex-1 dark:bg-[#0D0907] bg-[#F0EFE7] px-10">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
