import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h1 className="mb-7 font-semibold text-[var(--fg-strong)] text-balance">
        404
      </h1>
      <p className="mt-7 leading-7">你访问的页面不存在。</p>
      <p className="mt-7 leading-7">
        <Link
          href="/"
          className="underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]"
        >
          回首页
        </Link>
      </p>
    </>
  )
}
