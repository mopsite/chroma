---
# https://skewb.gitee.io/vitepress/reference/default-theme-home-page
layout: home
titleTemplate: 极小且零依赖的 JavaScript 颜色库

hero:
  name: Chroma.js
  text: 极小且零依赖的 JavaScript 颜色库
  tagline: 用于各种颜色的转换和生成色标
  image:
    src: /logo.svg
  actions:
    - theme: brand
      text: 开始
      link: /guide/start
    - theme: alt
      text: 在 Gitee 上查看
      link: https://gitee.com/skewb/chroma

features:
  - icon: 📚
    title: 颜色读取
    details: 可以从多种格式中读取颜色，包括但不限于 RGB、HEX 等。
  - icon: 🚜
    title: 格式转换
    details: 分析和处理不同格式的颜色，并能将其转换为其他颜色格式。
  - icon: 🌈
    title: 创建色标
    details: 能直接将数值映射到调色板函数中，并创建不同的色标。
  - icon: ⭐️
    title: 超轻量级
    details: 极小且零依赖，可以直接将其插入到 JavaScript 代码框架中。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(-45deg, #E70816 15%, #E48F02 30%, #FFEA01 45%, #00A84D 60%, #007EC3 75%, #923E93 90%);

  --vp-home-hero-image-background-image: linear-gradient(0deg, #E70816 15%, #E48F02 30%, #00A84D 60%, #007EC3 75%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
