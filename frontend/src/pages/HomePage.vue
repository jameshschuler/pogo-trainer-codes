<template>
  <div
    class="card border-2 border-black bg-white p-12 rounded-xl flex flex-col h-sm justify-between max-w-screen-xl <xl:mx-auto dark:bg-dark-200"
  >
    <div>
      <h1 class="font-bold text-4xl mb-4">Welcome to the PoGo Trainer Hub!</h1>
      <h3 class="text-xl">The simplest way to search for new friends from your PoGo community!</h3>

      <h2 class="font-semibold text-2xl mb-4 mt-8">Coming Soon!</h2>
      <ul class="list-circle ml-4 text-lg">
        <li>Discord Integration</li>
        <li>Custom profiles including ability to update trainer name and trainer code</li>
      </ul>
    </div>
    <div class="flex justify-end items-center">
      <router-link
        to="/search"
        id="go-to-search--btn clickable"
        class="p-4 px-6 border-2 border-black rounded-lg font-semibold dark:text-white dark:bg-black"
      >
        Find Trainers!
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
