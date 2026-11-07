import Link from 'next/link'

export const metadata = {
  title: 'projects',
}

const projects = [
  {
    name: 'skill',
    description:
      '个人自用的 Agent Skills 收集：按作者（来源仓库）分目录归档的 AI Agent 技能集，含 tw93/Waza、mattpocock、pstack 等来源，MIT 协议。',
    href: 'https://github.com/su1feng/skill',
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
