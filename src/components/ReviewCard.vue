<script setup>

import FiveStars from "./FiveStars.vue";
import GenericCard from "./GenericCard.vue";

defineProps({

  reviewInfo: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <generic-card>
    <section class="review-card">
      <aside class="image">
        <img :src="reviewInfo.photo" :alt="reviewInfo.name"/>
        <five-stars></five-stars>
      </aside>
      <div class="content">
        <p v-html="reviewInfo.review"></p>
        <p> {{ reviewInfo.name }}</p>
      </div>
    </section>
  </generic-card>
</template>

<style scoped>
section.review-card {
  display: flex;
  flex-direction: row;

  aside.image {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      object-position: 0 20%;
      border-radius: 100%;
      box-shadow: unset;
      margin-right: 10px;
    }
  }

  div.content {
    display: flex;
    flex-direction: column;

    p {
      margin: .5rem;
    }

    p span {
      color: white;
      font-weight: bold;
    }
  }
}


@media screen and (width > 900px) {
  section.review-card {
    max-width: 650px;
  }
}
</style>