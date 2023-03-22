<template>
  <div class="container mx-auto px-6 pb-12 relative">
    <Navbar />
    <Hero />
    <TrainersList />
    <ModeToggle />
  </div>
</template>
<script setup lang="ts">
import Hero from "./components/Hero.vue";
import ModeToggle from "./components/ModeToggle.vue";
import Navbar from "./components/Navbar.vue";
import TrainersList from "./components/TrainersList.vue";
</script>
<style scoped></style>
