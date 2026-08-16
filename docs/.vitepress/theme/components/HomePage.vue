<script setup lang="ts">
import { withBase } from 'vitepress'
const stages = [
  ['00', '准备与环境', '建立 Linux 开发环境，学会提问与记录。', '/learning-path/stage-0'],
  ['01', '工程基础', '掌握 Git、C++ 与 CMake 的协作底座。', '/learning-path/stage-1'],
  ['02', '视觉入门', '从图像、相机到 OpenCV 的最小闭环。', '/learning-path/stage-2'],
  ['03', '目标识别', '完成装甲板检测与基础分类实践。', '/learning-path/stage-3'],
  ['04', '空间解算', '理解坐标系、PnP、标定与弹道。', '/learning-path/stage-4'],
  ['05', '系统联调', '连接预测、控制、通信与整车协作。', '/learning-path/stage-5']
]

const topics = [
  ['视觉与相机', '标定、成像、OpenCV、坐标变换', '/knowledge/vision-camera'],
  ['C++ 工程', '语言、构建、多线程、代码规范', '/knowledge/cpp-build'],
  ['深度学习', '检测网络、训练、数据集与部署', '/knowledge/deep-learning'],
  ['通信与部署', 'ROS 2、串口、设备驱动与排障', '/knowledge/communication-deploy']
]
</script>

<template>
  <main class="hub-home">
    <section class="hero-manual">
      <div class="hero-manual__copy">
        <p class="eyebrow">YSU EAGLE · ALGORITHM GROUP</p>
        <h1>把散落的经验，<br><em>编成一条可走的路。</em></h1>
        <p class="hero-manual__lead">燕鹰算法知识库汇聚 RoboMaster 算法资料，连接学习、实践与传承。从一台空白电脑开始，走到能够部署、调试并维护一个真实视觉系统。</p>
        <div class="hero-manual__actions">
          <a class="button-primary" :href="withBase('/learning-path/')">从学习路线开始</a>
          <a class="button-quiet" :href="withBase('/knowledge/')">浏览全部资料 →</a>
        </div>
      </div>
      <div class="hero-manual__mark" aria-label="燕鹰战队标志">
        <img :src="withBase('/assets/brand/ysu-eagle-logo-blue.png')" alt="燕鹰战队 YSU 标志">
        <div class="hero-manual__index">
          <span>FIELD MANUAL</span>
          <strong>2026 / 01</strong>
        </div>
      </div>
    </section>

    <section class="home-section route-section">
      <header class="section-heading">
        <div><span>01</span><p>学习路线</p></div>
        <h2>不是文章列表，<br>是一套训练次序。</h2>
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

    <section class="home-section topic-section">
      <header class="section-heading section-heading--compact">
        <div><span>02</span><p>技术专题</p></div>
        <h2>按问题查找，<br>按项目落地。</h2>
      </header>
      <div class="topic-grid">
        <a v-for="(topic, index) in topics" :key="topic[0]" :href="withBase(topic[2])" class="topic-block">
          <span>0{{ index + 1 }}</span>
          <h3>{{ topic[0] }}</h3>
          <p>{{ topic[1] }}</p>
          <b>进入专题 →</b>
        </a>
      </div>
    </section>

    <section class="home-section dispatch-section">
      <div class="dispatch-title">
        <p class="eyebrow">LATEST DISPATCH</p>
        <h2>把踩过的坑，<br>留在下一次出发之前。</h2>
      </div>
      <div class="dispatch-list">
        <a :href="withBase('/blog/imported/sjtu/2023-05-16-rm-cv-std-how-to-adjust-parameters')">
          <time>2023.05.16</time><strong>装甲板识别调参经验</strong><span>转载 · 视觉</span>
        </a>
        <a :href="withBase('/blog/imported/sjtu/2021-10-10-vision-learning-2')">
          <time>2021.10.10</time><strong>相机模型与相机标定</strong><span>转载 · 课程</span>
        </a>
        <a :href="withBase('/blog/imported/sjtu/2020-09-05-vision-learning-1-overview')">
          <time>2020.09.05</time><strong>RoboMaster 视觉综述</strong><span>转载 · 入门</span>
        </a>
      </div>
      <a class="button-quiet" :href="withBase('/blog/')">阅读全部文章 →</a>
    </section>

    <section class="home-section contribution-strip">
      <div><span>03</span><p>持续共建</p></div>
      <h2>文档不是交付物，<br>是协作发生的地方。</h2>
      <p>通过 Markdown 和 Pull Request 投稿。每一次修正、补充和复盘，都会成为下一届队员的起点。</p>
      <a class="button-primary" :href="withBase('/contribute/')">查看投稿方式</a>
    </section>
  </main>
</template>
