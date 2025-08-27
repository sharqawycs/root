import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sharqawy',
  description: 'CS student, builder, and maker. Read my journal and view my projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/Satoshi-Variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-v39-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="font-satoshi antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="p-4 ml-1 flex-1 page-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
