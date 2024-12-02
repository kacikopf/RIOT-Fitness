<script setup>

import FiveStars from "./FiveStars.vue";
import GenericCard from "./GenericCard.vue";

defineProps({
  reviewInfo: {
    type: Object,
    required: true
  },
  backgroundColor: {
    type: String,
    required: false
  }
})

</script>

<template>
  <generic-card :block-color="backgroundColor">
    <section class="review-card">
      <aside class="image">
        <img :src="reviewInfo.photo" :alt="reviewInfo.name"/>
        <five-stars/>
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
  max-width: 400px;

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

@media screen and (width > 1000px) {
  section.review-card {
    max-width: 400px;
  }
}

@media screen and (width > 1400px) {
  section.review-card {
    max-width: 500px;
  }
}
</style>