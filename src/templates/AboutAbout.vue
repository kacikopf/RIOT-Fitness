<script setup>

</script>

<template>
  <section class="about">
    <aside class="content">
      <h1>What is Riot Fitness?</h1>
      <p>Welcome to <span>RIOT Fitness</span>, where we believe in breaking barriers, building strength, and
        empowering women to
        take
        control of their fitness journey. Our fitness space offers 24/7 private, bookable gym pods equipped with
        cutting-edge technology to guide your workouts in a safe and personalized environment. Borrow one of our
        safety watches, designed to send immediate alerts, ensuring peace of mind while you focus on what matters
        most—your well-being.</p>

      <p>At RIOT Fitness, we redefine fitness by offering more than just a workout. Our events and classes emphasize
        self-defense, mental health, and overall wellness, giving you the tools to feel strong inside and out.</p>

      <p>With a variety of flexible membership options, including an income-adjusted plan, we’re committed to making
        fitness accessible to everyone. Join our community, find your strength, and together, <span>WE RIOT!</span>
      </p>

      <h2>Have questions?</h2>
      <p>Give us a call or schedule an appointment to speak with a membership advisor today.</p>
      <button>Book a Tour</button>
    </aside>
    <div class="image">
      <img src="../assets/boxing%20woman.jpg" alt="Woman boxing on a bag"/>
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

    h2 {
      text-transform: unset;
    }

    p {
      span {
        font-weight: bold;
      }
    }
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: 0 30%;
  }
}

@media screen and (width > 1200px) {
  section.about {
    flex-direction: row;
    align-items: center;
    padding-bottom: 1rem;

    img {
      height: 700px;
      width: 400px;
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