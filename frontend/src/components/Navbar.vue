<template>
  <header>
    <nav class="mt-16 mb-8">
      <div class="flex justify-between items-center mt-4">
        <router-link to="/" class="text-2xl font-medium">PoGo Trainer Hub</router-link>
        <div>
          <router-link to="/search" class="text-lg font-semibold mr-4">Find Trainers</router-link>
          <router-link v-if="authStore.isLoggedIn" to="/profile" class="text-lg font-semibold mr-4"
            >Profile</router-link
          >
          <router-link v-if="!authStore.isLoggedIn" to="/login" class="text-lg font-semibold">Log In</router-link>
          <button v-if="authStore.isLoggedIn" @click="authStore.logout" class="text-lg font-semibold">Log Out</button>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
const authStore = useAuthStore();
</script>
<style lang="scss" scoped></style>
