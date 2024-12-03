<script setup>

defineProps({
  classTime: {
    type: String,
    required: true,
  },

  className: {
    type: String,
    required: true,
  },

  classMembers: {
    type: String,
    required: true,
  }
})

</script>

<template>
  <section class='class-card'>
    <a class="class-time">{{ classTime }}</a>
    <h2 class="class-name" v-html="className"></h2>
    <a class="class-members">{{classMembers}}</a>
  </section>
</template>

<style scoped>
section.class-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
}
</style>