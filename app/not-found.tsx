import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <p className="text-4xl font-semibold tracking-tight">404</p>
      <p className="mt-3 text-zinc-500 dark:text-zinc-400">这一页不存在</p>
      <Link
        href="/"
        className="mt-6 inline-block text-sm underline underline-offset-4"
      >
        回首页
      </Link>
    </div>
  )
}
