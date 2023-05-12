<template>
  <Navbar />
  <main>
    <router-view class="mt-24"></router-view>
  </main>
  <AppFooter />
  <ModeToggle />
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import AppFooter from "./components/AppFooter.vue";
import ModeToggle from "./components/ModeToggle.vue";
import Navbar from "./components/Navbar.vue";
import { useAuthStore } from "./stores/authStore";
const authStore = useAuthStore();
onMounted(() => {
  authStore.validateToken();
});
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}

html {
  scroll-behavior: smooth;
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

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

.clickable {
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}
</style>
