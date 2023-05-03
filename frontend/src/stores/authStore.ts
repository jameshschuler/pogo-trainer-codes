import { defineStore } from "pinia";
import { ref } from "vue";
import { useProfileStore } from "./profileStore";

export const useAuthStore = defineStore("auth", () => {
  const profileStore = useProfileStore();
  const isLoggedIn = ref<boolean>(false);

  function logout() {
    localStorage.clear();

    isLoggedIn.value = false;
    profileStore.profile = null;

    // TODO: if current route requires auth then redirect to home
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
