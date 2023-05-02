<template>
  <nav class="my-8">
    <!-- <div class="flex justify-end">
      <a class="mr-4" href="https://github.com/jameshschuler/pogo-trainer-codes" target="_blank">
        <span>
          <i class="fa-brands fa-fw fa-xl fa-github-alt"></i>
        </span>
      </a>
      <a href="https://discord.gg/pokemongosandiego" target="_blank">
        <span>
          <i class="fa-brands fa-fw fa-xl fa-discord"></i>
        </span>
      </a>
    </div> -->
    <div class="flex justify-between items-center mt-4">
      <router-link to="/" class="text-2xl font-medium">PoGo Trainer Hub</router-link>
      <div>
        <router-link to="/profile" class="text-lg font-normal">Search</router-link>
        <router-link to="/profile" class="text-lg font-normal">Profile</router-link>
      </div>
      <router-link v-if="!authStore.isLoggedIn" to="/login" class="text-lg font-normal">Login</router-link>
      <button v-if="authStore.isLoggedIn" @click="authStore.logout" class="text-lg font-normal">Logout</button>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
const authStore = useAuthStore();
</script>
<style lang="scss" scoped>
a {
  .fa-github-alt {
    &:hover {
      color: #4078c0;
    }
  }

  .fa-discord {
    &:hover {
      color: rgb(88, 101, 242);
    }
  }
}
</style>
