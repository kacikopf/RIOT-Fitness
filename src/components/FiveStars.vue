<script setup>

</script>

<template>
<div class="FiveStars">
  <img src="../assets/star.svg" alt="star">
  <img src="../assets/star.svg" alt="star">
  <img src="../assets/star.svg" alt="star">
  <img src="../assets/star.svg" alt="star">
  <img src="../assets/star.svg" alt="star">
</div>
</template>

<style scoped>

.FiveStars {
  display: flex;
  flex-direction: row;
  gap: .2rem;
  margin: 1rem 0 1rem 0;

  img {
     width: 15px;
     box-shadow: unset;
   }
}

</style>