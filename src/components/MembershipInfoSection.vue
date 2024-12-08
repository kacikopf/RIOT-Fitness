<script setup>

import MembershipCard from "./MembershipCard.vue";
import GenericCard from "./GenericCard.vue";
import GenericCardNoWidth from "./GenericCardNoWidth.vue";
</script>

<template>
  <h1>Join the RIOT</h1>
  <div class="membership-card">
    <generic-card-no-width>
      <membership-card
          membership-name="Starter"
          membership-cost="<span>$29.99</span>/month<br/> or<br/> <span2>$323.89</span2><span3>/year</span3><br/> plus taxes and fees"
          membership-type="Full access to our gym spaces and basic classes. Enjoy a <span>10% discount</span> for annual payment and the flexibility to cancel or adjust your plan at any time."/>
    </generic-card-no-width>

    <generic-card-no-width block-color="#EE3F23" style="transform: scale(1.05)">
      <membership-card
          membership-name="Empower"
          membership-cost="<span>$59.99</span>/month<br/> or<br/> <span2>$575.90</span2><span3>/year</span3><br/> plus taxes and fees"
          membership-type="Full access to our gym spaces, advanced classes, and personalized training sessions. <span>Save 20%</span> on an annual subscription and enjoy flexible cancellation."/>
    </generic-card-no-width>

    <generic-card-no-width>
      <membership-card
          membership-name="Ultimate"
          membership-cost="<span>$79.99</span>/month<br/> or<br/> <span2>$815.90</span2><span3>/year</span3><br/> plus taxes and fees"
          membership-type="Full access to our gym spaces, priority booking, and bring a guest. Secure a <span>15% discount</span> with an annual commitment and enjoy flexibility for cancellations."/>
    </generic-card-no-width>
  </div>
  <section class="membership-grid">
    <picture class="membership-grid">
      <source
          media="(min-width: 800px)"
          srcset="../assets/membership-grid-web.png">
      <source
          media="(min-width: 550px)"
          srcset="../assets/membership-grid-tablet.png">
      <img
          src="../assets/membership-grid-mobile.png"
          alt="Membership grid">
    </picture>
    <div class="membership-buttons">
      <button>Join Now</button>
      <button>Join Now</button>
      <button>Join Now</button>
    </div>
  </section>
</template>

<style scoped>
img {
  width: 100%;
  box-shadow: unset;
  margin: 2rem 0 2rem 0;
}

h1 {
  text-align: center;
}

div.membership-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  transform: scale(85%);
  //gap: 1rem;
  //margin: 1rem 5rem 1rem 5rem;
}

section.membership-grid {
  text-align: center;
  display: flex;
  flex-direction: column;

  .membership-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1rem;
    width: 90%;
    justify-content: space-between;
    margin: 0 auto;
  }

  .membership-grid {
    img {
      width: 90%;
    }
  }
}

@media screen and (width > 700px) {
  div.membership-card {
    flex-direction: row;
    gap: 3rem;
  }

  section.membership-grid {
    .membership-buttons {
      button {
        width: 300px;
      }
    }
  }
}
@media screen and (width > 1200px) {
  div.membership-card {
    flex-direction: row;
    gap: 5rem;
  }

  section.membership-grid {
    .membership-buttons {
      width: 80%;

      button {
        width: 500px;
      }
    }

    .membership-grid {
      img {
        width: 80%;
      }
    }
  }
}
</style>