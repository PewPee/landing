import '../styles/globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

import Footer from '../components/footer'
import { OrganizationWebSiteJsonLd } from '../components/json-ld'
import NavigationBar from '../components/navigationbar'

const SITE_URL = 'https://pewpee.com'

export const metadata: Metadata = {
  title: {
    default: 'PewPee — Music Player Offline',
    template: '%s — PewPee',
  },
  description: 'Play, stream & discover songs. Zero ads. Offline listening. Lyrics. Import your music. 4.5★ on App Store. 500,000+ downloads.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    siteName: 'PewPee',
    type: 'website',
    title: 'PewPee — Music Player Offline',
    description: 'Powerful. Free. Zero ads. Play, stream & discover songs on iPhone & iPad.',
    url: SITE_URL,
    images: [{ url: '/common-icon.png', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@PewPeeMusic',
    creator: '@PewPeeMusic',
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/website-icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport = { width: 'device-width', initialScale: 1 }

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <OrganizationWebSiteJsonLd />
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}

        <div className="wrapper">
          <NavigationBar />
          <main className="main-wrapper">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

