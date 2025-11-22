import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nodo.do'),
  title: {
    default: 'NODO SRL | Soluciones Tecnológicas en República Dominicana',
    template: '%s | NODO SRL'
  },
  description: 'Empresa líder en soluciones tecnológicas, IoT, rastreo GPS y desarrollo de software en República Dominicana. NODO GPS y NODO Ruteame para gestión de flotas.',
  keywords: ['NODO', 'GPS República Dominicana', 'Rastreo satelital', 'Gestión de flotas', 'IoT', 'Ruteame', 'Desarrollo software RD', 'Tecnología RD', 'Smart GPS'],
  authors: [{ name: 'NODO SRL' }],
  creator: 'NODO SRL',
  publisher: 'NODO SRL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_DO',
    url: 'https://nodo.do',
    siteName: 'NODO SRL',
    title: 'NODO SRL | Soluciones Tecnológicas en República Dominicana',
    description: 'Empresa líder en soluciones tecnológicas, IoT, rastreo GPS y desarrollo de software en República Dominicana.',
    images: [
      {
        url: '/images/nodo-logo.svg',
        width: 1200,
        height: 630,
        alt: 'NODO SRL Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NODO SRL | Soluciones Tecnológicas',
    description: 'Empresa líder en soluciones tecnológicas, IoT, rastreo GPS y desarrollo de software en República Dominicana.',
    images: ['/images/nodo-logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Agregar cuando tengas las claves
    // google: 'tu-codigo-de-verificacion',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
