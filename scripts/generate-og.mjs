/**
 * 构建后生成 OG 分享卡片（postbuild 钩子执行）：
 * out/opengraph-image.png + out/posts/<slug>/opengraph-image.png
 *
 * 为什么用脚本而不是 Next 的 opengraph-image 路由约定：
 * Next 16.4.5 静态导出下动态段 route handler 的 params 不会传入（产物 slug 为 "-"），
 * 脚本方案 100% 可控且产出物带 .png 扩展名（GitHub Pages 能给出正确的 Content-Type）。
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs'
import path from 'node:path'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import matter from 'gray-matter'

const root = process.cwd()
const outDir = path.join(root, 'out')
const fontData = readFileSync(
  path.join(root, 'assets/fonts/NotoSansSC-Regular.ttf'),
)
const font = { name: 'noto-sans-sc', data: fontData, weight: 400, style: 'normal' }

function toPost(f) {
  const { data } = matter(readFileSync(path.join(root, 'content', f), 'utf8'))
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date ?? '').slice(0, 10)
  return {
    slug: f.replace(/\.mdx$/, ''),
    title: String(data.title ?? ''),
    date,
  }
}

const posts = readdirSync(path.join(root, 'content'))
  .filter((f) => f.endsWith('.mdx'))
  .map(toPost)
  .sort((a, b) => (a.date < b.date ? 1 : -1))

// 绝对定位三行布局（上：域名 / 中：标题 / 下：日期）——
// 不依赖 satori 对 CJK 字体 metrics 的行高计算，位置完全确定
const frame = (top, middle, bottom) => ({
  type: 'div',
  props: {
    style: {
      width: 1200,
      height: 630,
      display: 'flex',
      position: 'relative',
      background: '#fcfcfd',
    },
    children: [
      {
        type: 'div',
        props: {
          style: {
            position: 'absolute',
            top: 72,
            left: 72,
            right: 72,
            display: 'flex',
            fontSize: 30,
            lineHeight: 1,
            color: '#8794ab',
          },
          children: top,
        },
      },
      {
        type: 'div',
        props: {
          style: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 72,
            right: 72,
            display: 'flex',
            alignItems: 'center',
            fontSize: 68,
            lineHeight: 1,
            fontWeight: 700,
            color: '#2b3450',
            letterSpacing: '-0.01em',
          },
          children: middle,
        },
      },
      {
        type: 'div',
        props: {
          style: {
            position: 'absolute',
            bottom: 110,
            left: 72,
            right: 72,
            display: 'flex',
            fontSize: 30,
            lineHeight: 1,
            color: '#5f6c85',
          },
          children: bottom,
        },
      },
    ],
  },
})

async function render(children, filePath) {
  const svg = await satori(frame(children), {
    width: 1200,
    height: 630,
    fonts: [font],
  })
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } })
    .render()
    .asPng()
  writeFileSync(filePath, png)
}

// 站点卡
await render(
  frame(
    'su1feng.github.io',
    'su1feng',
    '技术 · AI · 独立开发',
  ),
  path.join(outDir, 'opengraph-image.png'),
)

// 文章卡
for (const p of posts) {
  mkdirSync(path.join(outDir, 'posts', p.slug), { recursive: true })
  await render(
    frame(
      'su1feng.github.io',
      p.title,
      p.date,
    ),
    path.join(outDir, 'posts', p.slug, 'opengraph-image.png'),
  )
}

console.log(`[og] generated: 1 site card + ${posts.length} post cards`)
