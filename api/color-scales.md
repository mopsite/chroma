<script setup>
import chroma from 'chroma-js'
</script>

# Color Scales

## chroma.scale

`chroma.scale(colors=['white','black'])`

`chroma.scale` 是将数值映射到调色板的函数，使用它可以创建色阶。默认色阶的范围从 0 到 1，颜色从白到黑。

```js
f = chroma.scale()
f(0.25)
f(0.5)
f(0.75)
```

<Box3 />
<Box1 color="#bfbfbf" />
<Box1 color="#808080" />
<Box1 color="#404040" />

你可以将一个颜色数组传递给 `chroma.scale`，任何可以被 `chroma()` 读取的颜色都能使用。如果你传递两种以上的颜色，它们将沿着渐变均匀分布。

```js
chroma.scale(['yellow', '008ae5'])
chroma.scale(['yellow', 'red', 'black'])
```

<Box3 :colors="['yellow', '008ae5']" />
<Box3 :colors="['yellow', 'red', 'black']" />

## scale.domain

`scale.domain(domain)`

你可以更改输入域，以匹配你的特定用例。

```js
// default domain is [0,1]
chroma.scale(['yellow', '008ae5'])

// set domain to [0,100]
chroma.scale(['yellow', '008ae5']).domain([0, 100])
```

<Box3 :colors="['yellow', '008ae5']" />
<Box3 :colors="['yellow', '008ae5']"
      :domain="[0, 100]"
      :nums="[0, 50, 100]"
      :text="[0, 50, 100]"
/>

## scale.mode

颜色插值的结果将取决于插值通道的颜色模式。默认模式为 RGB。

```js
chroma.scale(['yellow', '008ae5'])
```

<Box3 :colors="['yellow', '008ae5']" />

上面的用法有时很好，但有时，RGB 双色渐变会经过灰色，Lab 插值会产生更好的结果：

```js
chroma.scale(['yellow', 'navy'])
chroma.scale(['yellow', 'navy']).mode('lab')
```

<Box3 :colors="['yellow', 'navy']" />
<Box3 :colors="['yellow', 'navy']" />

另外请注意，RGB 插值会使中心周围变得很暗，使用线性 RGB 插值可以获得更好的结果：

```js
chroma.scale(['#f00', '#0f0'])
chroma.scale(['#f00', '#0f0']).mode('lrgb')
```

<Box3 :colors="['#f00', '#0f0']" />
<Box3 :colors="['#f00', '#0f0']" mode="lrgb" />

其他用用的插值模式可能是 HSL 或 Lch，这两者都倾向于产生过于饱和或发光的渐变。

```js
chroma.scale(['yellow', 'navy']).mode('lab')
chroma.scale(['yellow', 'navy']).mode('hsl')
chroma.scale(['yellow', 'navy']).mode('lch')
```

<Box3 :colors="['yellow', 'navy']" mode="lab" />
<Box3 :colors="['yellow', 'navy']" mode="hsl" />
<Box3 :colors="['yellow', 'navy']" mode="lch" />

## scale.gamma

伽马校正可用于将色阶的中心“偏移”到开头（gamma < 1）或结尾（gamma > 1），通常用于“均匀”亮度梯度，默认值为 1。

```js
chroma.scale('YlGn').gamma(0.5)
chroma.scale('YlGn').gamma(1)
chroma.scale('YlGn').gamma(2)
```

<Box3 colors="YlGn" :gamma="0.5" />
<Box3 colors="YlGn" />
<Box3 colors="YlGn" :gamma="2" />

## scale.correctLightness

`scale.correctLightness` 可以确保亮度范围在色阶上均匀分布。在使用多色相色阶时特别有用，在这种情况下，简单的伽马校正对你没有很大的帮助。

```js
chroma.scale(['black', 'red', 'yellow', 'white'])
chroma.scale(['black', 'red', 'yellow', 'white']).correctLightness()
```

<Box3 :colors="['black', 'red', 'yellow', 'white']"
      :nums="[0, 0.3, 0.6, 1]"
/>
<Box3 :colors="['black', 'red', 'yellow', 'white']"
      :nums="[0, 0.3, 0.6, 0.9]"
      correctLightness
/>

## scale.cache

`scale.cache(true|false)`

默认情况下，`scale.cache` 实例将缓存每个计算值到颜色的键值对，你可以通过设置关闭缓存。

```js
chroma.scale(['yellow', '008ae5']).cache(false)
```

## scale.padding

`scale.padding(pad)`

通过在渐变的两侧切割一小部分来缩小颜色范围。如果传递单个数字，则两端将应用相同的 `pad` 值。

```js
chroma.scale('RdYlBu')
chroma.scale('RdYlBu').padding(0.15)
chroma.scale('RdYlBu').padding(0.3)
chroma.scale('RdYlBu').padding(-0.15)
```

<Box3 colors="RdYlBu" />
<Box3 colors="RdYlBu" :padding="0.15" />
<Box3 colors="RdYlBu" :padding="0.3" />
<Box3 colors="RdYlBu" :padding="-0.15" />

或者，你可以通过传递两个数字的数组来单独指定每边的 `pad`。

```js
chroma.scale('OrRd')
chroma.scale('OrRd').padding([0.2, 0])
```

<Box3 colors="OrRd" />
<Box3 colors="OrRd" :padding="[0.2, 0]" />

## scale.colors

`scale.colors(num, format='hex')`

你可以调用 `scale.colors(1)`，从色阶中快速获取 n 等距离的颜色。如果不带参数，则返回用于创建比例的原始颜色数组。

```js
chroma.scale('OrRd').colors(5)
chroma.scale(['white', 'black']).colors(12)
```

<Box2 :colors="chroma.scale('OrRd').colors(5)" />
<Box2 :colors="chroma.scale(['white', 'black']).colors(12)" />

若只想返回 chroma 实例，只需将 null 传递给 `format` 参数。

## scale.classes

`scale.classes(numOrArray)`

```js
// continuous
chroma.scale('OrRd')

// class breaks
chroma.scale('OrRd').classes(5)
chroma.scale('OrRd').classes(8)
```

<Box3 colors="OrRd" />
<Box4 colors="OrRd" :classes="5" />
<Box4 colors="OrRd" :classes="8" />

你还可以传递多个数字的数组来自定义分配距离：

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

<Box1 color="#cccccc" />
<Box1 color="#cccccc" />
<Box1 color="#eeeeee" />

## scale.brewer

chroma.js 包含来自 [ColorBrewer2.org](https://colorbrewer2.org) 的定义。

```js
chroma.scale('YlGnBu')
chroma.scale('Spectral')
```

<Box3 colors="YlGnBu" />
<Box3 colors="Spectral" />

要翻转颜色，你只需简单的翻转 `domain`：

```js
chroma.scale('Spectral').domain([1, 0])
```

<Box3 colors="Spectral" :domain="[1, 0]" />

你还可以通过 [`chroma.brewer`](./chroma.md#chroma-brewer) 直接访问颜色。

## chroma.bezier

`chroma.bezier(colors)`

`chroma.bezier` 返回一个函数，该函数在 Lab 色彩空间中进行贝塞尔插值。函数的输入范围从 0 到 1。

```js
// linear interpolation
chroma.scale(['yellow', 'red', 'black'])

// bezier interpolation
chroma.bezier(['yellow', 'red', 'black'])
```

<Box3 :colors="['yellow', 'red', 'black']" />
<Box3 :bezier="['yellow', 'red', 'black']" />

你可以将贝塞尔插值器转换为 `chroma.scale` 实例。

```js
chroma.bezier(['yellow', 'red', 'black']).scale().colors(5)
```

<Box2 :colors="chroma.bezier(['yellow', 'red', 'black']).scale().colors(5)" />
