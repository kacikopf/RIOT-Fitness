<script setup>


defineProps({
  membershipName: {
    type: String,
    required: true
  },

  membershipCost: {
    type: String,
    required: true
  },

  membershipType: {
    type: String,
    required: true
  }
})

</script>

<template>

  <section class="membership-card">
    <h1 class="membership-name">{{ membershipName }}</h1>
    <p class="membership-cost" v-html="membershipCost"></p>
    <p class="membership-type" v-html="membershipType"></p>
  </section>


</template>

<style scoped>
section.membership-card {
  display: flex;
  flex-direction: column;
  color: white;

  h1, a, p {
    font-family: "Azo Sans", Helvetica, sans-serif;
    margin: .5rem;
  }

  p {
    font-size:.7rem;
  }

  h1 {
    font-family: "Azo Sans", Helvetica, sans-serif;
    font-weight: bold;
    font-size: 1.5em;
    text-transform: uppercase;
  }
}

@media screen and (width > 1000px) {

  section.membership-card {

    h1 {
      font-size: 2em;
    }

    p {
      font-size: 1rem;
    }
  }
}
</style>



<style>
.membership-cost {
  span {
    font-weight: bold;
    font-size: 2em;
  }

  span2 {
    font-weight: bold;
    font-size: 2em;
    color: #272727;
  }

  span3 {
    color: #272727;
  }
}

.membership-type {
  span {
    font-weight: bold;
    color: #272727;
  }
}
</style>