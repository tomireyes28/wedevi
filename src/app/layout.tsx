import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Wedevi | Software a medida para negocios",
  description: "Diseñamos y desarrollamos plataformas de gestión, automatizaciones y webs profesionales. Dejá de adaptar tu negocio a herramientas genéricas.",
  keywords: [
    "software a medida", 
    "desarrollo web", 
    "sistemas de gestión", 
    "automatización de procesos", 
    "agencia de software", 
    "desarrollo frontend",
    "Wedevi",
    "Argentina"
  ],
  authors: [{ name: "Wedevi" }],
  openGraph: {
    title: "Wedevi | Software a medida para negocios",
    description: "Plataformas de gestión y webs de alta conversión para empresas que quieren crecer sin cuellos de botella.",
    url: "https://wedevi.com", // Acá vas a poner tu dominio final
    siteName: "Wedevi",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedevi | Software a medida",
    description: "Plataformas de gestión y webs de alta conversión para empresas que quieren crecer sin cuellos de botella.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
