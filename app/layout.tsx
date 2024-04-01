import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FamLink",
  description: "家族向けの日常生活サポートアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main className="pt-2 pb-20">{children}</main>
        <footer className="fixed bottom-0 left-0 w-full">
          <Navigation />
        </footer>
      </body>
    </html>
  );
}
