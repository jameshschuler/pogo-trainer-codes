<template>
  <div class="mt-24">
    <h1 class="font-semibold text-3xl mt-8">Trainers</h1>
    <div id="trainers--container" class="grid grid-cols-3 gap-x-8 gap-y-8 mt-8">
      <TrainerCard v-for="trainer in testTrainers" :name="trainer" />
    </div>
  </div>
</template>
<script setup lang="ts">
import TrainerCard from "./TrainerCard.vue";

const testTrainers = ["James", "Bob", "Sandy", "Ben", "Terry"];
</script>
<style lang="scss" scoped></style>
