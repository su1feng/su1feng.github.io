import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function HomePage() {
  const latest = getAllPosts().slice(0, 3)

  return (
    <>
      <h1 className="mb-7 text-[15px] font-semibold text-[var(--fg-strong)] text-balance">
        su1feng
      </h1>

      <p className="mt-7 leading-7">
        你好，我是 su1feng，一名对技术和 AI 保持好奇的工程师。
      </p>

      <p className="mt-7 leading-7">
        我会把学习笔记写成 <Link href="/blog" className="underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]">文章</Link>，把折腾过的东西放在{' '}
        <Link href="/projects" className="underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]">projects</Link> 里，这个站点本身就是一个——
        技术栈复刻自 <a href="https://shud.in" target="_blank" rel="noreferrer" className="underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]">shud.in</a>：
        Next.js 静态导出 + MDX + Shiki，零客户端运行时。
      </p>

      <p className="mt-7 leading-7">
        找我的话，可以在{' '}
        <a href="https://github.com/su1feng" target="_blank" rel="noreferrer" className="underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]">GitHub</a>{' '}
        上找到我。
      </p>

      <h2 className="mt-14 mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--fg-muted)]">
        最新文章
      </h2>
      <ul className="space-y-3">
        {latest.map(({ slug, title, date }) => (
          <li key={slug} className="flex items-baseline gap-4">
            <time className="w-24 shrink-0 font-mono text-[13px] text-[var(--fg-muted)]">
              {date}
            </time>
            <Link href={`/posts/${slug}`} className="underline-offset-2 hover:underline">
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4">
        <Link
          href="/blog"
          className="text-sm text-[var(--fg-muted)] underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]"
        >
          查看全部 →
        </Link>
      </p>
    </>
  )
}
