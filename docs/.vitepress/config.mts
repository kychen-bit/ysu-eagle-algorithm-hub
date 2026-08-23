import { defineConfig } from 'vitepress'

const repository = process.env.GITHUB_REPOSITORY ?? ''
const repositoryName = repository.split('/')[1] ?? ''
const base = process.env.GITHUB_ACTIONS === 'true' && repositoryName && !repositoryName.endsWith('.github.io')
  ? `/${repositoryName}/`
  : '/'

const qdRoot = 'knowledge/imported/qd/'
const sjtuRoot = 'blog/imported/sjtu/'
const qdLearningSourceByPath: Record<string, string> = {
  'learning-path/index.md': 'README.md',
  'learning-path/stage-1.md': 'Learning_path_1.md',
  'learning-path/stage-2.md': 'Learning_path_2.md',
  'learning-path/stage-3.md': 'Learning_path_3.md',
  'learning-path/stage-4.md': 'Learning_path_4.md'
}

export default defineConfig({
  lang: 'zh-CN',
  title: '燕鹰算法知识库',
  description: '汇聚 RoboMaster 算法资料，连接学习、实践与传承',
  base,
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['**/_sidebar.md', '**/_navbar.md', '**/_coverpage.md'],
  head: [
    ['meta', { name: 'theme-color', content: '#b42318' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '燕鹰算法知识库' }],
    ['meta', { property: 'og:description', content: '汇聚 RoboMaster 算法资料，连接学习、实践与传承' }],
    ['link', { rel: 'icon', href: `${base}assets/brand/ysu-eagle-mark-blue.png` }]
  ],
  markdown: {
    lineNumbers: true,
    image: { lazyLoading: true }
  },
  themeConfig: {
    logo: {
      light: '/assets/brand/ysu-eagle-mark-blue.png',
      dark: '/assets/brand/ysu-eagle-mark-dark.png',
      alt: '燕鹰战队标志'
    },
    siteTitle: '燕鹰算法知识库',
    nav: [
      { text: '开始学习', link: '/learning-path/' },
      { text: '知识库', link: '/knowledge/' },
      { text: '项目手册', link: '/projects/' },
      { text: '技术博客', link: '/blog/' },
      { text: '资源导航', link: '/resources/' },
      { text: '参与共建', link: '/contribute/' }
    ],
    sidebar: {
      '/learning-path/': [
        { text: '学习路线', items: [
          { text: '算法组第一阶段学习路线', link: '/learning-path/stage-1' },
          { text: '算法组第二阶段学习路线', link: '/learning-path/stage-2' },
          { text: '算法组第三阶段学习路线', link: '/learning-path/stage-3' },
          { text: '算法组第四阶段学习路线', link: '/learning-path/stage-4' }
        ]}
      ],
      '/knowledge/': [
        { text: '知识库', items: [
          { text: '全部分类', link: '/knowledge/' },
          { text: '开发环境', link: '/knowledge/environment' },
          { text: 'Linux 与工程工具', link: '/knowledge/linux-tools' },
          { text: 'C++ 与构建系统', link: '/knowledge/cpp-build' },
          { text: '视觉与相机', link: '/knowledge/vision-camera' },
          { text: '深度学习', link: '/knowledge/deep-learning' },
          { text: '通信与部署', link: '/knowledge/communication-deploy' }
        ]},
        { text: '精选原文', collapsed: true, items: [
          { text: 'Ubuntu 入门', link: '/knowledge/imported/qd/Introduction_to_Linux/hello_ubuntu' },
          { text: 'Linux 基本命令', link: '/knowledge/imported/qd/Introduction_to_Linux/Basic_commands' },
          { text: 'Git 基础', link: '/knowledge/imported/qd/Introduction_to_Linux/Git' },
          { text: 'C++11 语法', link: '/knowledge/imported/qd/Technical_Basics_and_Development_Techniques/C++11_grammar' },
          { text: 'Eigen', link: '/knowledge/imported/qd/Technical_Basics_and_Development_Techniques/Eigen' },
          { text: 'OpenCV 配置', link: '/knowledge/imported/qd/environment_configuration/OpenCV' },
          { text: '相机标定', link: '/knowledge/imported/qd/Project_Tutorial/camera_calibration' }
        ]}
      ],
      '/projects/': [{ text: '项目手册', items: [
        { text: '项目总览', link: '/projects/' },
        { text: '公开手册模板', link: '/projects/template' },
        { text: '最小视觉项目', link: '/projects/minimal-vision' }
      ]}],
      '/blog/': [{ text: '技术博客', items: [
        { text: '最新文章', link: '/blog/' },
        { text: '视觉课程综述', link: '/blog/imported/sjtu/2020-09-05-vision-learning-1-overview' },
        { text: '相机与标定', link: '/blog/imported/sjtu/2021-10-10-vision-learning-2' },
        { text: '装甲板调参经验', link: '/blog/imported/sjtu/2023-05-16-rm-cv-std-how-to-adjust-parameters' }
      ]}],
      '/resources/': [{ text: '资源导航', items: [
        { text: '资源总览', link: '/resources/' },
        { text: '开源项目', link: '/resources/open-source' },
        { text: '其他战队资料', link: '/resources/teams' }
      ]}],
      '/contribute/': [{ text: '参与共建', items: [
        { text: '投稿指南', link: '/contribute/' },
        { text: '写作规范', link: '/contribute/writing-guide' },
        { text: '转载与版权', link: '/contribute/copyright' }
      ]}]
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索资料', buttonAriaLabel: '搜索资料' },
              modal: {
                noResultsText: '没有找到相关资料',
                resetButtonTitle: '清除查询',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
              }
            }
          }
        }
      }
    },
    outline: { level: [2, 3], label: '本页内容' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新' },
    editLink: {
      pattern: 'https://github.com/kychen-bit/ysu-eagle-algorithm-hub/edit/main/docs/:path',
      text: '编辑此页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kychen-bit/ysu-eagle-algorithm-hub' }
    ],
    footer: {
      message: '公开资料仅供学习交流；转载内容版权归原作者所有。',
      copyright: '燕山大学 RoboMaster 燕鹰战队算法组'
    }
  },
  transformPageData(pageData) {
    const path = pageData.relativePath.replace(/\\/g, '/')
    const qdLearningSource = qdLearningSourceByPath[path]

    if (qdLearningSource) {
      pageData.frontmatter.source_type = 'repost'
      pageData.frontmatter.source_project = 'QD Algorithm Library'
      pageData.frontmatter.source_url = `https://github.com/NOMANE-0/QD_Algorithm_Library/blob/main/docs/LearningPath/${qdLearningSource}`
      pageData.frontmatter.license = 'Apache-2.0'
    }

    if (path.startsWith(qdRoot)) {
      const upstream = path.slice(qdRoot.length)
      pageData.frontmatter.source_type = 'repost'
      pageData.frontmatter.source_project = 'QD Algorithm Library'
      pageData.frontmatter.source_url = `https://github.com/NOMANE-0/QD_Algorithm_Library/blob/main/docs/${encodeURI(upstream)}`
      pageData.frontmatter.license = 'Apache-2.0'
    }

    if (path.startsWith(sjtuRoot)) {
      const upstream = path.slice(sjtuRoot.length)
      pageData.frontmatter.source_type = 'repost'
      pageData.frontmatter.source_project = 'SJTU RoboMaster Team Blog'
      pageData.frontmatter.source_url = `https://github.com/SJTU-RoboMaster-Team/SJTU-RoboMaster-Team.github.io/blob/master/_posts/${encodeURI(upstream)}`
      pageData.frontmatter.license = 'MIT'
    }
  }
})
