<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import MembershipInfoSection from "../templates/MembershipInfoSection.vue";
import FlexFitMembership from "../templates/FlexFitMembership.vue";
import FlexFitAbout from "../templates/FlexFitAbout.vue";
</script>

<template>
<primary-template image="Membership-Header.jpg" header="Flexible Plans, Accessible <br> Fitness for All">
  <section class="page-guts">
    <membership-info-section/>
    <flex-fit-membership/>
  </section>
  <flex-fit-about/>
</primary-template>
</template>

<style scoped>
section.page-guts {
  margin: 0 5rem 0 5rem;
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
    margin: 2rem 10rem 2rem 10rem;
  }
}
</style>