import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FamLink | 資産管理",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="pt-10">{children}</div>;
}
