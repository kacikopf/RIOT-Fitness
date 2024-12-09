<script setup>

</script>

<template>
  <section class="about-details">

    <div class="left-box">
      <img src="../assets/gym-pod.png" alt="RIOT Gym Pod"/>
      <aside class="left-info">
        <h2>24/7 gym pods</h2>
        <p>Our 24/7 gym pods offer a private, secure space tailored to your schedule and comfort. Equipped with
          everything you need for a full workout, these pods are available in various sizes to fit solo or group
          sessions. Designed for flexibility, privacy, and inclusivity, our pods empower you to exercise on your own
          terms, any time of day or night.</p>
        <button>Book Now</button>
      </aside>
    </div>

    <div class="right-box">
      <img src="../assets/safety-watch.jpg" alt="Safety Watch"/>
      <aside class="right-info">
        <h2>Rentable Safety Watches</h2>
        <p>Our rentable safety watches add an extra layer of security to your workout. With quick-access alert
          features, these watches allow you to signal for help discreetly, and quickly, making it easy to feel safe and
          supported during your fitness journey. Available to all members, the safety watches are part of our commitment
          to creating a comfortable and empowering space for everyone. Talk to a front desk member about renting a
          safety watch during your workout. </p>
      </aside>
    </div>

    <div class="left-box">
      <img src="../assets/womens-yoga-class.jpg" alt="Women's yoga class"/>
      <aside class="left-info">
        <h2>Diverse Events & Classes</h2>
        <p>RIOT Fitness offers a wide range of events and classes designed to support both physical and mental wellness.
          From high-energy group workouts to self-defense workshops and mindfulness sessions, our programming is crafted
          to empower you at every level of your fitness journey. Led by experienced instructors, each class provides an
          inclusive space to grow stronger, gain confidence, and connect with a supportive community.</p>
        <router-link to="/schedule">
          <button>Schedule</button>
        </router-link>
      </aside>
    </div>

  </section>
</template>

<style scoped>
section.about-details {
  margin: 1rem 5rem 1rem 5rem;
  text-align: center;

  div.left-box {
    display: flex;
    flex-direction: column;

  }

  div.right-box {
    display: flex;
    flex-direction: column;
  }
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

@media screen and (width > 1000px) {


  section.about-details {
    flex-direction: row;
    margin: 0 0 5rem 0;

    div.left-box {
      flex-direction: row;
      max-height: 400px;
      text-align: left;


      aside.left-info {
        margin: 0 5rem 0 5rem;
        align-content: center;
      }
    }

    div.right-box {
      flex-direction: row-reverse;
      max-height: 400px;
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