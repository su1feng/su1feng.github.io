'use client'

import Giscus from '@giscus/react'
import { giscusConfig } from '@/lib/giscus'

export function GuestbookComments() {
  return (
    <Giscus
      repo={giscusConfig.repo as `${string}/${string}`}
      repoId={giscusConfig.repoId}
      category={giscusConfig.category}
      categoryId={giscusConfig.categoryId}
      mapping={giscusConfig.mapping}
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="zh-CN"
      loading="lazy"
    />
  )
}
