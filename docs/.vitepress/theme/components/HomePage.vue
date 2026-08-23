<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <main class="entry-home">
    <a
      class="entry-home__logo"
      :href="withBase('/learning-path/')"
      aria-label="进入燕鹰算法知识库"
    >
      <img
        :src="withBase('/assets/brand/ysu-eagle-logo-blue.png')"
        alt="燕鹰战队"
      >
    </a>
  </main>
</template>
