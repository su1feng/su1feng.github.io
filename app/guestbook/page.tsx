import Link from 'next/link'
import { GuestbookComments } from '@/app/components/giscus'
import { giscusConfig } from '@/lib/giscus'

export const metadata = {
  title: 'guestbook',
}

export default function GuestbookPage() {
  const enabled = Boolean(giscusConfig.repoId && giscusConfig.categoryId)

  return (
    <>
      <h1 className="mb-7 font-semibold text-[var(--fg-strong)] text-balance">
        guestbook
      </h1>

      <p className="mt-7 leading-7">
        欢迎留下一句话。留言基于 GitHub Discussions，用 GitHub
        账号登录即可发言，数据存在本仓库里。
      </p>

      {enabled ? (
        <div className="mt-10">
          <GuestbookComments />
        </div>
      ) : (
        <p className="mt-7 leading-7 text-[var(--fg-muted)]">
          留言板尚未启用：到{' '}
          <a
            href="https://giscus.app/zh-CN"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]"
          >
            giscus.app
          </a>{' '}
          为本仓库开启 Discussions 并生成配置，填入 <code>lib/giscus.ts</code>{' '}
          即可激活。
        </p>
      )}

      <p className="mt-7 leading-7 text-[var(--fg-muted)]">
        <Link href="/" className="underline underline-offset-2">
          回首页
        </Link>
      </p>
    </>
  )
}
