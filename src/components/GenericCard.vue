<script setup>
defineProps({
  blockColor: {
    type: String,
    required: false,
    default: '#f17a8e'
  }
})
</script>

<template>
  <section class="generic-card" :style="'background-color: ' + blockColor + ';'">
    <slot></slot>
  </section>
</template>

<style scoped>
.generic-card {
  box-shadow: 15px 15px #272727;
  padding: 16px;
  margin: 2rem 0 2rem 0;
}
</style>