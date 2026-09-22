import type { Metadata } from "next";
import { getDictionary } from "./dictionaries";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.title, description: dict.description };
}

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}