# Color Scales

## chroma.scale

`chroma.scale(colors=['white','black'])`

`chroma.scale` 是将数值映射到调色板的函数，使用它可以创建色标。默认色标的范围从 0 到 1，颜色从白到黑。

```js
f = chroma.scale()
f(0.25)
f(0.5)
f(0.75)
```

<Color3 />
<Color1 :color=f1(0.25).hex() />
<Color1 :color=f1(0.5).hex() />
<Color1 :color=f1(0.75).hex() />

你可以将一个颜色数组传递给 `chroma.scale`，任何可以被 [`chroma()`](./chroma#chroma) 读取的颜色都能使用。如果你传递两种以上的颜色，它们将沿着渐变均匀分布。

```js
chroma.scale(['yellow', '008ae5'])
chroma.scale(['yellow', 'red', 'black'])
```

<Color3 :colors=colors2 />
<Color3 :colors=colors3 />

## scale.domain

`scale.domain(domain)`

你可以更改输入域，以匹配你的特定用例。

```js
// default domain is [0,1]
chroma.scale(['yellow', '008ae5'])
// set domain to [0,100]
chroma.scale(['yellow', '008ae5']).domain([0, 100])
```

<Color3 :colors=colors2 />
<Color3 :colors=colors2 :nums=[0,50,100] />

## scale.mode

与 [chroma.mix](./chroma#chroma-mix) 一样，颜色插值的结果将取决于插值通道的颜色模式。默认模式为 RGB。

```js
chroma.scale(['yellow', '008ae5'])
```

<Color3 :colors=colors2 />

上面的用法有时很好，但有时，RGB 双色渐变会经过灰色，Lab 插值会产生更好的结果：

```js
chroma.scale(['yellow', 'navy'])
chroma.scale(['yellow', 'navy']).mode('lab')
```

<Color3 :colors=colors4 />
<Color3 :colors=colors5 />

另外请注意，RGB 插值会使中心周围变得很暗，使用线性 RGB 插值可以获得更好的结果：

```js
chroma.scale(['#f00', '#0f0'])
chroma.scale(['#f00', '#0f0']).mode('lrgb')
```

<Color3 :colors=colors6 />
<Color3 :colors=colors7 />

其他有用的插值模式可能是 HSL 或 Lch，尽管这两者都倾向于产生过于饱和或发光的渐变。

```js
chroma.scale(['yellow', 'navy']).mode('lab')
chroma.scale(['yellow', 'navy']).mode('hsl')
chroma.scale(['yellow', 'navy']).mode('lch')
```

<Color3 :colors=colors5 />
<Color3 :colors=colors8 />
<Color3 :colors=colors9 />

## scale.gamma

伽马校正可用于将色阶的中心“偏移”到开头（gamma < 1）或结尾（gamma > 1），通常用于“均匀”亮度梯度，默认值为 1。

```js
chroma.scale('YlGn').gamma(0.5)
chroma.scale('YlGn').gamma(1)
chroma.scale('YlGn').gamma(2)
```

<Color3 :colors=colors10 />
<Color3 :colors=colors11 />
<Color3 :colors=colors12 />

## scale.correctLightness

`scale.correctLightness` 可以确保亮度范围在色标上均匀分布。在使用多色相色标时特别有用，在这种情况下，简单的伽马校正对你没有很大的帮助。

```js
chroma.scale(['black', 'red', 'yellow', 'white'])
chroma.scale(['black', 'red', 'yellow', 'white']).correctLightness()
```

<Color3 :colors=colors13 />
<Color3 :colors=colors14 />

## scale.cache

`scale.cache(true|false)`

默认情况下，`scale.cache` 实例将缓存每个计算值到颜色的键值对，你可以通过设置关闭缓存。

```js
chroma.scale(['yellow', '008ae5']).cache(false)
```

## scale.padding

```js
scale.padding(pad)
```

通过在渐变的两侧切割一小部分来缩小颜色范围。如果传递单个数字，则两端将应用相同的 pad 值。

```js
chroma.scale('RdYlBu')
chroma.scale('RdYlBu').padding(0.15)
chroma.scale('RdYlBu').padding(0.3)
chroma.scale('RdYlBu').padding(-0.15)
```

<Color3 :colors=colors15 />
<Color3 :colors=colors16 />
<Color3 :colors=colors17 />
<Color3 :colors=colors18 />

或者，你可以通过传递两个数字的数组来单独指定每边的 pad。

```js
chroma.scale('OrRd')
chroma.scale('OrRd').padding([0.2, 0])
```

<Color3 :colors=colors19 />
<Color3 :colors=colors20 />

## scale.colors

`scale.colors(num, format='hex')`

你可以调用 `scale.colors(n)`，从色标中快速获取 n 等距离的颜色。如果不带参数，则返回用于创建比例的原始颜色数组。

```js
chroma.scale('OrRd').colors(5)
chroma.scale(['white', 'black']).colors(12)
```

<Color2 :colors=colors21 />
<Color2 :colors=colors22 />

若想返回 chroma 实例，只需将 null 传递给 format 参数。

## scale.classes

`scale.classes(numOrArray)`

如果你希望 scale 函数返回一组不同的颜色而不是连续渐变，可以使用 `scale.classes`。如果你传递一个数字，色阶将按等距分解。

```js
// continuous
chroma.scale('OrRd')
// class breaks
chroma.scale('OrRd').classes(5)
chroma.scale('OrRd').classes(8)
```

<Color3 :colors=colors19 />
<Color4 :colors=chroma.brewer.OrRd :num=5 />
<Color4 :colors=chroma.brewer.OrRd :num=8 />

你还可以传递多个数字的数组来自定义分隔距离：

```js
chroma.scale('OrRd').classes([0, 0.3, 0.55, 0.85, 1])
```

## scale.nodata

如果你将非数字（如 null 或 undefined）传递给 `chroma.scale` 时，将返回 `#cccccc` 或 `no data`。你可以通过 `scale.nodata` 来修改 `no data` 的颜色：

```js
chroma.scale('OrRd')(null)
chroma.scale('OrRd')(undefined)
chroma.scale('OrRd').nodata('#eee')(null)
```

<Color1 :color=c1 />
<Color1 :color=c2 />
<Color1 :color=c3 />

## scale.brewer

chroma.js 包含来自 [ColorBrewer2.org](https://colorbrewer2.org/) 的定义。

```js
chroma.scale('YlGnBu')
chroma.scale('Spectral')
```

<Color3 :colors=colors23 />
<Color3 :colors=colors24 />

要翻转颜色，你只需要简单的翻转范围：

```js
chroma.scale('Spectral').domain([1, 0])
```

<Color3 :colors=colors25 />

你还可以通过 [`chroma.brewer`](./chroma#chroma-brewer) 直接访问颜色。

## chroma.beizer

`chroma.bezier(colors)`

`chroma.beizer` 返回一个函数，该函数在 Lab 色彩空间中进行[贝塞尔](https://www.vis4.net/blog/2013/09/mastering-multi-hued-color-scales/)插值。函数的输入范围从 0 到 1。

```js
// linear interpolation
chroma.scale(['yellow', 'red', 'black'])
// bezier interpolation
chroma.bezier(['yellow', 'red', 'black'])
```

<Color3 :colors=colors26 />
<Color3 :colors=colors27 />

你可以将贝塞尔插值器转换为 `chroma.scale` 实例。

```js
chroma.bezier(['yellow', 'red', 'black']).scale().colors(5)
```

<Color2 :colors=colors28 />

<script setup>
import chroma from 'chroma-js'

const colors1 = ['#fff','#000']
const f1 = chroma.scale(colors1)

const colors2 = ['yellow', '#008ae5']
const colors3 = ['yellow', 'red', 'black']

const colors4 = ['yellow', 'navy']
const f2 = chroma.scale(colors4).mode('lab')
const colors5 = [f2(0),f2(0.5),f2(1)]

const colors6 = ['#f00', '#0f0']
const f3 = chroma.scale(colors6).mode('lrgb')
const colors7 = [f3(0),f3(0.5),f3(1)]

const f4 = chroma.scale(colors4).mode('hsl')
const f5 = chroma.scale(colors4).mode('lch')
const colors8 = [f4(0),f4(0.5),f4(1)]
const colors9 = [f5(0),f5(0.5),f5(1)]

const f6 = chroma.scale('YlGn').gamma(0.5)
const f7 = chroma.scale('YlGn').gamma(1)
const f8 = chroma.scale('YlGn').gamma(2)
const colors10 = [f6(0),f6(0.5),f6(1)]
const colors11 = [f7(0),f7(0.5),f7(1)]
const colors12 = [f8(0),f8(0.5),f8(1)]

const f9 = chroma.scale(['black', 'red', 'yellow', 'white'])
const f10 = chroma.scale(['black', 'red', 'yellow', 'white']).correctLightness()
const colors13 = [f9(0),f9(0.3),f9(0.6), f9(0.9)]
const colors14 = [f10(0),f10(0.3),f10(0.6), f10(0.9)]

const f11 = chroma.scale('RdYlBu')
const f12 = chroma.scale('RdYlBu').padding(0.15)
const f13 = chroma.scale('RdYlBu').padding(0.3)
const f14 = chroma.scale('RdYlBu').padding(-0.15)
const colors15 = [f11(0),f11(0.5),f11(1)]
const colors16 = [f12(0),f12(0.5),f12(1)]
const colors17 = [f13(0),f13(0.5),f13(1)]
const colors18 = [f14(0),f14(0.5),f14(1)]

const f15 = chroma.scale('OrRd');
const f16 = chroma.scale('OrRd').padding([0.2, 0])
const colors19 = [f15(0),f15(0.5),f15(1)]
const colors20 = [f16(0),f16(0.5),f16(1)]

const colors21 = chroma.scale('OrRd').colors(5)
const colors22 = chroma.scale(['white', 'black']).colors(12)

const c1 = chroma.scale('OrRd')(null).hex()
const c2 = chroma.scale('OrRd')(undefined).hex()
const c3 = chroma.scale('OrRd').nodata('#eee')(null).hex()

const f17 = chroma.scale('YlGnBu')
const f18 = chroma.scale('Spectral')
const f19 = chroma.scale('Spectral').domain([1,0])
const colors23 = [f17(0),f17(0.5),f17(1)]
const colors24 = [f18(0),f18(0.5),f18(1)]
const colors25 = [f19(0),f19(0.5),f19(1)]

const f20 = chroma.scale(['yellow', 'red', 'black'])
const f21 = chroma.bezier(['yellow', 'red', 'black'])
const colors26 = [f20(0),f20(0.5),f20(1)]
const colors27 = [f21(0),f21(0.5),f21(1)]

const colors28 = chroma.bezier(['yellow', 'red', 'black']).scale().colors(5)
</script>
