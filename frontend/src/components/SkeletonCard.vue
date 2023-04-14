<template>
  <div class="trainer--skeleton-card shadow-xl flex flex-col items-center justify-around">
    <div class="bg-gray-400 animate-pulse rounded-full skeleton-circle"></div>
    <div class="w-3/4">
      <div class="bg-gray-400 animate-pulse rounded-lg h-8"></div>
      <div class="bg-gray-400 animate-pulse rounded-lg mt-4 h-6"></div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.trainer--skeleton-card {
  height: 300px;

  .skeleton-circle {
    height: 6.25rem;
    width: 6.25rem;
  }
}
</style>
