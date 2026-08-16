import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import HomePage from './components/HomePage.vue'
import ArticleMeta from './components/ArticleMeta.vue'
import SourceNotice from './components/SourceNotice.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('ArticleMeta', ArticleMeta)
    app.component('SourceNotice', SourceNotice)
  },
  Layout
} satisfies Theme
