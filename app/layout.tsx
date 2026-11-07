import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'su1feng',
    template: '%s · su1feng',
  },
  description: 'su1feng 的个人博客——记录技术、AI 与独立开发的学习与思考。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="mx-auto max-w-2xl px-6">
          <header className="flex items-center justify-between py-8 text-[15px]">
            <Link
              href="/"
              className="font-semibold tracking-tight hover:opacity-60"
            >
              su1feng
            </Link>
            <nav className="flex items-center gap-5 text-sm text-zinc-500 dark:text-zinc-400">
              <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100">
                文章
              </Link>
              <a
                href="https://github.com/su1feng"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                GitHub
              </a>
            </nav>
          </header>
          <main className="pb-20">{children}</main>
          <footer className="border-t border-zinc-200 py-8 text-[13px] text-zinc-400 dark:border-zinc-800 dark:text-zinc-600">
            © {new Date().getFullYear()} su1feng · Next.js + MDX + Shiki
          </footer>
        </div>
      </body>
    </html>
  )
}
