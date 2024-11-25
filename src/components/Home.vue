<script setup>


import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import MembershipCard from "./MembershipCard.vue";
import GenericCard from "./GenericCard.vue";
import ScrollingText from "./ScrollingText.vue";
import WhyRiot from "./WhyRiot.vue";
import TrainerCard from "./TrainerCard.vue";
import trainerData from '/src/trainer_data.js';
import ReviewCard from "./ReviewCard.vue";
import reviews_data from "../reviews_data.js";


</script>

<template>
  <primary-template image="RIOT-Fitness-Hero.jpg" header="Empowering Women, <br> Redefining Fitness">
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

    <why-riot></why-riot>

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

      <div class="membership-links">
        <button>Learn More</button>
        <a href="#">or <span>LEARN ABOUT OUR INCOME-ADJUSTED MEMBERSHIP</span></a>
      </div>
    </section>
    <h1>Meet the Experts</h1>
    <section class="trainers">
      <trainer-card v-for="(trainer, index) in trainerData.data"
                    :key="index" :trainer-info="trainer"/>
    </section>
    <scrolling-text></scrolling-text>
    <section class="home-guts">
      <div class="review-card">
        <review-card v-for="(review, index) in reviews_data.data"
                     :key="index" :review-info="review"></review-card>
      </div>
    </section>
  </primary-template>
</template>

<style scoped>

button {
  background-color: #272727;
  color: white;
  margin: 1rem 0 1rem 0;
}

section.home-guts {
  margin: 0 5rem 0 5rem;

  .membership-links {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  a {
    color: #272727;

    span {
      font-weight: bold;
      text-decoration: underline;
    }
  }
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

  img {
    max-width: 100%;
  }
}

h1 {
  text-align: center;
}


div.membership-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  //margin: 1rem 5rem 1rem 5rem;
}

section.trainers {
  gap: 3rem;
  //justify-content: center;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  position: relative;
}

div.review-card {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 700px) {
  div.membership-card {
    flex-direction: row;
  }
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

  section.trainers {
    display: flex;
    flex-direction: row;
  }

  div.review-card {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>