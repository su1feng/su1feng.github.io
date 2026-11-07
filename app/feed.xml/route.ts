import { getAllPosts } from '@/lib/posts'

export const dynamic = 'force-static'

const BASE = 'https://su1feng.github.io'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export async function GET() {
  const items = getAllPosts()
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${BASE}/posts/${p.slug}</link>
      <guid>${BASE}/posts/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>${
        p.description
          ? `\n      <description>${esc(p.description)}</description>`
          : ''
      }
    </item>`,
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>su1feng</title>
    <link>${BASE}</link>
    <description>su1feng 的博客 — 技术、AI 与独立开发</description>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
