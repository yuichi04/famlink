import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
      <body className={`${inter.className} bg-slate-100`}>
        <main className="relative pb-16">
          <section className="p-2">{children}</section>
          <section className="fixed bottom-0 w-full">
            <Navigation />
          </section>
        </main>
      </body>
    </html>
  );
}
