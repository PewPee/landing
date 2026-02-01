const SITE_URL = 'https://pewpee.com'
const APP_STORE_URL = 'https://apps.apple.com/us/app/pewpee-music-player-offline/id1483338834'

export function OrganizationWebSiteJsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: 'PewPee',
    url: SITE_URL,
    logo: `${SITE_URL}/img/logo.png`,
    sameAs: [
      'https://twitter.com/PewPeeMusic',
      'https://www.instagram.com/pewpee.music',
      'https://t.me/pewpee_music',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'press@pewpee.com',
      contactType: 'customer support',
      url: `${SITE_URL}/contact-us`,
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PewPee',
    url: SITE_URL,
    description: 'Play, stream & discover songs. Zero ads. Offline listening. Music player for iPhone and iPad.',
    publisher: { '@id': `${SITE_URL}#organization` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}

type FaqItem = { question: string; answer: string }

export function SoftwareApplicationJsonLd() {
  const app = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PewPee — Music Player Offline',
    applicationCategory: 'MusicApplication',
    operatingSystem: 'iOS',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      ratingCount: '1200',
      bestRating: '5',
    },
    downloadUrl: APP_STORE_URL,
    url: SITE_URL,
    description: 'Play, stream & discover songs. Zero ads. Offline listening. Lyrics. Import your music. 500,000+ downloads.',
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }}
    />
  )
}

export function FAQPageJsonLd({ faqData }: { faqData: FaqItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
