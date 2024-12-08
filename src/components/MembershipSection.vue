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
  <div class="membership-links">
    <button>Learn More</button>
    <a href="#">or <span>LEARN ABOUT OUR INCOME-ADJUSTED MEMBERSHIP</span></a>
  </div>
</template>

<style scoped>

h1 {
  text-align: center;
}

div.membership-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  //margin: 1rem 5rem 1rem 5rem;

}

div.membership-links {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 2rem;

  a, h1, p {
    color: #272727;

    span {
      font-weight: bold;
      text-decoration: underline;
    }
  }
}

@media screen and (width > 700px) {
  div.membership-card {
    flex-direction: row;
  }
}

@media screen and (width > 1200px) {
  div.membership-card {
    flex-direction: row;
    gap: 5rem;
  }
}
</style>