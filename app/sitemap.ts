import { MetadataRoute } from 'next'

const BASE = 'https://pewpee.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE + '/', lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: BASE + '/contact-us', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: BASE + '/press', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/privacy', lastModified: new Date('2026-02-01'), changeFrequency: 'yearly', priority: 0.3 },
    { url: BASE + '/terms', lastModified: new Date('2026-02-01'), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
