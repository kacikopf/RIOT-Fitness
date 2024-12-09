<script setup>

</script>

<template>
  <section class="why-riot">
    <h1>Why Riot?</h1>

    <div class="left-box">
      <img src="../assets/gym-pod.png" alt="RIOT Gym Pod"/>
      <aside class="left-info">
        <h2>Your Workout, Your Space</h2>
        <p>Explore our exclusive 24/7 gym pods, providing a private and comfortable workout haven that caters to your
          individual fitness journey.</p>
      </aside>
    </div>

    <div class="right-box">
      <img src="../assets/safety-watch.jpg" alt="Safety Watch"/>
      <aside class="right-info">
        <h2>Safety first, Always</h2>
        <p>Take charge of your safety with our safety watches, ready to send quick alerts in any situation, empowering
          you to focus on your fitness goals. </p>
      </aside>
    </div>

    <div class="left-box">
      <img src="../assets/womens-yoga-class.jpg" alt="Women's yoga class"/>
      <aside class="left-info">
        <h2>Beyond workouts</h2>
        <p>Elevate your fitness journey with specialized events & classes at RIOT, focusing on self-defense, mental
          health, and overall well-being.</p>
      </aside>
    </div>

  </section>
</template>

<style scoped>
section.why-riot {
  margin: 0 5rem 0 5rem;
  text-align: center;

  div.left-box {
    display: flex;
    flex-direction: column;
  }

  div.right-box {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
  }

  h2 {
    padding-top: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }
}

@media screen and (width > 1000px) {


  section.why-riot {
    flex-direction: row;
    margin: 0 0 2rem 0;


    div.left-box {
      flex-direction: row;
      max-height: 300px;
      text-align: left;


      aside.left-info {
        margin: 0 5rem 0 5rem;
        align-content: center;
      }
    }

    div.right-box {
      flex-direction: row-reverse;
      max-height: 300px;
      text-align: right;

      img {
        box-shadow: -15px 15px #272727;
      }

      aside.right-info {
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