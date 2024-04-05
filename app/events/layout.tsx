import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FamLink | イベント",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
