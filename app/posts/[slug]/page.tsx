import { notFound } from 'next/navigation'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import rehypeShiki from '@shikijs/rehype'
import { getAllPosts, getPost } from '@/lib/posts'

type Props = {
  params: Promise<{ slug: string }>
}

// 构建期生成所有文章的静态页面
export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getAllPosts().find((p) => p.slug === slug)
  if (!post) return {}
  return { title: post.title, description: post.description }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  if (!getAllPosts().some((p) => p.slug === slug)) notFound()

  const { meta, content } = getPost(slug)

  // 与 shud.in 相同的思路：MDX 在 React Server Component 里编译，
  // Shiki 在构建期完成代码高亮，浏览器收到的是纯 HTML，零运行时 JS
  const { default: MDXContent } = await evaluate(content, {
    ...runtime,
    rehypePlugins: [
      [rehypeShiki, { themes: { light: 'github-light', dark: 'github-dark' } }],
    ],
  })

  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight">{meta.title}</h1>
        <p className="mt-2 font-mono text-[13px] text-zinc-400 dark:text-zinc-600">
          {meta.date}
        </p>
      </header>
      <div className="prose">
        <MDXContent />
      </div>
    </article>
  )
}
