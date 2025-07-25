---
aside: false
---

<script setup>
import chroma from 'chroma-js'

const color = chroma('#D4F880').darken().hex()
</script>

# 安装使用

对于 Node.js，使用 `npm install chroma-js` 命令即可安装该模块。然后使用 `import chroma from 'chroma-js'` 命令将其导入到你的 JavaScript 中。

对于浏览器，请下载 [chroma.min.js](https://cdn.jsdelivr.net/gh/xlovet/assets/chroma.min.js) 文件，或使用 [cdnjs](https://cdnjs.com/libraries/chroma-js) 上的托管版本，即可启动并操作颜色。

```js
chroma('#D4F880').darken().hex() // => '#a1c550'
```

<Box1 :color/>
