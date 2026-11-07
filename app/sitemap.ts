import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

export const dynamic = 'force-static'

const BASE = 'https://su1feng.github.io'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/blog`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/projects`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`, changeFrequency: 'monthly', priority: 0.5 },
    ...getAllPosts().map((p) => ({
      url: `${BASE}/posts/${p.slug}`,
      lastModified: new Date(p.date),
    })),
  ]
}
