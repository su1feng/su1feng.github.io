import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // GitHub Pages 只能托管静态文件，走完整静态导出
  output: 'export',
  // Pages 没有图片优化服务，用原始 <img>
  images: { unoptimized: true },
}

export default nextConfig
