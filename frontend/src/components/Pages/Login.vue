<template>
  <div class="flex flex-col justify-center items-center">
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <a :href="url" class="clickable border rounded-md border-2 py-4 px-6 bg-purple-400 text-white">
      <span>
        <i class="fa-brands fa-discord fa-fw fa-lg mr-2"></i>
      </span>
      <span class="font-medium text-lg">{{ discordBtnText }}</span>
    </a>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { generateRandomString } from "@/utils";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

// TODO: support .app redirect
const discordUrl = import.meta.env.DEV
  ? import.meta.env.VITE_APP_DISCORD_URL
  : import.meta.env.VITE_APP_PROD_DISCORD_URL;

const route = useRoute();
const router = useRouter();
const state = ref<string>();
const loading = ref<boolean>(false);
const errorMessage = ref<string | null>();

const authStore = useAuthStore();

const discordBtnText = computed(() => {
  return loading.value ? "Logging In..." : "Log In with Discord";
});

const url = computed(() => {
  return `${discordUrl}&state=${state.value}`;
});

function refreshStateValue() {
  const randomString = generateRandomString();
  localStorage.setItem("orig_state", randomString);

  state.value = randomString;
}

onMounted(async () => {
  errorMessage.value = null;

  if (route.hash !== "") {
    loading.value = true;

    for (let fragment of route.hash.split("&")) {
      const [key, value] = fragment.split("=");
      localStorage.setItem(key, value);
    }

    const origState = localStorage.getItem("orig_state");
    const stateParam = localStorage.getItem("state");
    if (origState === null || stateParam === null || origState !== stateParam) {
      localStorage.clear();
      loading.value = false;
      errorMessage.value = "Unable to login with Discord. Please try again later.";
      refreshStateValue();
      router.replace({ query: undefined });

      return;
    }

    localStorage.setItem("created_at", Date.now().toString());

    authStore.validateToken();

    await authStore.login();
    if (authStore.isLoggedIn) {
      router.push("/profile");
    } else {
      errorMessage.value = "Unable to login with Discord. Please try again later.";
      router.replace({ query: undefined });
    }

    loading.value = false;
  } else {
    refreshStateValue();
  }
});
</script>
<style lang="scss" scoped></style>
