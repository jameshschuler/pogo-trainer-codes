import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref<boolean>(false);

  function logout() {
    localStorage.clear();

    isLoggedIn.value = false;
    // TODO: clear profile data
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
