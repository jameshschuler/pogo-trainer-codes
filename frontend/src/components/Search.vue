<template>
  <div
    id="search--container"
    class="absolute p-6 bg-white bottom-0 shadow-md rounded-lg"
  >
    Search
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
$search-container-height: 100px;

#search--container {
  height: $search-container-height;
  left: 10%;
  width: 80%;
  bottom: calc($search-container-height / -2);
}
</style>
