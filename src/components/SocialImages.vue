<script setup>

</script>

<template>
  <div class="img-gallery">
    <img src="../assets/socials-image-1.jpg" alt="Women sitting outside">
    <img src="../assets/boxing%20woman.jpg" alt="Smiling woman boxing a bag">
    <img src="../assets/socials-image-5.jpg" alt="Outdoor yoga class">
    <img src="../assets/socials-image-2.jpg" alt="Two women doing box jumps">
    <img src="../assets/socials-image-3.jpg" alt="Woman pushing a weighted sled">
    <img src="../assets/socials-image-4.jpg" alt="Strong woman on lat pull down machine">
  </div>
</template>

<style scoped>
div.img-gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  min-width: 375px;
  margin-top: 1rem;

  img {
    width: 175px;
    height: 175px;
    object-fit: cover;
    box-shadow: unset;
  }
}

@media screen and (min-width: 700px) {
  div.img-gallery {

  }
}

@media screen and (width > 1000px) {
  div.img-gallery {

    img {
      width: 200px;
      height: 200px;
    }
  }
}
</style>