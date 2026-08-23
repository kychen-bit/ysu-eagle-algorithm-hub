<script setup lang="ts">
import { withBase } from 'vitepress'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const homeContent = ref<HTMLElement | null>(null)

const stages = [
  ['01', '第一阶段', 'C++、Ubuntu、CMake、Markdown 与 Git。', '/learning-path/stage-1'],
  ['02', '第二阶段', 'OpenCV、相机模型、PnP 与线性代数。', '/learning-path/stage-2'],
  ['03', '第三阶段', 'ROS 2，并分流至视觉组与导航组。', '/learning-path/stage-3'],
  ['04', '正式队员', '工程部署、ROS 调试与算法专项训练。', '/learning-path/stage-4']
]

const updateHomeState = () => {
  document.body.classList.toggle('ysu-home-entered', window.scrollY > window.innerHeight * 0.55)
}

const enterSite = (event?: WheelEvent) => {
  if (event && event.deltaY <= 0) return
  event?.preventDefault()
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  homeContent.value?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
}

onMounted(() => {
  document.body.classList.add('ysu-home-page')
  updateHomeState()
  window.addEventListener('scroll', updateHomeState, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateHomeState)
  document.body.classList.remove('ysu-home-page', 'ysu-home-entered')
})
</script>

<template>
  <main class="hub-home">
    <section class="entry-splash" @wheel="enterSite">
      <button
        class="entry-splash__logo"
        type="button"
        aria-label="进入燕鹰算法知识库首页"
        @click="enterSite()"
      >
        <img
          :src="withBase('/assets/brand/ysu-eagle-entry-blue.png')"
          alt="燕鹰战队"
        >
      </button>
    </section>

    <div ref="homeContent" class="home-content">
      <section class="home-section route-section">
        <header class="simple-section-heading">
          <div><span>01</span><h2>学习路线</h2></div>
          <a :href="withBase('/learning-path/')">查看完整路线 →</a>
        </header>
        <div class="stage-list">
          <a v-for="stage in stages" :key="stage[0]" :href="withBase(stage[3])" class="stage-row">
            <span class="stage-row__number">{{ stage[0] }}</span>
            <strong>{{ stage[1] }}</strong>
            <p>{{ stage[2] }}</p>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section class="home-section contribution-strip contribution-strip--simple">
        <div><span>02</span><h2>投稿方式</h2></div>
        <p>通过 Markdown 和 Pull Request 提交文章或修订。</p>
        <a class="button-primary" :href="withBase('/contribute/')">查看投稿指南</a>
      </section>
    </div>
  </main>
</template>
