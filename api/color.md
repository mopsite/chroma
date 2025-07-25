<script setup>
import chroma from 'chroma-js'

const color1 = chroma('red').alpha(0.5)
const color2 = chroma('hotpink').darken()
const color3 = chroma('hotpink').darken(2)
const color4 = chroma('hotpink').darken(2.6)
const color5 = chroma('hotpink').brighten()
const color6 = chroma('hotpink').brighten(2)
const color7 = chroma('hotpink').brighten(3)
const color8 = chroma('slategray').saturate()
const color9 = chroma('slategray').saturate(2)
const color10 = chroma('slategray').saturate(3)
const color11 = chroma('hotpink').desaturate()
const color12 = chroma('hotpink').desaturate(2)
const color13 = chroma('hotpink').desaturate(3)
const color14 = chroma('skyblue').set('hsl.h', 0)
const color15 = chroma('hotpink').set('lch.c', 30)
const color16 = chroma('orangered').set('lab.l', '*0.5')
const color17 = chroma('darkseagreen').set('lch.c', '*2')
const color18 = chroma('white').luminance(0.5)
const color19 = chroma('aquamarine').luminance(0.5)
const color20 = chroma('hotpink').luminance(0.5)
const color21 = chroma('darkslateblue').luminance(0.5)
</script>

# Color

## color.alpha

`color.alpha(a)`

使用 `color.alpha` 来获取或设置颜色的不透明度。

```js
chroma('rgba(255,0,0,0.35)').alpha() // 0.35
chroma('red').alpha(0.5)
```

<Box1 :color="color1" />

## color.darken

`color.darken(value=1)`

chroma.js 加载后可以改变颜色。我们在[快速开始](../guide/start)中看到的一种方式是，你可以更改亮度。默认值为 1。

```js
chroma('hotpink').darken()
chroma('hotpink').darken(2)
chroma('hotpink').darken(2.6)
```

<Box1 :color="color2" />
<Box1 :color="color3" />
<Box1 :color="color4" />

## color.brighten

`color.brighten(value=1)`

与 `color.darken` 类似，但是方向相反。

```js
chroma('hotpink').brighten()
chroma('hotpink').brighten(2)
chroma('hotpink').brighten(3)
```

<Box1 :color="color5" />
<Box1 :color="color6" />
<Box1 :color="color7" />

## color.saturate

`color.saturate(value=1)`

通过操纵 lch 色度来更改颜色的饱和度。默认值为 1。

```js
chroma('slategray').saturate()
chroma('slategray').saturate(2)
chroma('slategray').saturate(3)
```

<Box1 :color="color8" />
<Box1 :color="color9" />
<Box1 :color="color10" />

## color.desaturate

`color.desaturate(value=1)`

与 `color.saturate` 类似，但方向相反。

```js
chroma('hotpink').desaturate()
chroma('hotpink').desaturate(2)
chroma('hotpink').desaturate(3)
```

<Box1 :color="color11" />
<Box1 :color="color12" />
<Box1 :color="color13" />

## color.set

`color.set(channel, value)`

更改单个通道，并将结果返回一个新的 chroma 对象。

```js
// change hue to  0 deg (=red)
chroma('skyblue').set('hsl.h', 0)

// set chromaticity to 30
chroma('hotpink').set('lch.c', 30)
```

<Box1 :color="color14" />
<Box1 :color="color15" />

相对变化也有效：

```js
// half Lab lightness
chroma('orangered').set('lab.l', '*0.5')

// double Lch saturation
chroma('darkseagreen').set('lch.c', '*2')
```

<Box1 :color="color16" />
<Box1 :color="color17" />

## color.get

`color.get(channel)`

返回单个通道值。

```js
chroma('orangered').get('lab.l') // 57.582
chroma('orangered').get('hsl.l') // 0.5
chroma('orangered').get('rgb.g') // 69
```

## color.luminance

`color.luminance([lum, mode='rgb'])`

如果在没有参数的情况下调用 `color.luminance`，将根据 [WCAG](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef) 定义返回相对亮度。标准化 0 为最深的黑色，1 为最浅的白色。

```js
chroma('white').luminance() // 1
chroma('aquamarine').luminance() // 0.808
chroma('hotpink').luminance() // 0.347
chroma('darkslateblue').luminance() // 0.066
chroma('black').luminance() // 0
```

chroma.js 还允许你调整颜色的亮度。源颜色将用黑色或白色进行插值，直到找到正确的亮度。

```js
// set lumincance to 50% for all colors
chroma('white').luminance(0.5)
chroma('aquamarine').luminance(0.5)
chroma('hotpink').luminance(0.5)
chroma('darkslateblue').luminance(0.5)
```

<Box1 :color="color18" />
<Box1 :color="color19" />
<Box1 :color="color20" />
<Box1 :color="color21" />

默认情况下，此插值在 RGB 中完成，但你可以通过将它们作为第二个参数传递用于在不同的色彩空间中进行插值。

```js
chroma('aquamarine').luminance(0.5) // rgb
chroma('aquamarine').luminance(0.5, 'lab')
chroma('aquamarine').luminance(0.5, 'hsl')
```

<Box1 :color="color19" />
<Box1 :color="color19" />
<Box1 :color="color19" />

## color.hex

`color.hex(mode='auto|rgb|rgba')`

chroma.js 允许你以各种色彩空间和格式输出颜色。大多数情况下，你需要将颜色输出为十六进制字符串。

```js
chroma('orange').hex() // #ffa500
```

请注意，从 1.4.0 版本开始，默认模式为 `auto`，这意味着十六进制字符串将包含小于 1 的 alpha 通道。如果你不希望包含 alpha 通道，则必须将模式显示设置为 `rgb`：

```js
chroma('orange').alpha(0.5).hex() // #ffa50080
chroma('orange').alpha(0.5).hex('rgb') // ffa500
```

## color.name

返回颜色名称。如果该颜色没有名称，则返回十六进制 RGB 字符串。

```js
chroma('#ffa500').name() // orange
chroma('#ffa505').name() // #ffa505
```

## color.css

返回可用作 CSS 颜色定义的 RGB 或 HSL 字符串表示形式。

```js
chroma('teal').css() // rgb(0, 128, 128)
chroma('teal').alpha(0.5).css() // rgba(0, 128, 128, 0.5)
chroma('teal').css('hsl') // hsl(180, 100%, 25.1%)
```

## color.rgb

`color.rgb(round=true)`

返回一个包含 red、green 和 blue 分量的数组，每个都是 0 到 255 范围内的数组。Chroma 在内部将 RGB 通道存储为浮点数，但在返回之前对数字进行四舍五入。你可以通过 false 来禁用四舍五入。

```js
chroma('orange').rgb() // [255,165,0]
chroma('orange').darken().rgb() // [198,118,0]
chroma('orange').darken().rgb(false) // [198.05,118.11,0]
```

## color.rgba

`color.rgba(round=true)`

与 `color.rgb` 类似，但是将 alpha 通道添加到返回的数组中。

```js
chroma('orange').rgba() // [255, 165, 0, 1]
chroma('hsla(20, 100%, 40%, 0.5)').rgba() // [204, 68, 0, 0.5]
```

## color.gl

类似 `color.rgb`，但返回的通道范围是 0 ~ 1，而不是 0 ~ 255。

```js
chroma('33cc00').gl() // [0.2, 0.8, 0.1]
```

## color.hsl

返回一个包含 hue、saturation 和 lightness 的数组。对于无色相的颜色（黑、白和灰），色相分量将为 NaN。

```js
chroma('orange').hsl() // [38.82, 1, 0.5, 1]
chroma('white').hsl() // [NaN, 0, 1, 1]
```

## color.hsv

与 `color.hsl` 类似，返回一个包含 hue、saturation 和 value 的数组。

```js
chroma('orange').hsv() // [38.82, 1, 1]
chroma('white').hsv() // [NaN, 0, 1]
```

## color.hsi

返回一个包含 hue、saturation 和 intensity（强度）的数组。

```js
chroma('orange').hsi() // [39.64, 1, 0.55]
chroma('white').hsi() // [NaN, 0, 1]
```

## color.lab

返回一个包含 L、a 和 b 的数组。

```js
chroma('orange').lab() // [74.94, 23.93, 78.95]
```

## color.oklab

返回一个包含 L、a 和 b 的数组。

```js
chroma('orange').oklab() // [0.79, 0.06, 0.16]
```

## color.lch

返回一个包含 lightness、chroma 和 hue 的数组。

```js
chroma('sykblue').lch() // [79.21, 25.94, 235.11]
```

## color.hcl

`color.lch` 的别名，但分量顺序相反。

```js
chroma('skyblue').hcl() // [235.11, 25.94, 79.21]
```

## color.oklch

返回一个包含 lightness、chroma 和 hue 的数组。

```js
chroma('sykblue').oklch() // [0.81, 0.08, 225.75]
```

## color.num

返回十六进制 RGB 颜色的数字表示形式。

```js
chroma('#000000').num() // 0
chroma('#0000ff').num() // 255
chroma('#00ff00').num() // 65280
chroma('#ff0000').num() // 16711680
```

## color.temperature

返回给定颜色的色温值。

```js
chroma('#ff3300').temperature() // 1000
chroma('#ff8a13').temperature() // 2000
chroma('#ffe3cd').temperature() // 4999
chroma('#cbdbff').temperature() // 10115
chroma('#b3ccff').temperature() // 15169
```

## color.clipped

将颜色从 CIELab 色彩空间转换为 RGB 时，颜色通道会被裁剪为 0 ~ 255 的范围。该范围之外的颜色可能在自然界中存在，但无法在 RGB 显示器上显示（例如紫外线）。你可以使用 `color.clipped` 来测试颜色是否被裁剪。

```js
;[(c = chroma.hcl(50, 40, 20)), c.clipped()][ // [#581d00, true]
  ((c = chroma.hcl(50, 40, 40)), c.clipped())
][ // [#904c2d, false]
  ((c = chroma.hcl(50, 40, 60)), c.clipped())
][ // [#c97e5c, false]
  ((c = chroma.hcl(50, 40, 80)), c.clipped())
][ // [#ffb38f, true]
  ((c = chroma.hcl(50, 40, 100)), c.clipped())
] // [#ffebc5, true]
```

作为额外功能，你可以使用 `color._rgb._unclipped` 访问未裁剪的 RGB 分量。

```js
chroma.hcl(50, 40, 100).rgb() // [255, 235, 197]
chroma.hcl(50, 40, 100)._rgb._unclipped // [322.65, 235.24, 196.7, 1]
```
