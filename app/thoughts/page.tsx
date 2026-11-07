import { getAllPosts } from '@/lib/posts'
import { ThoughtList } from '@/app/components/thought-list'

export const metadata = {
  title: 'thoughts',
}

export default function ThoughtsPage() {
  const posts = getAllPosts()
  const categories = [
    ...new Set(posts.map((p) => p.category).filter(Boolean)),
  ] as string[]

  return (
    <>
      <h1 className="mb-7 font-semibold text-[var(--fg-strong)] text-balance">
        thoughts
      </h1>
      <ThoughtList posts={posts} categories={categories} />
    </>
  )
}
