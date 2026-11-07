import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <h1 className="mb-7 font-semibold text-[var(--fg-strong)] text-balance">
        su1feng
      </h1>

      <p className="mt-7 leading-7">
        你好，我是 su1feng，一名对技术和 AI 保持好奇的工程师。
      </p>

      <p className="mt-7 leading-7">
        我会把学习笔记写成{' '}
        <Link
          href="/thoughts"
          className="underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]"
        >
          thoughts
        </Link>
        ，把折腾过的东西放在{' '}
        <Link
          href="/projects"
          className="underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]"
        >
          projects
        </Link>{' '}
        里——这个站点本身就是一个：技术栈复刻自{' '}
        <a
          href="https://shud.in"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]"
        >
          shud.in
        </a>
        ，Next.js 静态导出 + MDX + Shiki，零客户端运行时。
      </p>

      <p className="mt-7 leading-7">
        找我的话，可以在{' '}
        <a
          href="https://github.com/su1feng"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]"
        >
          GitHub
        </a>{' '}
        上找到我，或者在{' '}
        <Link
          href="/guestbook"
          className="underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]"
        >
          guestbook
        </Link>{' '}
        留言。
      </p>
    </>
  )
}
