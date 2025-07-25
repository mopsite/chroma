<script setup>
defineProps({
  colors: {
    type: Array,
    default: ['hotpink', 'deepskyblue']
  }
})
</script>

<template>
  <div class="box2">
    <template v-for="backgroundColor in colors">
      <span :style="{ backgroundColor }"></span>
    </template>
  </div>
</template>

<style scoped>
span {
  display: inline-block;
  margin-right: 8px;
  width: 20px;
  height: 20px;
  border-radius: 4px;
}
</style>
