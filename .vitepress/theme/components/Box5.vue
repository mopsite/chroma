<script setup>
import chroma from 'chroma-js'

const props = defineProps({
  start: {
    type: Number,
    default: 300
  },
  rotations: {
    type: Number,
    default: -1.5
  },
  hue: {
    type: [Number, Array],
    default: 1
  },
  gamma: {
    type: Number,
    default: 1
  },
  lightness: {
    type: Array,
    default: () => [0, 1]
  },
  nums: {
    type: Array,
    default: () => [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
  },
  text: {
    type: Array,
    default: () => [0, 0.5, 1]
  }
})

let scale = chroma
  .cubehelix()
  .start(props.start)
  .rotations(props.rotations)
  .hue(props.hue)
  .gamma(props.gamma)
  .lightness(props.lightness)

const colors = props.nums.map(num => scale(num))
const background = `linear-gradient(90deg, ${colors.join()})`
</script>

<template>
  <div class="box5">
    <div class="box"></div>
    <div class="text">
      <template v-for="num in text">
        <span>{{ num }}</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.box5 {
  width: 180px;
  margin-bottom: 6px;

  .box {
    width: 100%;
    height: 20px;
    background: v-bind('background');
  }

  .text {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
}
</style>
