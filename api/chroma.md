<script setup>
import chroma from 'chroma-js'

const color1 = chroma('hotpink')
const color2 = chroma('f39')
const color3 = chroma(338, 1, 0.6, 'hsl')
const color4 = chroma({ h: 120, s: 1, l: 0.75 })
const color5 = chroma({ l: 80, c: 25, h: 200 })
const color6 = chroma({ c: 1, m: 0.5, y: 0, k: 0.2 })
const color7 = chroma.lab(40, -20, 50)
const color8 = chroma.lab(50, -20, 50)
const color9 = chroma.lab(80, -20, 50)
const color10 = chroma.oklab(0.4, -0.2, 0.5)
const color11 = chroma.oklab(0.5, -0.2, 0.5)
const color12 = chroma.oklab(0.8, -0.2, 0.5)
const color13 = chroma.lch(80, 40, 130)
const color14 = chroma.oklch(0.5, 0.2, 240)
const color15 = chroma(0.8, 0.12, 60, 'oklch')
const color16 = chroma.cmyk(0.2, 0.8, 0, 0)
const color17 = chroma.gl(0.6, 0, 0.8)
const color18 = chroma.gl(0.6, 0, 0.8, 0.5)
const color19 = chroma.temperature(2000)
const color20 = chroma.temperature(3500)
const color21 = chroma.temperature(6500)
const color22 = chroma.mix('red', 'blue')
const color23 = chroma.mix('red', 'blue', 0.25)
const color24 = chroma.mix('red', 'blue', 0.75)
const color25 = chroma.mix('red', 'blue', 0.5, 'rgb')
const color26 = chroma.mix('red', 'blue', 0.5, 'hsl')
const color27 = chroma.mix('red', 'blue', 0.5, 'lab')
const color28 = chroma.mix('red', 'blue', 0.5, 'lch')
const colors = ['#ddd', 'yellow', 'red', 'teal']
const color29 = chroma.average(colors) // lrgb
const color30 = chroma.average(colors, 'rgb')
const color31 = chroma.average(colors, 'lab')
const color32 = chroma.average(colors, 'lch')
const color33 = chroma.average(['red', 'rgba(0, 0, 0, 0.5)']).css()
const color34 = chroma.average(colors, 'lch')
const color35 = chroma.average(colors, 'lch', [1, 1, 2, 1])
const color36 = chroma.average(colors, 'lch', [1.5, 0.5, 1, 2.3])
const color37 = chroma.blend('4CBBFC', 'EEEE22', 'multiply')
const color38 = chroma.blend('4CBBFC', 'EEEE22', 'darken')
const color39 = chroma.blend('4CBBFC', 'EEEE22', 'lighten')
const color40 = chroma.random()
const color41 = chroma.random()
const color42 = chroma.random()
const colorBrewer = chroma.brewer
</script>

# Chroma

## chroma

`chroma(color)`

要使用 chroma-js，第一步是将你的颜色放入构造函数 `chroma()` 中。该函数尝试为你猜测输入颜色的格式。例如，它将识别 W3CX11 规范中的任何命名颜色：

```js
chroma('hotpink')
```

<Box1 :color=color1 />

:::warning 注意
`chroma()` 构造函数将返回一个 chroma 颜色对象。当需要自动类型转换时，该对象会默认返回对应颜色的十六进制字符串（即该对象的 `valueOf` 方法的默认返回值）。
:::

如果没有匹配的命名颜色，chroma.js 则会检查十六进制字符串。它忽略大小写，`#` 符号是可选的，并能识别较短的三个字母格式。因此，诸如 `#ff3399`、`ff3399`、`f39` 等都是有效的十六进制表示形式。

```js
chroma('#ff3399')
chroma('f39')
```

<Box1 :color=color2 />

除了十六进制字符串之外，十六进制数（事实上，任何介于 0 到 16777215 之间的数）都将被识别。

```js
chroma(0xff3399)
```

<Box1 :color=color2 />

你可以单独传递 RGB 值。每个参数必须在 0 到 255 之间。你可以将数字作为单独的参数或作为数组传递。

```js
chroma(0xff, 0x33, 0x99)
chroma(255, 51, 153)
chroma([255, 51, 153])
```

<Box1 :color=color2 />
<Box1 :color=color2 />
<Box1 :color=color2 />

你也可以通过将色彩空间的名称作为最后一个参数，构造来自不同色彩空间的颜色。在这里，我们通过传递色调度数（0 ~ 360）、饱和度和亮度的百分比来定义 HSL 中的颜色：

```js
chroma(338, 1, 0.6, 'hsl')
```

<Box1 :color=color3 />

你还可以通过传递一个普通的 js 对象来构造颜色，该对象的属性对应于 chroma.js 支持的色彩空间：

```js
chroma({ h: 120, s: 1, l: 0.75 })
chroma({ l: 80, c: 25, h: 200 })
chroma({ c: 1, m: 0.5, y: 0, k: 0.2 })
```

<Box1 :color=color4 />
<Box1 :color=color5 />
<Box1 :color=color6 />

## chroma.valid

你可以使用 `chroma.valid` 来判断是否可以通过 chroma.js 正确解析某个颜色参数。该函数接受一个字符串作为参数，并返回布尔值。

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

<Box1 :color=color2 />

## chroma.lab

`chroma.lab(lightness, a, b)`

CIELAB 色彩空间。

```js
chroma.lab(40, -20, 50)
chroma.lab(50, -20, 50)
chroma.lab(80, -20, 50)
```

<Box1 :color=color7 />
<Box1 :color=color8 />
<Box1 :color=color9 />

## chroma.oklab

`chroma.oklab(lightness, a, b)`

[OKLAB](https://bottosson.github.io/posts/oklab/) 色彩空间。

```js
chroma.oklab(0.4, -0.2, 0.5)
chroma.oklab(0.5, -0.2, 0.5)
chroma.oklab(0.8, -0.2, 0.5)
```

<Box1 :color=color10 />
<Box1 :color=color11 />
<Box1 :color=color12 />

## chroma.lch

`chroma.lch(lightness, chroma, hue)`

l 和 c 的范围取决于色调，大致范围在 0 ~ 100 和 0 ~ 150 之间，h 的范围在 0 ~ 360。

```js
chroma.lch(80, 40, 130)
chroma(80, 40, 130, 'lch')
```

<Box1 :color=color13 />
<Box1 :color=color13 />

## chroma.hcl

`chroma.lch(hue, lightness, chroma)`

你可以使用 hcl 代替 lch。亮度和色相通道被切换为与 HSL 更一致。

```js
chroma.hcl(130, 40, 80)
chroma(130, 40, 80, 'hcl')
```

<Box1 :color=color13 />
<Box1 :color=color13 />

## chroma.oklch

`chroma.oklch(lightness, chroma, hue)`

```js
chroma.oklch(0.5, 0.2, 240)
chroma(0.8, 0.12, 60, 'oklch')
```

<Box1 :color=color14 />
<Box1 :color=color15 />

## chroma.cmyk

`chroma.cmyk(cyan, magenta, yellow, black)`

每个值介于 0 ~ 1 之间。

```js
chroma.cmyk(0.2, 0.8, 0, 0)
chroma(0.2, 0.8, 0, 0, 'cmyk')
```

<Box1 :color=color16 />
<Box1 :color=color16 />

## chroma.gl

`chroma.gl(red, green, blue, [alpha])`

GL 是 RGB(A) 的变体，唯一的区别是每个值的范围在 0 ~ 1 之间。

```js
chroma.gl(0.6, 0, 0.8)
chroma.gl(0.6, 0, 0.8, 0.5)
chroma(0.6, 0, 0.8, 'gl')
```

<Box1 :color=color17 />
<Box1 :color=color18 />
<Box1 :color=color17 />

## chroma.temperature

`chroma.temperature(K)`

从色温可读返回颜色。K 的有效范围在 0 ~ 30000 开尔文左右。

```js
chroma.temperature(2000) // candle light
chroma.temperature(3500) // sunset
chroma.temperature(6500) // daylight
```

<Box1 :color=color19 />
<Box1 :color=color20 />
<Box1 :color=color21 />

## chroma.mix

`chroma.mix(color1, color2, ratio = 0.5, mode = 'lrgb')`

混合两种颜色。混合比是一个介于 0 ~ 1 之间的值，默认为 0.5。

```js
chroma.mix('red', 'blue')
chroma.mix('red', 'blue', 0.25)
chroma.mix('red', 'blue', 0.75)
```

<Box1 :color=color22 />
<Box1 :color=color23 />
<Box1 :color=color24 />

颜色混合会根据色彩空间不同而产生不同的结果，默认的色彩空间为 LRGB。

```js
chroma.mix('red', 'blue', 0.5, 'rgb')
chroma.mix('red', 'blue', 0.5, 'hsl')
chroma.mix('red', 'blue', 0.5, 'lab')
chroma.mix('red', 'blue', 0.5, 'lch')
chroma.mix('red', 'blue', 0.5, 'lrgb')
```

<Box1 :color=color25 />
<Box1 :color=color26 />
<Box1 :color=color27 />
<Box1 :color=color28 />
<Box1 :color=color22 />

## chroma.average

`chroma.average(colors, mode='lrgb', weights=[])`

类似于 `chroma.mix`，但接受两种以上的颜色，是 R、G、B 分量和 alpha 通道的简单平均。默认色彩空间为 LRGB。

```js
colors = ['#ddd', 'yellow', 'red', 'teal']
chroma.average(colors) // lrgb
chroma.average(colors, 'rgb')
chroma.average(colors, 'lab')
chroma.average(colors, 'lch')
```

<Box2 :colors="colors" />
<Box1 :color=color29 />
<Box1 :color=color30 />
<Box1 :color=color31 />
<Box1 :color=color32 />

也适用于 alpha 通道。

```js
chroma.average(['red', 'rgba(0, 0, 0, 0.5)']).css()
```

<Box1 :color=color33 />

从 2.1 版本开始，你还可以提供一个 weights 数组来计算颜色的加权平均值。

```js
colors = ['#ddd', 'yellow', 'red', 'teal']
chroma.average(colors, 'lch') // unweighted
chroma.average(colors, 'lch', [1, 1, 2, 1])
chroma.average(colors, 'lch', [1.5, 0.5, 1, 2.3])
```

<Box2 :colors="colors" />
<Box1 :color=color34 />
<Box1 :color=color35 />
<Box1 :color=color36 />

## chroma.blend

`chroma.blend(color1, color2, mode)`

使用 RGB 通道混合函数来混合两种颜色。有效的混合模式有 `multiply`、`darken`、`lighten`、`screen`、`overlay`、`burn` 和 `dodge`。

```js
chroma.blend('4CBBFC', 'EEEE22', 'multiply')
chroma.blend('4CBBFC', 'EEEE22', 'darken')
chroma.blend('4CBBFC', 'EEEE22', 'lighten')
```

<Box1 :color=color37 />
<Box1 :color=color38 />
<Box1 :color=color39 />

## chroma.random

通过生成随机十六进制字符串来创建随机颜色。

```js
chroma.random()
chroma.random()
chroma.random()
```

<Box1 :color=color40 />
<Box1 :color=color41 />
<Box1 :color=color42 />

## chroma.contrast

`chroma.contrast(color1, color2)`

计算两种颜色之间的 WCAG 对比度。建议最低对比度为 4.5:1，以确保文本在背景色下仍可读。

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

计算国际照明委员会（CIE）在 2000 年开发的[色彩差异](https://en.wikipedia.org/wiki/Color_difference#CIEDE2000)。该实现基于 [Bruce Lindbloom](www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE2000.html) 公式。结果值的范围从 0（无差异）到 100（最大差异），是衡量人眼感知色差的指标。可选参数 Kl、Kc 和 Kh 可用于调整亮度、色度和色相的权重。

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

`chroma.brewer` 是 [ColorBrewer](https://colorbrewer2.org) 规范的映射，为方便起见，它以对象格式包含在 chroma.js 中，该对象的每个属性都返回一个对应颜色数组。。

```js
chroma.brewer.OrRd
// => ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000']
```

<Box2 :colors="chroma.brewer.OrRd" />

:::details Colors of chroma.brewer

- chroma.brewer.OrRd
  <Box2 :colors="chroma.brewer.OrRd" />

- chroma.brewer.PuBu
  <Box2 :colors="chroma.brewer.PuBu" />

- chroma.brewer.BuPu
  <Box2 :colors="chroma.brewer.BuPu" />

- chroma.brewer.Oranges
  <Box2 :colors="chroma.brewer.Oranges" />

- chroma.brewer.BuGn
  <Box2 :colors="chroma.brewer.BuGn" />

- chroma.brewer.YlOrBr
  <Box2 :colors="chroma.brewer.YlOrBr" />

- chroma.brewer.YlGn
  <Box2 :colors="chroma.brewer.YlGn" />

- chroma.brewer.Reds
  <Box2 :colors="chroma.brewer.Reds" />

- chroma.brewer.RdPu
  <Box2 :colors="chroma.brewer.RdPu" />

- chroma.brewer.Greens
  <Box2 :colors="chroma.brewer.Greens" />

- chroma.brewer.YlGnBu
  <Box2 :colors="chroma.brewer.YlGnBu" />

- chroma.brewer.Purples
  <Box2 :colors="chroma.brewer.Purples" />

- chroma.brewer.GnBu
  <Box2 :colors="chroma.brewer.GnBu" />

- chroma.brewer.Greys
  <Box2 :colors="chroma.brewer.Greys" />

- chroma.brewer.YlOrRd
  <Box2 :colors="chroma.brewer.YlOrRd" />

- chroma.brewer.PuRd
  <Box2 :colors="chroma.brewer.PuRd" />

- chroma.brewer.Blues
  <Box2 :colors="chroma.brewer.Blues" />

- chroma.brewer.PuBuGn
  <Box2 :colors="chroma.brewer.PuBuGn" />

- chroma.brewer.Viridis
  <Box2 :colors="chroma.brewer.Viridis" />

- chroma.brewer.Spectral
  <Box2 :colors="chroma.brewer.Spectral" />

- chroma.brewer.RdYlGn
  <Box2 :colors="chroma.brewer.RdYlGn" />

- chroma.brewer.RdBu
  <Box2 :colors="chroma.brewer.RdBu" />

- chroma.brewer.PiYG
  <Box2 :colors="chroma.brewer.PiYG" />

- chroma.brewer.PRGn
  <Box2 :colors="chroma.brewer.PRGn" />

- chroma.brewer.RdYlBu
  <Box2 :colors="chroma.brewer.RdYlBu" />

- chroma.brewer.BrBG
  <Box2 :colors="chroma.brewer.BrBG" />

- chroma.brewer.RdGy
  <Box2 :colors="chroma.brewer.RdGy" />

- chroma.brewer.PuOr
  <Box2 :colors="chroma.brewer.PuOr" />

- chroma.brewer.Set2
  <Box2 :colors="chroma.brewer.Set2" />

- chroma.brewer.Accent
  <Box2 :colors="chroma.brewer.Accent" />

- chroma.brewer.Set1
  <Box2 :colors="chroma.brewer.Set1" />

- chroma.brewer.Set3
  <Box2 :colors="chroma.brewer.Set3" />

- chroma.brewer.Dark2
  <Box2 :colors="chroma.brewer.Dark2" />

- chroma.brewer.Paired
  <Box2 :colors="chroma.brewer.Paired" />

- chroma.brewer.Pastel2
  <Box2 :colors="chroma.brewer.Pastel2" />

- chroma.brewer.Pastel1
  <Box2 :colors="chroma.brewer.Pastel1" />
  :::
