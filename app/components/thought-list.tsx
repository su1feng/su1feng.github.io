'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { PostMeta } from '@/lib/posts'

// 固定五分类（tw93 同款集合），无文章的分类显示空态
const FIXED_CATEGORIES = ['分享', '学习', '创作', '思考', '生活']

export function ThoughtList({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState<string>('全部')
  const filtered =
    active === '全部' ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-x-4 gap-y-1">
        {['全部', ...FIXED_CATEGORIES].map((c) => (
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

      {filtered.length === 0 ? (
        <p className="leading-7 text-[var(--fg-muted)]">
          这个分类下还没有文章。
        </p>
      ) : (
        <ul className="space-y-3">
          {filtered.map(({ slug, title, date, description, category }) => (
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
                {category && (
                  <span className="ml-2 text-xs text-rurikon-400 dark:text-[var(--fg-muted)]">
                    {category}
                  </span>
                )}
                {description && (
                  <p className="mt-0.5 text-sm text-[var(--fg-muted)]">
                    {description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
