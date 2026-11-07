'use client'

import { usePathname } from 'next/navigation'

// 纯 CSS 近似 shud.in 的 ViewTransition crossfade：
// pathname 变化时 key 变化 → 重新挂载 → 重放入场动画
export function FadeIn({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <div key={pathname} className="motion-safe:animate-page-in">
      {children}
    </div>
  )
}
