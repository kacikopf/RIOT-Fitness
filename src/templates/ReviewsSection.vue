<script setup>

import ReviewCard from "../components/ReviewCard.vue";
import reviews_data from "../reviews_data.js";

const reviews = reviews_data.data

</script>

<template>
  <h1>Riot Raves</h1>
  <div class="review-card">
    <review-card :review-info="reviews[0]" :background-color="'#f17a8e'"/>
    <review-card :review-info="reviews[1]" :background-color="'#EE3F23'"/>
    <review-card :review-info="reviews[2]" :background-color="'#EE3F23'"/>
    <review-card :review-info="reviews[3]" :background-color="'#f17a8e'"/>
  </div>
</template>

<style scoped>

h1 {
  text-align: center;
}

div.review-card {
  display: flex;
  //flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}

@media screen and (width > 1000px) {

  div.review-card {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem 4rem;
    width: unset;
  }
}

@media screen and (width > 1400px) {

  div.review-card {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem 4rem;
  }
}

</style>