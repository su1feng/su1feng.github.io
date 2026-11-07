import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div className="space-y-14">
      <section>
        <h1 className="text-xl font-semibold tracking-tight">su1feng</h1>
        <p className="mt-3 leading-7 text-zinc-500 dark:text-zinc-400">
          你好，我是 su1feng。这里记录我在技术、AI 与独立开发上的学习与思考。
        </p>
      </section>

      <section>
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
          Writing
        </h2>
        <ul className="mt-5 space-y-4">
          {posts.map(({ slug, title, date }) => (
            <li key={slug} className="flex items-baseline gap-4">
              <time className="w-24 shrink-0 font-mono text-[13px] text-zinc-400 dark:text-zinc-600">
                {date}
              </time>
              <Link
                href={`/posts/${slug}`}
                className="underline-offset-4 hover:underline"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
