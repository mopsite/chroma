import DefaultTheme from 'vitepress/theme'
import './vars.css'

import Box1 from './components/Box1.vue'
import Box2 from './components/Box2.vue'
import Box3 from './components/Box3.vue'
import Box4 from './components/Box4.vue'
import Box5 from './components/Box5.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Box1', Box1)
    app.component('Box2', Box2)
    app.component('Box3', Box3)
    app.component('Box4', Box4)
    app.component('Box5', Box5)
  }
}
