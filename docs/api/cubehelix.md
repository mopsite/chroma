# Cubehelix

## chroma.cubehelix

`chroma.cubehelix(start=300, rotations=-1.5, hue=1, gamma=1, lightness=[0,1])`

Dave Green 的 [cubehelix](https://www.mrao.cam.ac.uk/~dag/CUBEHELIX/) 色彩方案。

```js
// use the default helix...
chroma.cubehelix()
// or customize it
chroma.cubehelix().start(200).rotations(-0.5).gamma(0.8).lightness([0.3, 0.8])
```

<Color3 :colors=colors1 />
<Color3 :colors=colors2 />

## cubehelix.start

`cubehelix.start(hue)`

[色相旋转](http://en.wikipedia.org/wiki/Hue#/media/File:HueScale.svg)的起始颜色，默认值为 300。

```js
chroma.cubehelix().start(300)
chroma.cubehelix().start(200)
```

<Color3 :colors=colors3 />
<Color3 :colors=colors4 />

## cubehelix.rotations

`cubehelix.rotations(num)`

色相旋转的数量和方向（例如，`1 = 360°`，`1.5 = 540°`），默认值为 -1.5。

```js
chroma.cubehelix().rotations(-1.5)
chroma.cubehelix().rotations(0.5)
chroma.cubehelix().rotations(3)
```

<Color3 :colors=colors5 />
<Color3 :colors=colors6 />
<Color3 :colors=colors7 />

## cubehelix.hue

`cubehelix.hue(numOrRange)`

色相控制所有色调的饱和度。单个值或范围，默认值为 1。

```js
chroma.cubehelix()
chroma.cubehelix().hue(0.5)
chroma.cubehelix().hue([1, 0])
```

<Color3 :colors=colors1 />
<Color3 :colors=colors8 />
<Color3 :colors=colors9 />

## cubehelix.gamma

`cubehelix.gamma(factor)`

伽马因子可用于强调低强度或高强度值，默认值为 1。

```js
chroma.cubehelix().gamma(1)
chroma.cubehelix().gamma(0.5)
```

<Color3 :colors=colors10 />
<Color3 :colors=colors11 />

## cubehelix.lightness

`cubehelix.lightness(range)`

亮度范围：默认 0 到 1（黑到白）。

```js
chroma.cubehelix().lightness([0, 1])
chroma.cubehelix().lightness([1, 0])
chroma.cubehelix().lightness([0.3, 0.7])
```

<Color3 :colors=colors12 />
<Color3 :colors=colors13 />
<Color3 :colors=colors14 />

## cubehelix.scale

你可以通过 `chroma.scale` 接口调用 `cubehelix.scale()` 来使用 cube-helix。

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

<Color2 :colors=colors15 />

<script setup>
  import chroma from 'chroma-js'

  const f1 = chroma.cubehelix()
  const f2 = chroma.cubehelix().start(200).rotations(-0.5).gamma(0.8).lightness([0.3, 0.8])
  const colors1 = [f1(0),f1(0.1),f1(0.2),f1(0.3),f1(0.4),f1(0.5),f1(0.6),f1(0.7),f1(0.8),f1(0.9),f1(1)]
  const colors2 = [f2(0),f2(0.5),f2(1)]

  const f3 = chroma.cubehelix().start(300);
  const f4 = chroma.cubehelix().start(200);
  const colors3 = [f3(0),f3(0.1),f3(0.2),f3(0.3),f3(0.4),f3(0.5),f3(0.6),f3(0.7),f3(0.8),f3(0.9),f3(1)]
  const colors4 = [f4(0),f4(0.1),f4(0.2),f4(0.3),f4(0.4),f4(0.5),f4(0.6),f4(0.7),f4(0.8),f4(0.9),f4(1)]

  const f5 = chroma.cubehelix().rotations(-1.5)
  const f6 = chroma.cubehelix().rotations(0.5)
  const f7 = chroma.cubehelix().rotations(3)
  const colors5 = [f5(0),f5(0.1),f5(0.2),f5(0.3),f5(0.4),f5(0.5),f5(0.6),f5(0.7),f5(0.8),f5(0.9),f5(1)]
  const colors6 = [f6(0),f6(0.1),f6(0.2),f6(0.3),f6(0.4),f6(0.5),f6(0.6),f6(0.7),f6(0.8),f6(0.9),f6(1)]
  const colors7 = [f7(0),f7(0.1),f7(0.2),f7(0.3),f7(0.4),f7(0.5),f7(0.6),f7(0.7),f7(0.8),f7(0.9),f7(1)]

  const f8 = chroma.cubehelix().hue(0.5)
  const f9 = chroma.cubehelix().hue([1,0])
  const colors8 = [f8(0),f8(0.1),f8(0.2),f8(0.3),f8(0.4),f8(0.5),f8(0.6),f8(0.7),f8(0.8),f8(0.9),f8(1)]
  const colors9 = [f9(0),f9(0.1),f9(0.2),f9(0.3),f9(0.4),f9(0.5),f9(0.6),f9(0.7),f9(0.8),f9(0.9),f9(1)]

  const f10 = chroma.cubehelix().gamma(1)
  const f11 = chroma.cubehelix().gamma(0.5)
  const colors10 = [f10(0),f10(0.1),f10(0.2),f10(0.3),f10(0.4),f10(0.5),f10(0.6),f10(0.7),f10(0.8),f10(0.9),f10(1)]
  const colors11 = [f11(0),f11(0.1),f11(0.2),f11(0.3),f11(0.4),f11(0.5),f11(0.6),f11(0.7),f11(0.8),f11(0.9),f11(1)]

  const f12 = chroma.cubehelix().lightness([0, 1])
  const f13 = chroma.cubehelix().lightness([1, 0])
  const f14 = chroma.cubehelix().lightness([0.3, 0.7])
  const colors12 = [f12(0),f12(0.1),f12(0.2),f12(0.3),f12(0.4),f12(0.5),f12(0.6),f12(0.7),f12(0.8),f12(0.9),f12(1)]
  const colors13 = [f13(0),f13(0.1),f13(0.2),f13(0.3),f13(0.4),f13(0.5),f13(0.6),f13(0.7),f13(0.8),f13(0.9),f13(1)]
  const colors14 = [f14(0),f14(0.1),f14(0.2),f14(0.3),f14(0.4),f14(0.5),f14(0.6),f14(0.7),f14(0.8),f14(0.9),f14(1)]

  const colors15 = chroma.cubehelix().start(200).rotations(-0.35).gamma(0.7).lightness([0.3, 0.8]).scale().correctLightness().colors(5)
</script>
