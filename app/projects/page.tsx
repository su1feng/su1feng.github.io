import Link from 'next/link'

export const metadata = {
  title: 'projects',
}

const projects = [
  {
    name: 'su1feng.github.io',
    description:
      '你正在看的这个站点。Next.js 静态导出 + MDX + Shiki 双主题高亮，技术栈复刻自 shud.in，零客户端运行时。',
    href: 'https://github.com/su1feng/su1feng.github.io',
  },
  {
    name: 'Coming soon',
    description: '下一个折腾中的东西，敬请期待。',
    href: null,
  },
]

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-7 font-semibold text-[var(--fg-strong)] text-balance">
        projects
      </h1>
      <ul className="space-y-6">
        {projects.map(({ name, description, href }) => (
          <li key={name}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[var(--fg-strong)] underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]"
              >
                {name}
              </a>
            ) : (
              <span className="font-medium text-[var(--fg-strong)]">{name}</span>
            )}
            <p className="mt-1 leading-7 text-[var(--fg)]">{description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
