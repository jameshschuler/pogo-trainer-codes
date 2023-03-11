<template>
  <div class="container mx-auto px-6 pb-6">
    <Navbar />
    <Hero />
    <TrainersContainer />
  </div>
</template>
<script setup lang="ts">
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import TrainersContainer from "./components/TrainersContainer.vue";
</script>
<style scoped></style>
