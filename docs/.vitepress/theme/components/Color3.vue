<script setup>
const props = defineProps({
  colors: {
    type: Array,
    default: ['white', 'black']
  },
  nums: {
    type: Array,
    default: [0, 0.5, 1]
  }
})

const bgColor = props.colors.join().split(',')
const background = `linear-gradient(90deg, ${bgColor})`
</script>

<template>
  <div class="color-3">
    <div class="box" :style="{ background }"></div>
    <div class="num">
      <span>{{ nums[0] }}</span>
      <span>{{ nums[1] }}</span>
      <span>{{ nums[2] }}</span>
    </div>
  </div>
</template>

<style scoped>
.color-3 {
  width: 180px;
  margin-bottom: 6px;
}

.box {
  width: 100%;
  height: 20px;
}

.num {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
</style>
