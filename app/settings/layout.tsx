import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FamLink",
  description: "家族向けの日常生活サポートアプリ",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <section className="px-2 py-4">{children}</section>
      <section className="fixed bottom-0 w-full">
        <Navigation />
      </section>
    </main>
  );
}
