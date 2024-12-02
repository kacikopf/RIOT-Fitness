<script setup>
import trainerData from "../trainer_data.js";
import TrainerCard from "./TrainerCard.vue";
</script>

<template>
  <h1>Meet the Experts</h1>
  <section class="trainers">
    <trainer-card v-for="(trainer, index) in trainerData.data"
                  :key="index" :trainer-info="trainer"/>
  </section>
</template>

<style scoped>

h1 {
  text-align: center;
  color: #272727;
}

section.trainers {
  gap: 3rem;
  //justify-content: center;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  position: relative;
}

@media screen and (width > 1200px) {
  section.trainers {
    display: flex;
    flex-direction: row;
  }
}
</style>