import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content')

export interface PostMeta {
  slug: string
  title: string
  date: string
  description?: string
}

// gray-matter 底层 js-yaml 会把 YAML 日期解析成 Date 对象，统一转回 ISO 字符串
function toPostMeta(slug: string, data: Record<string, unknown>): PostMeta {
  const rawDate = data.date
  const date =
    rawDate instanceof Date
      ? rawDate.toISOString().slice(0, 10)
      : String(rawDate ?? '').slice(0, 10)

  return {
    slug,
    title: String(data.title ?? slug),
    date,
    description: data.description ? String(data.description) : undefined,
  }
}

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, '')
      const { data } = matter(
        fs.readFileSync(path.join(postsDir, f), 'utf8'),
      )
      return toPostMeta(slug, data)
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): { meta: PostMeta; content: string } {
  const { data, content } = matter(
    fs.readFileSync(path.join(postsDir, `${slug}.mdx`), 'utf8'),
  )
  return { meta: toPostMeta(slug, data), content }
}
