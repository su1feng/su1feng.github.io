'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { PostMeta } from '@/lib/posts'

// tw93 同款交互：分类 Tab 即点即筛；全部条目渲染进 HTML，切换零请求
export function ThoughtList({
  posts,
  categories,
}: {
  posts: PostMeta[]
  categories: string[]
}) {
  const [active, setActive] = useState<string>('全部')
  const filtered =
    active === '全部' ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-x-4 gap-y-1">
        {['全部', ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={
              active === c
                ? 'cursor-pointer text-[var(--fg-strong)]'
                : 'cursor-pointer text-rurikon-300 hover:text-rurikon-600 dark:text-[var(--fg-muted)] dark:hover:text-[var(--fg)] transition-colors'
            }
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="space-y-3">
        {filtered.map(({ slug, title, date, description }) => (
          <li key={slug} className="flex items-baseline gap-4">
            <time className="w-24 shrink-0 font-mono text-[13px] text-[var(--fg-muted)]">
              {date}
            </time>
            <div>
              <Link
                href={`/thoughts/${slug}`}
                className="underline-offset-2 hover:underline"
              >
                {title}
              </Link>
              {description && (
                <p className="mt-0.5 text-sm text-[var(--fg-muted)]">
                  {description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
