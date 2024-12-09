<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import ContactForm from "../components/ContactForm.vue";
</script>

<template>
<primary-template header="Connect With Us, <br> Explore RIOT" image="../assets/Contact-Header.jpg" button="About Us">
<section class="page-guts">
  <contact-form/>
</section>
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