import type { Metadata } from 'next';
import { Bebas_Neue, Barlow } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Chatbot } from '@/components/shared/chatbot';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const barlow = Barlow({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'AutoTaller Novex | Taller Mecánico en Madrid', template: '%s | AutoTaller Novex' },
  description: 'Taller mecánico profesional en Madrid. Cambio de aceite, frenos, neumáticos, diagnóstico y más. Presupuesto sin compromiso.',
  keywords: ['taller mecánico', 'Madrid', 'coches', 'reparación', 'ITV', 'frenos'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    title: 'AutoTaller Novex',
    description: 'Taller mecánico profesional en Madrid con más de 15 años de experiencia.',
    siteName: 'AutoTaller Novex',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bebas.variable} ${barlow.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
