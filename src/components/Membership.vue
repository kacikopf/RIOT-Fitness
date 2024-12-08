<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import MembershipInfoSection from "./MembershipInfoSection.vue";
</script>

<template>
<primary-template image="Membership-Header.jpg" header="Flexible Plans, Accessible <br> Fitness for All">
  <section class="page-guts">
    <membership-info-section/>
  </section>
</primary-template>
</template>

<style scoped>
section.page-guts {
  margin: 0 3rem 0 3rem;
  padding: 1rem 0 1rem 0;
}

a, h1, p {
  color: #272727;
}

h1 {
  text-align: center;
}
@media screen and (width > 1200px) {

  section.page-guts {
    margin: 2rem 5rem 2rem 5rem;
  }
}
</style>