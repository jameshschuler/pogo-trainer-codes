<template>
  <div class="mt-32">
    <h1 class="font-semibold text-4xl mt-8">Trainers</h1>
    <div
      v-if="store.trainers.length !== 0"
      id="trainers--container"
      class="grid grid-cols-3 <sm:grid-cols-1 <lg:grid-cols-2 gap-x-8 gap-y-8 mt-8"
    >
      <TrainerCard v-for="trainer in store.trainers" :trainer="trainer" />
    </div>
    <div v-if="store.loading" class="grid grid-cols-3 <sm:grid-cols-1 <lg:grid-cols-2 gap-x-8 gap-y-8 mt-8">
      <SkeletonCard v-for="i in 6" />
    </div>
    <div v-if="!store.loading && store.trainers.length === 0">
      <p class="text-lg">{{ noTrainerFoundMessage }}</p>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useTrainersStore } from "../stores/trainersStore";
import SkeletonCard from "./SkeletonCard.vue";
import TrainerCard from "./TrainerCard.vue";

const store = useTrainersStore();

const noTrainerFoundMessage = computed(() => {
  if (store.errorMessage) {
    return store.errorMessage;
  }

  let message = "No Trainers found";
  return store.query ? `${message} for "${store.query}"` : message;
});
</script>
<style lang="scss" scoped></style>
