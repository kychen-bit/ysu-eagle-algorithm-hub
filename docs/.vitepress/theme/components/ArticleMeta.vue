<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const typeLabel = computed(() => ({
  original: '燕鹰原创',
  repost: '转载',
  curated: '整理'
}[frontmatter.value.article_type || frontmatter.value.source_type] || ''))

const updatedLabel = computed(() => {
  const value = frontmatter.value.updated
  if (!value) return ''
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value).slice(0, 10)
})
</script>

<template>
  <div v-if="typeLabel || frontmatter.authors || frontmatter.updated" class="article-meta">
    <span v-if="typeLabel" class="article-meta__type">{{ typeLabel }}</span>
    <span v-if="frontmatter.authors">作者：{{ Array.isArray(frontmatter.authors) ? frontmatter.authors.join('、') : frontmatter.authors }}</span>
    <span v-if="updatedLabel">更新：{{ updatedLabel }}</span>
  </div>
</template>
