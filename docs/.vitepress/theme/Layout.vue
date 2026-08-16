<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import ArticleMeta from './components/ArticleMeta.vue'
import SourceNotice from './components/SourceNotice.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <ArticleMeta />
      <SourceNotice />
    </template>
  </Layout>
</template>
