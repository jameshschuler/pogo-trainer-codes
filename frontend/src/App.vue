<template>
  <Navbar />
  <main>
    <router-view class="mt-24"></router-view>
    <Overlay />
    <ToastContainer />
  </main>
  <AppFooter />
  <ModeToggle />
</template>
<script setup lang="ts">
import AppFooter from "@/components/AppFooter.vue";
import ModeToggle from "@/components/ModeToggle.vue";
import Navbar from "@/components/Navbar.vue";
import Overlay from "@/components/common/Overlay.vue";
import ToastContainer from "@/components/common/ToastContainer.vue";
import { onMounted } from "vue";
import { useAuthStore } from "./stores/authStore";
const authStore = useAuthStore();
onMounted(() => {
  authStore.validateToken();
});
</script>
<style lang="scss">
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  main {
    flex-grow: 1;
  }

  header,
  main,
  footer {
    flex-shrink: 0;
  }
}
</style>
