import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useProfileStore } from "./profileStore";

export const useAuthStore = defineStore("auth", () => {
  const profileStore = useProfileStore();
  const isLoggedIn = ref<boolean>(false);
  const router = useRouter();

  function logout() {
    localStorage.clear();

    isLoggedIn.value = false;
    profileStore.profile = null;

    router.push("/");
  }

  function validateToken() {
    const createdAt = localStorage.getItem("created_at");
    const expiresIn = localStorage.getItem("expires_in");

    const now = Date.now() / 1000;
    const expiry = Number(createdAt) + Number(expiresIn);
    isLoggedIn.value = now < expiry;
  }

  return {
    isLoggedIn,

    logout,
    validateToken,
  };
});
