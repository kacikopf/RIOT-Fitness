<script setup>


import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import MembershipCard from "./Membership-Card.vue";
import GenericCard from "./GenericCard.vue";
import ScrollingText from "./ScrollingText.vue";

</script>

<template>
  <primary-template>
    <section class="home-guts">
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
</section>
      <scrolling-text></scrolling-text>
<section class="home-guts">
      <h1>Join the RIOT</h1>
      <div class="membership-card">
        <generic-card>
          <membership-card
              membership-name="Starter"
              membership-cost="<span>$29.99</span>/month<br/> or<br/> <span2>$323.89</span2><span3>/year</span3><br/> plus taxes and fees"
              membership-type="Full access to our gym spaces and basic classes. Enjoy a <span>10% discount</span> for annual payment and the flexibility to cancel or adjust your plan at any time."/>
        </generic-card>

        <generic-card block-color="#EE3F23">
          <membership-card
              membership-name="Empower"
              membership-cost="<span>$59.99</span>/month<br/> or<br/> <span2>$575.90</span2><span3>/year</span3><br/> plus taxes and fees"
              membership-type="Full access to our gym spaces, advanced classes, and personalized training sessions. <span>Save 20%</span> on an annual subscription and enjoy flexible cancellation."/>
        </generic-card>

        <generic-card>
          <membership-card
              membership-name="Ultimate"
              membership-cost="<span>$79.99</span>/month<br/> or<br/> <span2>$815.90</span2><span3>/year</span3><br/> plus taxes and fees"
              membership-type="Full access to our gym spaces, priority booking, and bring a guest. Secure a <span>15% discount</span> with an annual commitment and enjoy flexibility for cancellations."/>
        </generic-card>
      </div>
    </section>
  </primary-template>
</template>

<style scoped>

section.home-guts {
  margin: 0 5rem 0 5rem;
}

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

  button {
    background-color: #272727;
    color: white;
    margin: 1rem 0 1rem 0;
  }

  img {
    max-width: 100%;
    box-shadow: 15px 15px #272727;
  }
}

h1 {
  text-align: center;
}

div.membership-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  //margin: 1rem 5rem 1rem 5rem;
}

@media screen and (width > 1000px) {

  section.home-guts {
    margin: 0 10rem 0 10rem;
    padding: 2rem;
  }

  section.about {
    flex-direction: row;
    align-items: center;
    padding-bottom: 1rem;

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

  div.membership-card {
    flex-direction: row;
    //margin: 1rem 10rem 1rem 10rem;
    gap: 5rem;
  }
}
</style>