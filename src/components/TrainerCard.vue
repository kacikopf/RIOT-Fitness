<script setup>
const fullName = (trainerData) => {
  return trainerData.first_name + " " + trainerData.last_name;
}

defineProps({
  trainerInfo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="trainer-card">
    <div class="photo">
      <img :src="trainerInfo.photo" :alt="fullName(trainerInfo)"/>
    </div>
    <div class="details">
      <h1 v-text="fullName(trainerInfo)"/>
      <p> {{ trainerInfo.description }}</p>
      <ul>
        <li>{{ trainerInfo.certification1 }}</li>
        <li>{{ trainerInfo.certification2 }}</li>
        <li>{{ trainerInfo.certification3 }}</li>
      </ul>
    </div>
    <button>Book now</button>
  </section>
</template>

<style scoped>
section.trainer-card {
  display: flex;
  flex-direction: column;
  //border: 1px solid lightgray;
  //border-radius: 10px;
  width: 100%;
  gap: 1rem;
  padding: 1rem 0 1rem 0;
  align-items: center;
  text-align: center;

  ul {
    list-style-position: inside;
  }


  .photo {
    height: 225px;
    width: 450px;

    img {
      width: 100%;
      display: block;
      max-height: 225px;
      object-fit: cover;
    }

    div.details {
      display: flex;
      padding: 1rem;

      p {
        text-align: center;
      }
    }
  }

  button {
    background-color: #272727;
    color: white;
  }
}
</style>