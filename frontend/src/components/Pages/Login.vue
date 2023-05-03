<template>
  <div class="flex flex-col justify-center items-center">
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <a :href="url" class="hover border rounded-md border-2 py-4 px-6 bg-purple-400 text-white">
      <span>
        <i class="fa-brands fa-discord fa-fw fa-lg mr-2"></i>
      </span>
      <span class="font-medium text-lg">{{ discordBtnText }}</span>
    </a>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { useProfileStore } from "@/stores/profileStore";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const url = ref(import.meta.env.VITE_APP_DISCORD_URL);
const loading = ref<boolean>(false);
const errorMessage = ref<string | null>();

const authStore = useAuthStore();
const profileStore = useProfileStore();

const discordBtnText = computed(() => {
  return loading.value ? "Logging In..." : "Log In with Discord";
});

onMounted(async () => {
  errorMessage.value = null;

  if (route.hash !== "") {
    loading.value = true;

    for (let fragment of route.hash.split("&")) {
      const [key, value] = fragment.split("=");
      localStorage.setItem(key, value);
    }

    localStorage.setItem("created_at", Date.now().toString());

    authStore.validateToken();

    const response = await profileStore.createProfile();
    if (response) {
      router.push("/profile");
    } else {
      errorMessage.value = "Unable to login with Discord. Please try again later.";
      router.replace({ query: undefined });
    }

    loading.value = false;
  }
});
</script>
<style lang="scss" scoped>
.hover {
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}
</style>
