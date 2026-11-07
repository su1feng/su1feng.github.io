'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { href: '/', label: 'about' },
  { href: '/thoughts', label: 'thoughts' },
  { href: '/projects', label: 'projects' },
  { href: '/guestbook', label: 'guestbook' },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav
      className="w-full font-serif italic md:w-16 md:mr-6 lg:mr-10 xl:mr-14 shrink-0"
      style={{ letterSpacing: '-0.096px' }}
    >
      <ul className="mb-6 flex gap-2 justify-end lowercase md:mb-0 md:block md:sticky md:top-14 md:text-right">
        {items.map(({ href, label }) => {
          const active =
            href === '/' ? pathname === '/' : pathname.startsWith(href)
          return (
            <li
              key={href}
              className={
                active
                  ? 'text-rurikon-800 dark:text-[var(--fg-strong)] -mx-2 px-2'
                  : 'text-rurikon-300 hover:text-rurikon-600 dark:text-[var(--fg-muted)] dark:hover:text-[var(--fg)] transition-colors -mx-2 px-2'
              }
            >
              <Link href={href}>{label}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
