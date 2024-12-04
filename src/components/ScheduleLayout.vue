<script setup>

import GenericCard from "./GenericCard.vue";
import ScheduleCard from "./ScheduleCard.vue";
</script>

<template>
  <h1>Riot Schedule</h1>
  <div class="monday schedule">
    <h2>Monday</h2>
    <div class="cards">
      <generic-card>
        <schedule-card class-members="*Empower & Ultimate Members"
                       class-name="HIIT"
                       class-subheader="(High-Intensity Interval Training)"
                       class-time="6:00am - 45 Minutes"></schedule-card>
      </generic-card>

      <generic-card block-color="#EE3F23">
        <schedule-card class-members="*All Members"
                       class-name="Stretch & Wellness"
                       class-time="12:00pm - 1 Hour"></schedule-card>
      </generic-card>

      <generic-card block-color="#B92A49">
        <schedule-card class-members="*Empower & Ultimate Members"
                       class-name="Fitness Kickboxing"
                       class-time="6:00pm - 45 Minutes"></schedule-card>
      </generic-card>
    </div>
  </div>

  <div class="tuesday schedule">
    <h2>Tuesday</h2>
    <div class="cards">
      <generic-card block-color="#5B1B1B">
        <schedule-card class-members="*All Members"
                       class-name="Strength Training"
                       class-time="6:00am - 1 Hour"></schedule-card>
      </generic-card>

      <generic-card block-color="#D25656">
        <schedule-card class-members="*Empower & Ultimate Members"
                       class-name="Self-Defense"
                       class-time="12:00pm - 1 Hour"></schedule-card>
      </generic-card>

      <generic-card block-color="#872036">
        <schedule-card class-members="*All Members"
                       class-name="Zumba"
                       class-subheader="(Dance-based workout)"
                       class-time="6:00pm - 45 Minutes"></schedule-card>
      </generic-card>
    </div>
  </div>

</template>

<style scoped>

h1 {
  text-align: center;
}
div.schedule {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem 0 2rem 0;
  text-align: center;
  align-items: center;

  div.cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  h2 {
    span {
      font-size: 10px;
    }
  }
}

@media screen and (width > 800px) {
  div.schedule {
    flex-direction: column;
    text-align: left;
    justify-self: center;

    div.cards {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      align-items: center;
      flex: 1;
      flex-basis: 100%
    }
  }
}

@media screen and (width > 1200px) {
  div.schedule {
    flex-direction: row;
    gap: 5rem;
    align-items: center;
    text-align: left;

    div.cards {
      display: flex;
      flex-direction: row;
      gap: 5rem;
    }
  }
}
</style>