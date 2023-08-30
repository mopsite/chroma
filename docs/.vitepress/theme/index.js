import DefaultTheme from 'vitepress/theme'
import './vars.css'
import Color1 from './components/Color1.vue'
import Color2 from './components/Color2.vue'
import Color3 from './components/Color3.vue'
import Color4 from './components/Color4.vue'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('Color1', Color1)
    ctx.app.component('Color2', Color2)
    ctx.app.component('Color3', Color3)
    ctx.app.component('Color4', Color4)
  }
}
