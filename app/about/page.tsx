export const metadata = {
  title: 'about',
}

export default function AboutPage() {
  return (
    <>
      <h1 className="mb-7 text-[15px] font-semibold text-[var(--fg-strong)] text-balance">
        about
      </h1>

      <p className="mt-7 leading-7">
        我是 su1feng，工程师，关注 Web 开发、AI 工具链与独立开发。
      </p>

      <p className="mt-7 leading-7">
        这个博客用来沉淀学习和思考——写下来的过程本身就是最好的复习。
      </p>

      <p className="mt-7 leading-7">
        关于本站的技术实现，见文章
        <a href="/posts/build-this-blog" className="underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]">
          「这个博客是怎么搭的」
        </a>
        。
      </p>

      <p className="mt-7 leading-7">
        联系方式：
        <a
          href="https://github.com/su1feng"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 decoration-[var(--fg-muted)] hover:decoration-[var(--fg-strong)]"
        >
          GitHub
        </a>
        。
      </p>
    </>
  )
}
