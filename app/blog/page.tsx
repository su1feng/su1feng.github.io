import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'blog',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <h1 className="mb-7 text-[15px] font-semibold text-[var(--fg-strong)] text-balance">
        blog
      </h1>
      <ul className="space-y-3">
        {posts.map(({ slug, title, date, description }) => (
          <li key={slug} className="flex items-baseline gap-4">
            <time className="w-24 shrink-0 font-mono text-[13px] text-[var(--fg-muted)]">
              {date}
            </time>
            <div>
              <Link
                href={`/posts/${slug}`}
                className="underline-offset-2 hover:underline"
              >
                {title}
              </Link>
              {description && (
                <p className="mt-0.5 text-sm text-[var(--fg-muted)]">{description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
