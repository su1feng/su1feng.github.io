'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { href: '/blog', label: 'blog' },
  { href: '/projects', label: 'projects' },
  { href: '/about', label: 'about' },
  { href: 'https://github.com/su1feng', label: 'github', external: true },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="w-full md:w-16 md:mr-6 lg:mr-10 xl:mr-14 shrink-0">
      <ul className="mb-6 flex gap-3 justify-end lowercase md:mb-0 md:block md:sticky md:top-14 md:text-right">
        {items.map(({ href, label, external }) => {
          const active =
            !external && (href === '/' ? pathname === '/' : pathname.startsWith(href))
          return (
            <li
              key={href}
              className={
                active
                  ? 'font-medium text-[var(--fg-strong)] -mx-2 px-2'
                  : 'text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors -mx-2 px-2'
              }
            >
              {external ? (
                <a href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
