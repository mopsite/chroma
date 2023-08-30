# Chroma

## chroma

`chroma(color)`

第一步，是将你的颜色放入 chroma.js。这就是通用构造函数 `chroma()` 的作用。该函数尝试为你猜测输入颜色的格式。例如，它将识别 W3CX11 规范中的任何命名颜色：

```js
chroma('hotpink')
```

<Color1 :color=c1 />

如果没有匹配的命名颜色，chroma.js 则会检查十六进制字符串。它忽略大小写，`#` 符号是可选的，并能识别较短的三个字母格式。因此，诸如 `#ff3399`、`ff3399`、`f39` 等都是有效的十六进制表示形式。

```js
chroma('#ff3399')
chroma('f39')
```

<Color1 :color=c2 />

除了十六进制字符串之外，十六进制数（事实上，任何介于 0 到 16777215 之间的数）都将被识别。

```js
chroma(0xff3399)
```

<Color1 :color=c2 />

你可以单独传递 RGB 值。每个参数必须在 0 到 255 之间。你可以将数字作为单独的参数或作为数组传递。

```js
chroma(0xff, 0x33, 0x99)
chroma(255, 51, 153)
chroma([255, 51, 153])
```

<Color1 :color=c2 />
<Color1 :color=c2 />
<Color1 :color=c2 />

你也可以通过将色彩空间的名称作为最后一个参数，构造来自不同色彩空间的颜色。在这里，我们通过传递色调度数（0 ~ 360）、饱和度和亮度的百分比来定义 HSL 中的颜色：

```js
chroma(338, 1, 0.6, 'hsl')
```

<Color1 :color=c2 />

你还可以通过传递一个普通的 js 对象来构造颜色，该对象的属性对应于 chroma.js 支持的色彩空间：

```js
chroma({ h: 120, s: 1, l: 0.75 })
chroma({ l: 80, c: 25, h: 200 })
chroma({ c: 1, m: 0.5, y: 0, k: 0.2 })
```

<Color1 :color=c3 />
<Color1 :color=c4 />
<Color1 :color=c5 />

## chroma.valid

你可以使用 `chroma.valid` 来判断是否可以通过 chroma.js 正确解析某个颜色参数。该函数返回布尔值。

```js
chroma.valid('red') // true
chroma.valid('bread') // false
chroma.valid('#F0000D') // true
chroma.valid('#FOOOOD') // false
```

## chroma.hsl

`chroma.hsl(hue, saturation, lightness)`

每个色彩空间在 chroma 命名空间下都有自己的构造函数。

```js
chroma.hsl(330, 1, 0.6)
```

<Color1 :color=c2 />

## chroma.lab

`chroma.lab(lightness, a, b)`

CIELAB 色彩空间。

```js
chroma.lab(40, -20, 50)
chroma.lab(50, -20, 50)
chroma.lab(80, -20, 50)
```

<Color1 :color=c6 />
<Color1 :color=c7 />
<Color1 :color=c8 />

## chroma.oklab

`chroma.oklab(lightness, a, b)`

[Oklab](https://bottosson.github.io/posts/oklab/) 色彩空间。

```js
chroma.oklab(0.4, -0.2, 0.5)
chroma.oklab(0.5, -0.2, 0.5)
chroma.oklab(0.8, -0.2, 0.5)
```

<Color1 :color=c9 />
<Color1 :color=c10 />
<Color1 :color=c11 />

## chroma.lch

`chroma.lch(lightness, chroma, hue)`

l 和 c 的范围取决于色调，大致范围在 0 - 100 和 0 - 150 之间，h 的范围在 0 到 360。

```js
chroma.lch(80, 40, 130)
chroma(80, 40, 130, 'lch')
```

<Color1 :color=c12 />
<Color1 :color=c12 />

## chroma.hcl

`chroma.lch(hue, lightness, chroma)`

你可以使用 hcl 代替 [lch](#chroma-lch)。亮度和色相通道被切换为与 HSL 更一致。

```js
chroma.hcl(130, 40, 80)
chroma(130, 40, 80, 'hcl')
```

<Color1 :color=c12 />
<Color1 :color=c12 />

## chroma.oklch

`chroma.oklch(lightness, chroma, hue)`

```js
chroma.oklch(0.5, 0.2, 240)
chroma(0.8, 0.12, 60, 'oklch')
```

<Color1 :color=c13 />
<Color1 :color=c14 />

## chroma.cmyk

`chroma.cmyk(cyan, magenta, yellow, black)`

每个值介于 0 到 1 之间。

```js
chroma.cmyk(0.2, 0.8, 0, 0)
chroma(0.2, 0.8, 0, 0, 'cmyk')
```

<Color1 :color=c15 />
<Color1 :color=c15 />

## chroma.gl

`chroma.gl(red, green, blue, [alpha])`

GL 是 RGB(A) 的变体，唯一的区别是每个值的范围在 0 到 1 之间。

```js
chroma.gl(0.6, 0, 0.8)
chroma.gl(0.6, 0, 0.8, 0.5)
chroma(0.6, 0, 0.8, 'gl')
```

<Color1 :color=c16 />
<Color1 :color=c17 />
<Color1 :color=c16 />

## chroma.temperature

`chroma.temperature(K)`

从色温刻度返回颜色。

```js
chroma.temperature(2000) // candle light
chroma.temperature(3500) // sunset
chroma.temperature(6500) // daylight
```

<Color1 :color=c18 />
<Color1 :color=c19 />
<Color1 :color=c20 />

有效范围从 0 开尔文到 30000 开尔文左右。

```js
f = function (i) {
  return chroma.temperature(i * 30000)
}
```

## chroma.mix

`chroma.mix(color1, color2, ratio = 0.5, mode = 'lrgb')`

混合两种颜色。混合比是一个介于 0 到 1 之间的值。

```js
chroma.mix('red', 'blue')
chroma.mix('red', 'blue', 0.25)
chroma.mix('red', 'blue', 0.75)
```

<Color1 :color=c21 />
<Color1 :color=c22 />
<Color1 :color=c23 />

颜色混会会根据插值的色彩空间不同而产生不同的结果。

```js
chroma.mix('red', 'blue', 0.5, 'rgb')
chroma.mix('red', 'blue', 0.5, 'hsl')
chroma.mix('red', 'blue', 0.5, 'lab')
chroma.mix('red', 'blue', 0.5, 'lch')
chroma.mix('red', 'blue', 0.5, 'lrgb')
```

<Color1 :color=c24 />
<Color1 :color=c25 />
<Color1 :color=c26 />
<Color1 :color=c27 />
<Color1 :color=c28 />

## chroma.average

`chroma.average(colors, mode='lrgb', weights=[])`

类似于 [`chroma.mix`](#chroma-mix)，但接受两种以上的颜色。是 R、G、B 分量和 alpha 通道的简单平均。默认色彩空间为 lrgb。

```js
colors = ['#ddd', 'yellow', 'red', 'teal']
chroma.average(colors) // lrgb
chroma.average(colors, 'rgb')
chroma.average(colors, 'lab')
chroma.average(colors, 'lch')
```

<Color2 :colors=colors1 />
<Color1 :color=c29 />
<Color1 :color=c30 />
<Color1 :color=c31 />
<Color1 :color=c32 />

也适用于 alpha 通道。

```js
chroma.average(['red', 'rgba(0, 0, 0, 0.5)']).css()
```

<Color1 :color=c33 />

从 2.1 版本开始，你还可以提供一个 weights 数组来计算颜色的加权平均值。

```js
colors = ['#ddd', 'yellow', 'red', 'teal']
chroma.average(colors, 'lch') // unweighted
chroma.average(colors, 'lch', [1, 1, 2, 1])
chroma.average(colors, 'lch', [1.5, 0.5, 1, 2.3])
```

<Color2 :colors=colors1 />
<Color1 :color=c34 />
<Color1 :color=c35 />
<Color1 :color=c36 />

## chroma.blend

`chroma.blend(color1, color2, mode)`

使用 RGB 通道混合函数来混合两种颜色。有效的混合模式有 multiply、darken、lighten、screen、overlay、burn 和 dodge。

```js
chroma.blend('4CBBFC', 'EEEE22', 'multiply')
chroma.blend('4CBBFC', 'EEEE22', 'darken')
chroma.blend('4CBBFC', 'EEEE22', 'lighten')
```

<Color1 :color=c37 />
<Color1 :color=c38 />
<Color1 :color=c39 />

## chroma.random

通过生成随机十六进制字符串来创建随机颜色。

```js
chroma.random()
```

## chroma.contrast

`chroma.contrast(color1, color2)`

计算两种颜色之间的 WCAG 对比度。建议最低对比度 4.5:1，以确保文本在背景色下仍可读。

```js
// contrast smaller than 4.5 = too low
chroma.contrast('pink', 'hotpink') // 1.721
// contrast greater than 4.5 = high enough
chroma.contrast('pink', 'purple') // 6.124
```

## chroma.distance

`chroma.distance(color1, color2, mode='lab')`

计算给定色彩空间（默认为 Lab）中两种颜色之间的[欧几里得距离](https://en.wikipedia.org/wiki/Euclidean_distance#Three_dimensions)。

```js
chroma.distance('#fff', '#ff0', 'rgb') // 255
chroma.distance('#fff', '#f0f', 'rgb') // 255
chroma.distance('#fff', '#ff0') // 96.948
chroma.distance('#fff', '#f0f') // 122.163
```

## chroma.deltaE

`chroma.deltaE(color1, color2, Kl=1, Kc=1, Kh=1)`

计算国际照明委员会（CIE）在 2000 年开发的[色彩差异](https://en.wikipedia.org/wiki/Color_difference#CIEDE2000)。该实现基于 [Bruce Lindbloom](http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE2000.html) 公式。结果值的范围从 0（无差异）到 100（最大差异），是衡量人眼感知色差的指标。可选参数 Kl、Kc 和 Kh 可用于调整亮度、色度和色相的权重。

```js
chroma.deltaE('#ededee', '#ededee') // 0
chroma.deltaE('#ededee', '#edeeed') // 1.321
chroma.deltaE('#ececee', '#eceeec') // 2.602
chroma.deltaE('#e9e9ee', '#e9eee9') // 6.221
chroma.deltaE('#e4e4ee', '#e4eee4') // 11.598
chroma.deltaE('#e0e0ee', '#e0eee0') // 15.391
chroma.deltaE('#000000', '#ffffff') // 100
```

## chroma.brewer

`chroma.brewer` 是 [ColorBrewer](https://colorbrewer2.org/) 规范的映射，为方便起见，它包含在 chroma.js 中。

```js
chroma.brewer.OrRd
```

<Color2 :colors=colors2 />

:::details Colors of chroma.brewer

- chroma.brewer.OrRd
  <Color2 :colors=chroma.brewer.OrRd />
- chroma.brewer.PuBu
  <Color2 :colors=chroma.brewer.PuBu />
- chroma.brewer.BuPu
  <Color2 :colors=chroma.brewer.BuPu />
- chroma.brewer.Oranges
  <Color2 :colors=chroma.brewer.Oranges />
- chroma.brewer.BuGn
  <Color2 :colors=chroma.brewer.BuGn />
- chroma.brewer.YlOrBr
  <Color2 :colors=chroma.brewer.YlOrBr />
- chroma.brewer.YlGn
  <Color2 :colors=chroma.brewer.YlGn />
- chroma.brewer.Reds
  <Color2 :colors=chroma.brewer.Reds />
- chroma.brewer.RdPu
  <Color2 :colors=chroma.brewer.RdPu />
- chroma.brewer.Greens
  <Color2 :colors=chroma.brewer.Greens />
- chroma.brewer.YlGnBu
  <Color2 :colors=chroma.brewer.YlGnBu />
- chroma.brewer.Purples
  <Color2 :colors=chroma.brewer.Purples />
- chroma.brewer.GnBu
  <Color2 :colors=chroma.brewer.GnBu />
- chroma.brewer.Greys
  <Color2 :colors=chroma.brewer.Greys />
- chroma.brewer.YlOrRd
  <Color2 :colors=chroma.brewer.YlOrRd />
- chroma.brewer.PuRd
  <Color2 :colors=chroma.brewer.PuRd />
- chroma.brewer.Blues
  <Color2 :colors=chroma.brewer.Blues />
- chroma.brewer.PuBuGn
  <Color2 :colors=chroma.brewer.PuBuGn />
- chroma.brewer.Viridis
  <Color2 :colors=chroma.brewer.Viridis />
- chroma.brewer.Spectral
  <Color2 :colors=chroma.brewer.Spectral />
- chroma.brewer.RdYlGn
  <Color2 :colors=chroma.brewer.RdYlGn />
- chroma.brewer.RdBu
  <Color2 :colors=chroma.brewer.RdBu />
- chroma.brewer.PiYG
  <Color2 :colors=chroma.brewer.PiYG />
- chroma.brewer.PRGn
  <Color2 :colors=chroma.brewer.PRGn />
- chroma.brewer.RdYlBu
  <Color2 :colors=chroma.brewer.RdYlBu />
- chroma.brewer.BrBG
  <Color2 :colors=chroma.brewer.BrBG />
- chroma.brewer.RdGy
  <Color2 :colors=chroma.brewer.RdGy />
- chroma.brewer.PuOr
  <Color2 :colors=chroma.brewer.PuOr />
- chroma.brewer.Set2
  <Color2 :colors=chroma.brewer.Set2 />
- chroma.brewer.Accent
  <Color2 :colors=chroma.brewer.Accent />
- chroma.brewer.Set1
  <Color2 :colors=chroma.brewer.Set1 />
- chroma.brewer.Set3
  <Color2 :colors=chroma.brewer.Set3 />
- chroma.brewer.Dark2
  <Color2 :colors=chroma.brewer.Dark2 />
- chroma.brewer.Paired
  <Color2 :colors=chroma.brewer.Paired />
- chroma.brewer.Pastel2
  <Color2 :colors=chroma.brewer.Pastel2 />
- chroma.brewer.Pastel1
  <Color2 :colors=chroma.brewer.Pastel1 />
  :::

<script setup>
  import chroma from 'chroma-js'

  const c1 = chroma('hotpink').hex()
  const c2 = chroma('#ff3399').hex()
  const c3 = chroma({ h: 120, s: 1, l: 0.75 }).hex()
  const c4 = chroma({ l: 80, c: 25, h: 200 }).hex()
  const c5 = chroma({ c: 1, m: 0.5, y: 0, k: 0.2 }).hex()
  const c6 = chroma.lab(40, -20, 50).hex()
  const c7 = chroma.lab(50, -20, 50).hex()
  const c8 = chroma.lab(80, -20, 50).hex()
  const c9 = chroma.oklab(0.4,-0.2,0.5).hex()
  const c10 = chroma.oklab(0.5,-0.2,0.5).hex()
  const c11 = chroma.oklab(0.8,-0.2,0.5).hex()
  const c12 = chroma.lch(80, 40, 130).hex()
  const c13 = chroma.oklch(0.5, 0.2, 240).hex()
  const c14 = chroma(0.8, 0.12, 60, 'oklch').hex()
  const c15 = chroma.cmyk(0.2, 0.8, 0, 0).hex()
  const c16 = chroma.gl(0.6, 0, 0.8).hex()
  const c17 = chroma.gl(0.6, 0, 0.8, 0.5).hex()
  const c18 = chroma.temperature(2000).hex()
  const c19 = chroma.temperature(3500).hex()
  const c20 = chroma.temperature(6500).hex()
  const c21 = chroma.mix('red', 'blue').hex()
  const c22 = chroma.mix('red', 'blue', 0.25).hex()
  const c23 = chroma.mix('red', 'blue', 0.75).hex()
  const c24 = chroma.mix('red', 'blue', 0.5, 'rgb').hex()
  const c25 = chroma.mix('red', 'blue', 0.5, 'hsl').hex()
  const c26 = chroma.mix('red', 'blue', 0.5, 'lab').hex()
  const c27 = chroma.mix('red', 'blue', 0.5, 'lch').hex()
  const c28 = chroma.mix('red', 'blue', 0.5, 'lrgb').hex()
  const colors1 = ['#ddd', 'yellow', 'red', 'teal']
  const c29 = chroma.average(colors1).hex()
  const c30 = chroma.average(colors1, 'rgb').hex()
  const c31 = chroma.average(colors1, 'lab').hex()
  const c32 = chroma.average(colors1, 'lch').hex()
  const c33 = chroma.average(['red', 'rgba(0, 0, 0, 0.5)']).css()
  const c34 = chroma.average(colors1, 'lch').hex()
  const c35 = chroma.average(colors1, 'lch', [1, 1, 2, 1]).hex()
  const c36 = chroma.average(colors1, 'lch', [1.5, 0.5, 1, 2.3]).hex()
  const c37 = chroma.blend('4CBBFC', 'EEEE22', 'multiply').hex()
  const c38 = chroma.blend('4CBBFC', 'EEEE22', 'darken').hex()
  const c39 = chroma.blend('4CBBFC', 'EEEE22', 'lighten').hex()
  const colors2 = chroma.brewer.OrRd
</script>
