<script setup>

</script>

<template>

  <div class="wrapper">
    <div class="marquee">
      <p>
        JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN
        THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN
        THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
      <p>
        JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN
        THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN
        THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN THE RIOT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
    </div>
  </div>
</template>

<style scoped>

.wrapper {
  max-width: 100%;
  overflow: hidden;
  background-image: url("src/assets/gradient-text-scroll.png");
  background-size: cover;
  background-position: center;
  height: 50px;
  align-content: center;
  border: solid black 1px;
}

.marquee {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: marquee 20s linear infinite;
}

.marquee p {
  display: inline-block;
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

p {
  font-family: "Anisette Std", Helvetica, sans-serif;
  font-size: 1em;
  font-weight: bold;
  color: white;
}

@media screen and (width > 1000px) {

  .wrapper {
    border: solid black 3px;
  }
}

</style>