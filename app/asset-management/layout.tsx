import type { Metadata } from "next";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  title: "FamLink | 資産管理",
  description: "家族向けの日常生活サポートアプリ",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="pb-12">
      <section className="p-2">{children}</section>
      <section className="fixed bottom-0 w-full">
        <Navigation />
      </section>
    </main>
  );
}
