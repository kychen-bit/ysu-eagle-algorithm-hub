<script setup lang="ts">
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <aside v-if="frontmatter.source_url" class="source-notice">
    <span class="source-notice__label">来源说明</span>
    <p>
      本文转载或整理自
      <a :href="frontmatter.source_url" target="_blank" rel="noreferrer">{{ frontmatter.source_project || '原始资料' }}</a>
      <template v-if="frontmatter.license">，上游许可证为 {{ frontmatter.license }}</template>。
      内容的页面结构与资源路径可能为适配本站而调整。
    </p>
  </aside>
</template>
