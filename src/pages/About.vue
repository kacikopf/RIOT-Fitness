<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import AboutAbout from "../templates/AboutAbout.vue";
import AboutDetails from "../templates/AboutDetails.vue";

</script>

<template>
  <primary-template image="About-Header.jpg" header="Our Mission: Strength, <br> Safety, and Support" button="Book a Tour">
    <section class="page-guts">
      <about-about/>
    </section>
    <about-details/>
  </primary-template>
</template>

<style scoped>
section.page-guts {
  margin: 0 5rem 0 5rem;
  padding: 1rem 0 1rem 0;
}

@media screen and (width > 1200px) {

  section.page-guts {
    margin: 2rem 10rem 2rem 10rem;
    //padding: 2rem;
  }
}
</style>