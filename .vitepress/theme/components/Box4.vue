<script setup>
import chroma from 'chroma-js'

const props = defineProps({
  colors: {
    type: [Array, String],
    default: ['fff', '000']
  },
  classes: {
    type: Number,
    default: 3
  },
  text: {
    type: Array,
    default: [0, 0.5, 1]
  }
})

const f = chroma.scale(props.colors).classes(props.classes)
</script>

<template>
  <div class="box4">
    <div class="box">
      <template v-for="n in classes">
        <span :style="{ background: f((n - 1) / classes).hex() }"></span>
      </template>
    </div>
    <div class="text">
      <template v-for="num in text">
        <span>{{ num }}</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.box4 {
  width: 180px;
  margin-bottom: 6px;

  .box {
    display: flex;
    width: 100%;
    height: 20px;

    span {
      flex: 1;
    }
  }

  .text {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
}
</style>
