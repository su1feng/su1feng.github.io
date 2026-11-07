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

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, '')
      const { data } = matter(
        fs.readFileSync(path.join(postsDir, f), 'utf8'),
      )
      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? '').slice(0, 10),
        description: data.description ? String(data.description) : undefined,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): { meta: PostMeta; content: string } {
  const { data, content } = matter(
    fs.readFileSync(path.join(postsDir, `${slug}.mdx`), 'utf8'),
  )
  return {
    meta: {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? '').slice(0, 10),
      description: data.description ? String(data.description) : undefined,
    },
    content,
  }
}
