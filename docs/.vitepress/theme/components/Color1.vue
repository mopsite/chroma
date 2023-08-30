<script setup>
import chroma from 'chroma-js'

const props = defineProps({
  color: {
    type: String,
    default: '#ff3399'
  }
})

const textColor = chroma.contrast(props.color, '#000') >= 6.5 ? '#000' : '#fff'
</script>

<template>
  <span class="color-1" :style="{ color: textColor, backgroundColor: color }">
    {{ color }}
  </span>
</template>

<style scoped>
span {
  display: inline-block;
  margin-right: 8px;
  padding: 0 5px;
  font-size: 14px;
  border-radius: 4px;
}
</style>
