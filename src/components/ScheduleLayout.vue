<script setup>

import GenericCard from "./GenericCard.vue";
import ScheduleCard from "./ScheduleCard.vue";
</script>

<template>
  <h1>Riot Schedule</h1>
  <div class="monday schedule">
    <h2>Monday</h2>
    <generic-card>
      <schedule-card class-members="*Empower & Ultimate Members"
                     class-name="HIIT <span>(High-Intensity Interval Training)</span>"
                     class-time="6:00am - 45 Minutes"></schedule-card>
    </generic-card>

    <generic-card>
      <schedule-card class-members="*Empower & Ultimate Members"
                     class-name="HIIT <span>(High-Intensity Interval Training)</span>"
                     class-time="6:00am - 45 Minutes"></schedule-card>
    </generic-card>

    <generic-card>
      <schedule-card class-members="*Empower & Ultimate Members"
                     class-name="HIIT <span>(High-Intensity Interval Training)</span>"
                     class-time="6:00am - 45 Minutes"></schedule-card>
    </generic-card>
  </div>

</template>

<style scoped>
div.schedule {
  display: flex;
  flex-direction: column;
}

@media screen and (width > 1200px) {
  div.schedule {
    flex-direction: row;
    gap: 5rem;
    align-items: center;
  }
}
</style>