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

  classSubheader: {
    type: String,
    required: false,
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
    <div class="class-name">
      <h3 class="class-name" v-html="className"></h3>
      <h4 class="classSubheader" v-html="classSubheader"></h4>
    </div>
    <a class="class-members">{{ classMembers }}</a>
  </section>
</template>

<style scoped>
section.class-card {
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  align-items: center;

  div.class-name {
    display: flex;
    flex-direction: row;
    align-items: center;
  }


  a, h3, h4 {
    margin: .7rem;
  }
}

@media screen and (width > 800px) {
  section.class-card {
    align-items: flex-start;
  }
}
</style>
