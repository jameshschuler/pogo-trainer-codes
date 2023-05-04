<template>
  <div
    class="card border-2 border-black bg-white p-12 rounded-xl flex flex-col h-sm justify-between max-w-screen-xl <xl:mx-auto"
  >
    <div>
      <h1 class="font-bold text-4xl mb-4">Welcome to the PoGo Trainer Hub!</h1>
      <h3 class="text-xl">Blah blah blah something about the app Blah blah blah something about the app</h3>
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
