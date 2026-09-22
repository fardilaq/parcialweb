import type { Metadata } from "next";
import { getDictionary } from "./dictionaries";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

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
      <body >
        <Header></Header>
          <main className="min-h-screen bg-[#F5F5F0]">
            {children}
          </main>
          <Footer></Footer>
      </body>

    </html>
  );
}