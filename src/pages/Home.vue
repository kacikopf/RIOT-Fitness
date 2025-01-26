<script setup>


import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import MembershipCard from "../components/MembershipCard.vue";
import GenericCard from "../components/GenericCard.vue";
import ScrollingText from "../components/ScrollingText.vue";
import WhyRiot from "../templates/WhyRiot.vue";
import TrainerCard from "../components/TrainerCard.vue";
import trainerData from '/src/trainer_data.js';
import SocialImages from "../components/SocialImages.vue";
import ReviewsSection from "../templates/ReviewsSection.vue";
import HomeAbout from "../templates/HomeAbout.vue";
import MembershipSection from "../templates/MembershipSection.vue";
import TrainersSection from "../templates/TrainersSection.vue";
import SocialsSection from "../templates/SocialsSection.vue";
</script>

<template>
  <primary-template image="RIOT-Fitness-Hero.jpg" header="Empowering Women, <br> Redefining Fitness" button="Book a Tour">

    <section class="page-guts">
      <home-about/>
    </section>

    <why-riot/>

    <scrolling-text></scrolling-text>

    <section class="page-guts">
    <membership-section/>
    </section>
    <trainers-section/>
    <scrolling-text></scrolling-text>
    <section class="page-guts">
      <reviews-section/>
      <socials-section/>
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