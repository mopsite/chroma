<script setup>
import chroma from 'chroma-js'

const colors = chroma
  .cubehelix()
  .start(200)
  .rotations(-0.35)
  .gamma(0.7)
  .lightness([0.3, 0.8])
  .scale()
  .correctLightness()
  .colors(5)
</script>

# Cubehelix

## chroma.cubehelix

`chroma.cubehelix(start=300, rotations=-1.5, hue=1, gamma=1, lightness=[0,1])`

Dave Green 的 [cubehelix](https://people.phy.cam.ac.uk/dag9/CUBEHELIX/) 色彩方案。

```js
// use the default helix...
chroma.cubehelix()

// or customize it
chroma.cubehelix().start(200).rotations(-0.5).gamma(0.8).lightness([0.3, 0.8])
```

<Box5 />
<Box5 :start="200" :rotations="-0.5" :gamma="0.8" :lightness="[0.3,0.8]" />

## cubehelix.start

`cubehelix.start(hue)`

[色相旋转](en.wikipedia.org/wiki/Hue#/media/File:HueScale.svg)的起始颜色，默认值为 300。

```js
chroma.cubehelix().start(300)
chroma.cubehelix().start(200)
```

<Box5 />
<Box5 :start="200" />

## cubehelix.rotations

`cubehelix.rotations(num)`

色相旋转的数量和方向（例如，`1 = 360°`，`1.5 = 540°`），默认值为 -1.5。

```js
chroma.cubehelix().rotations(-1.5)
chroma.cubehelix().rotations(0.5)
chroma.cubehelix().rotations(3)
```

<Box5 />
<Box5 :rotations="0.5" />
<Box5 :rotations="3" />

## cubehelix.hue

`cubehelix.hue(numOrRange)`

色相控制所有色调的博爱合度。单个值或范围，默认值为 1。

```js
chroma.cubehelix().hue(1)
chroma.cubehelix().hue(0.5)
chroma.cubehelix().hue([1, 0])
```

<Box5 />
<Box5 :hue="0.5" />
<Box5 :hue="[1,0]" />

## cubehelix.lightness

`cubehelix.lightness(range)`

亮度范围：默认 0 到 1（黑到白）。

```js
chroma.cubehelix().lightness([0, 1])
chroma.cubehelix().lightness([1, 0])
chroma.cubehelix().lightness([0.3, 0.7])
```

<Box5 />
<Box5 :lightness="[1,0]" />
<Box5 :lightness="[0.3,0.7]" />

## cubehelix.scale

你可以通过 `cubehelix.scale` 接口调用 `cubehelix.scale()` 来使用 cube-helix。

```js
chroma
  .cubehelix()
  .start(200)
  .rotations(-0.35)
  .gamma(0.7)
  .lightness([0.3, 0.8])
  .scale() // convert to chroma.scale
  .correctLightness()
  .colors(5)
```

<Box2 :colors />
