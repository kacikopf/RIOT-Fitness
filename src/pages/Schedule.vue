<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import ScheduleLayout from "../templates/ScheduleLayout.vue";
import EventsSection from "../templates/EventsSection.vue";
</script>

<template>
<primary-template image="Schedule-Header.jpg" header="Move, Learn, Connect: <br> Fitness and Wellness" button="Book a Tour">
  <section class="page-guts">
    <schedule-layout></schedule-layout>
  </section>
  <events-section/>
</primary-template>
</template>

<style scoped>
section.page-guts {
  margin: 0 3rem 0 3rem;
}


@media screen and (width > 1200px) {

  section.page-guts {
    margin: 2rem 5rem 2rem 5rem;
  }
}
</style>