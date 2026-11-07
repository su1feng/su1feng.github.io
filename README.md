# su1feng.github.io

[su1feng](https://github.com/su1feng) 的个人博客，线上地址：**https://su1feng.github.io**

技术栈复刻自 [shud.in](https://shud.in)（Shu Ding 的个人博客）：

- **Next.js 16**（App Router，完整静态导出 `output: 'export'`）
- **MDX**（`@mdx-js/mdx` 在 React Server Component 里编译）
- **Shiki**（构建期代码高亮，`github-light` / `github-dark` 双主题）
- **Tailwind CSS v4**
- 部署：GitHub Actions → GitHub Pages，push `main` 即发布

## 本地开发

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # 静态导出到 out/
```

## 写新文章

在 `content/` 下新建 `.mdx` 文件（文件名即 URL slug）：

```mdx
---
title: 文章标题
date: 2026-11-07
description: 一句话摘要（可选）
---

正文支持 MDX 语法和代码块。
```

push 到 `main` 后约 1-2 分钟自动上线。
