# 安装

对于 Node.js，使用 `npm install chroma-js` 命令即可安装 chroma-js npm 模块，然后使用 `import chroma from 'chroma-js'` 命令将其导入到你的 JavaScript 中。

对于浏览器，请下载 [chroma.min.js](https://cdn.jsdelivr.net/gh/xlovet/asset/js/chroma.js) 文件，或使用 [cdnjs](https://cdnjs.com/libraries/chroma-js) 上的托管版本，即可启动并操作颜色。

```js
chroma('#D4F880').darken().hex()
```

<Color1 :color=c1 />

<script setup>
  import chroma from 'chroma-js'

  const c1 = chroma('#d4f880').darken().hex()
</script>
