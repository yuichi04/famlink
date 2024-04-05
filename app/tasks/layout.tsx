import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FamLink | やること",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
