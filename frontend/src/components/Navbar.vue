<template>
  <header>
    <nav class="mt-16 mb-8">
      <div class="flex justify-between items-center mt-4">
        <router-link to="/" class="text-2xl font-medium pb-2">PoGo Trainer Hub</router-link>
        <div>
          <router-link to="/search" class="text-lg font-semibold mr-5 pb-2"
            >Find Trainers</router-link
          >
          <router-link
            v-if="authStore.isLoggedIn && commonStore.featureToggles.accounts"
            to="/profile"
            class="text-lg font-semibold mr-5 pb-2"
            >Profile</router-link
          >
          <router-link
            v-if="!authStore.isLoggedIn && commonStore.featureToggles.accounts"
            to="/login"
            class="text-lg font-semibold pb-2"
            >Log In</router-link
          >
          <button
            v-if="authStore.isLoggedIn && commonStore.featureToggles.accounts"
            @click="authStore.logout"
            class="text-lg font-semibold pb-2"
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { useCommonStore } from "@/stores/commonStore";
const authStore = useAuthStore();
const commonStore = useCommonStore();
</script>
<style lang="scss" scoped>
.router-link-active {
  border-bottom: 2px solid black;
}
</style>
