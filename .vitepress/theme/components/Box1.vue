<script setup>
import { computed } from 'vue'
import chroma from 'chroma-js'

const props = defineProps({
  color: {
    type: [String, Object],
    default: '#ff3399'
  }
})

const textColor = computed(() =>
  chroma.contrast(props.color + '', '#000') >= 6.5 ? '#000' : '#fff'
)
</script>

<template>
  <span class="box1">{{ color }}</span>
</template>

<style scoped>
.box1 {
  display: inline-block;
  margin-right: 8px;
  padding: 0 5px;
  color: v-bind('textColor');
  background: v-bind('props.color');
  border-radius: 4px;
}
</style>
