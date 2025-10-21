import type { Metadata } from 'next';
import { Inter, Playfair_Display, Bebas_Neue } from 'next/font/google';
import './globals.css';
import Providers from '@/components/providers';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ScrollToTop from '@/components/ui/scroll-to-top';
import PageTransition from '@/components/layout/page-transition';
import CustomCursor from '@/components/ui/custom-cursor';
import { Toaster } from 'react-hot-toast';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Kuriftu Resort & Spa Water Park | Luxury Resort in Bishoftu',
  description: 'Experience luxury accommodation, thrilling water park adventures, and rejuvenating spa treatments at Kuriftu Resort & Spa in Bishoftu, Ethiopia.',
  keywords: 'Kuriftu Resort, Water Park, Bishoftu, Ethiopia, Luxury Hotel, Spa, Lake Resort',
  openGraph: {
    title: 'Kuriftu Resort & Spa Water Park',
    description: 'Your ultimate destination for luxury and adventure in Bishoftu',
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kuriftu Resort & Spa Water Park',
    description: 'Your ultimate destination for luxury and adventure in Bishoftu',
    images: ['/images/twitter-card.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${playfair.variable} ${bebas.variable}`}
      suppressHydrationWarning
    >
      <body className="font-inter antialiased bg-white text-neutral-900 overflow-x-hidden">
        <Providers>
          {/* Custom Cursor (Desktop only) */}
          <CustomCursor />
          
          {/* Header Navigation */}
          <Header />
          
          {/* Page Content with Transitions */}
          <PageTransition>
            <main className="min-h-screen">
              {children}
            </main>
          </PageTransition>
          
          {/* Footer */}
          <Footer />
          
          {/* Scroll to Top Button */}
          <ScrollToTop />
          
          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#fff',
                color: '#212121',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                borderRadius: '12px',
                padding: '16px',
              },
              success: {
                iconTheme: {
                  primary: '#22c55e',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}