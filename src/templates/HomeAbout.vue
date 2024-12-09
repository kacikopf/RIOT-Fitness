<script setup>

</script>

<template>
  <section class="about">
    <aside class="content">
      <h1>WE RIOT</h1>
      <p>Join us in sculpting a fitness journey where women lead the way, and everyone finds their power. Welcome to
        RIOT Fitness, where strength knows no boundaries.</p>
      <button>About Us</button>
    </aside>
    <div class="image">
      <img src="../assets/gym-space.jpg" alt="RIOT Gym Space"/>
    </div>
  </section>
</template>

<style scoped>
section.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4rem;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  img {
    max-width: 100%;
  }
}

@media screen and (width > 1200px) {

  section.about {
    flex-direction: row;
    align-items: center;
    padding-bottom: 1rem;
    margin: 0 10rem 0 10rem;

    .image {
      max-width: 600px;
      min-width: 500px;
    }

    .content {
      padding-right: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      align-items: flex-start;

      p {
        font-size: 1rem;
        max-width: 85%;
      }
    }
  }
}
</style>