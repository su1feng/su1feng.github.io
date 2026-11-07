import type { Metadata } from 'next'
import { Nav } from './components/nav'
import { FadeIn } from './components/fade-in'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://su1feng.github.io'),
  title: {
    default: 'su1feng',
    template: '%s · su1feng',
  },
  description: 'su1feng 的个人博客——记录技术、AI 与独立开发的学习与思考。',
  openGraph: {
    type: 'website',
    images: ['/opengraph-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="p-6 sm:p-10 md:p-14 antialiased">
        {/* 移动端顶部渐隐遮罩（shud.in 同款细节） */}
        <div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-30 h-8 w-full md:hidden"
          style={{ background: 'linear-gradient(to bottom, var(--bg) 35%, transparent)' }}
        />

        <div className="flex flex-col md:flex-row">
          {/* 左侧竖排导航（移动端为顶部横排） */}
          <Nav />

          {/* 内容列：flex-1 靠左，max-w-2xl —— shud.in 同款左对齐布局 */}
          <main className="relative flex-1 max-w-2xl">
            {/* nav 与内容之间的分隔线：桌面为竖线，移动端为横线 */}
            <div
              aria-hidden
              className="absolute left-0 top-0 h-px w-full md:h-full md:w-px bg-[var(--border)] opacity-50"
            />

            <article className="pl-0 pt-6 md:pt-0 md:pl-6 lg:pl-10 xl:pl-14">
              <FadeIn>{children}</FadeIn>
            </article>
          </main>
        </div>
      </body>
    </html>
  )
}
