<template>
  <header>
    <nav class="mt-16 mb-8">
      <div class="flex justify-between items-center mt-4">
        <router-link to="/" class="text-2xl font-medium">PoGo Trainer Hub</router-link>
        <div class="flex justify-between items-center">
          <router-link to="/search" class="text-lg font-normal mr-4">Find Trainers</router-link>
          <router-link v-if="authStore.isLoggedIn" to="/profile" class="text-lg font-normal">Profile</router-link>
        </div>
        <router-link v-if="!authStore.isLoggedIn" to="/login" class="text-lg font-normal">Log In</router-link>
        <button v-if="authStore.isLoggedIn" @click="authStore.logout" class="text-lg font-normal">Log Out</button>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
const authStore = useAuthStore();
</script>
<style lang="scss" scoped></style>
