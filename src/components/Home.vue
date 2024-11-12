<script setup>


import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import MembershipCard from "./Membership-Card.vue";
import GenericCard from "./GenericCard.vue";

</script>

<template>
  <primary-template>

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
  </primary-template>
</template>

<style scoped>

h1 {
  font-family: "Anisette Std", Helvetica, sans-serif;
  font-weight: bold;
  font-size: 2em;
  text-transform: uppercase;
  text-align: center;
}

div.membership-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  margin: 1rem 5rem 1rem 5rem;
}

@media screen and (width > 1000px) {

  div.membership-card {
    flex-direction: row;
    margin: 1rem 10rem 1rem 10rem;
    gap: 5rem;
  }
}

</style>