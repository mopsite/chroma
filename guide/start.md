---
aside: false
---

<script setup>
import chroma from 'chroma-js'

const color = chroma('pink').darken().saturate(2).hex()
const colors = chroma.scale(['#fafa6e', '#2A4858']).mode('lch').colors(6)
</script>

# 快速开始

以下是 chroma.js 能为你做的几件事：

- 从各种格式中读取颜色
- 分析和处理颜色
- 将颜色转换为多种格式
- 不同色彩空间中的线性插值和贝塞尔插值

下面是一个简单的 `读取 → 操作 → 输出` 链的示例：

```js
chroma('pink').darken().saturate(2).hex() // => '#ff6d93'
```

<Box1 :color />

除此之外，chroma.js 还可以使用各种方法帮你生成漂亮的颜色，例如用于映射或数据可视化的调色板。

```js
chroma.scale(['#fafa6e', '#2A4858']).mode('lch').colors(6)
// => ['#fafa6e', '#9cdf7c', '#4abd8c', '#00968e', '#106e7c', '#2a4858']
```

<Box2 :colors />

Chroma.js 还提供了更多功能，但上述内容就是它的要点。
