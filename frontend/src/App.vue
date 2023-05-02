<template>
  <div class="container mx-auto px-6 pb-12 relative">
    <Navbar />
    <router-view></router-view>
    <ModeToggle />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import ModeToggle from "./components/ModeToggle.vue";
import Navbar from "./components/Navbar.vue";
import { useAuthStore } from "./stores/authStore";
const authStore = useAuthStore();
onMounted(() => {
  authStore.validateToken();
});
</script>
<style scoped></style>
