<script setup>
import chroma from 'chroma-js'

const props = defineProps({
  colors: {
    type: [Array, String],
    default: () => ['#fff', '#000']
  },
  domain: {
    type: Array,
    default: () => [0, 1]
  },
  mode: {
    type: String,
    default: 'rgb'
  },
  gamma: {
    type: Number,
    default: 1
  },
  correctLightness: {
    type: Boolean,
    default: false
  },
  padding: {
    type: [Number, Array],
    default: 0
  },
  bezier: {
    type: Array,
    default: () => []
  },
  nums: {
    type: Array,
    default: () => [0, 0.5, 1]
  },
  text: {
    type: Array,
    default: () => [0, 0.5, 1]
  }
})

let scale = chroma
  .scale(props.colors)
  .domain(props.domain)
  .mode(props.mode)
  .gamma(props.gamma)
  .padding(props.padding)

if (props.bezier.length) {
  scale = chroma
    .bezier(props.bezier)
    .scale()
    .domain(props.domain)
    .mode(props.mode)
    .gamma(props.gamma)
    .padding(props.padding)
}

if (props.correctLightness) scale = scale.correctLightness()

const colors = props.nums.map(num => scale(num))
const background = `linear-gradient(90deg, ${colors.join()})`
</script>

<template>
  <div class="box3">
    <div class="box"></div>
    <div class="text">
      <template v-for="num in text">
        <span>{{ num }}</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.box3 {
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
