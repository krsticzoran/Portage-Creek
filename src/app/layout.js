import localFont from 'next/font/local'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/footer'
import { Providers } from './providers'

const switzer = localFont({
  src: [
    {
      path: '../fonts/switzer/Switzer-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/switzer/Switzer-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/switzer/Switzer-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/switzer/Switzer-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-switzer',
  display: 'swap',
  preload: true,
})

export const metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: 'Portage Creek Web Designs | Custom Websites Built for Speed',
  description:
    'Canada-based web studio building lightning-fast custom websites. Hand-coded, responsive design with 98-100 PageSpeed scores. Perfect for small businesses and academics.',
  openGraph: {
    title: 'Portage Creek Web Designs | Custom Websites Built for Speed',
    description:
      'Canada-based web studio building lightning-fast custom websites. Hand-coded, responsive design with 98-100 PageSpeed scores.',
    url: 'https://portagecreek.netlify.app',
    siteName: 'Portage Creek Web Designs',
    locale: 'en_CA',
    type: 'website',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Portage Creek Web Designs | Fast Custom Websites',
    description:
      'Canada-based web studio. Hand-coded websites with 98-100 PageSpeed scores for small businesses and academics.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${switzer.variable} antialiased font-switzer relative`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
