<script setup>

</script>

<template>
  <section class="why-riot">
    <h1>Why Riot?</h1>

    <div class="gym-pod">
      <img src="../assets/gym-pod.png" alt="RIOT Gym Pod"/>
      <aside class="pod-info">
        <h2>Your Workout, Your Space</h2>
        <p>Explore our exclusive 24/7 gym pods, providing a private and comfortable workout haven that caters to your
          individual fitness journey.</p>
      </aside>
    </div>

    <div class="safety-watch">
      <img src="../assets/safety-watch.jpg" alt="Safety Watch"/>
      <aside class="watch-info">
        <h2>Your Workout, Your Space</h2>
        <p>Explore our exclusive 24/7 gym pods, providing a private and comfortable workout haven that caters to your
          individual fitness journey.</p>
      </aside>
    </div>

  </section>
</template>

<style scoped>
section.why-riot {
  margin: 0 5rem 0 5rem;
  text-align: center;

  div.gym-pod {
    display: flex;
    flex-direction: column;
  }

  div.safety-watch {
    display: flex;
    flex-direction: column;

    img {
      box-shadow: -15px 15px #272727;
    }
  }

  img {
    width: 100%;
  }

  h2 {
    padding: 2rem 0 1rem 0;
  }

  p {
    margin-bottom: 1rem;
  }
}

@media screen and (width > 1000px) {


section.why-riot {
  flex-direction: row;
  margin: 0 0 2rem 0;


  div.gym-pod {
    flex-direction: row;
    max-height: 300px;
    text-align: left;


    aside.pod-info {
      margin: 0 5rem 0 5rem;
      align-content: center;
    }
  }

  div.safety-watch {
    flex-direction: row-reverse;
    max-height: 300px;
    text-align: right;

    aside.watch-info {
      margin: 0 5rem 0 5rem;
      align-content: center;
    }
  }

  img {
    width: 50%;
    object-fit: cover;
    margin: 1rem 0 1rem 0;
  }
}
}
</style>