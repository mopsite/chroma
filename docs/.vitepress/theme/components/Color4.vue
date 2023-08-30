<script setup>
import chroma from 'chroma-js'

const props = defineProps({
  colors: {
    type: Array,
    default: ['white', 'black']
  },
  num: {
    type: Number,
    default: 3
  },
  nums: {
    type: Array,
    default: [0, 0.5, 1]
  }
})

const f = chroma.scale(props.colors).classes(props.num)
</script>

<template>
  <div class="color-4">
    <div class="box">
      <template v-for="n in num">
        <span :style="{ background: f((n - 1) / num).hex() }"></span>
      </template>
    </div>
    <div class="num">
      <span>{{ nums[0] }}</span>
      <span>{{ nums[1] }}</span>
      <span>{{ nums[2] }}</span>
    </div>
  </div>
</template>

<style scoped>
.color-4 {
  width: 180px;
  margin-bottom: 6px;
}

.box {
  display: flex;
  width: 100%;
  height: 20px;
}

.box span {
  flex: 1;
}

.num {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
</style>
