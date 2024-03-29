import { ToastType } from "@/types/enums";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useProfileStore } from "./profileStore";
import { useToastStore } from "./toastStore";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref<boolean>(false);
  const router = useRouter();

  const profileStore = useProfileStore();
  const toastStore = useToastStore();

  const baseApiUrl = import.meta.env.DEV
    ? import.meta.env.VITE_APP_DEV_API_URL
    : import.meta.env.VITE_APP_API_URL;
  const authApiBaseUrl = `${baseApiUrl}/auth`;

  async function login(): Promise<void> {
    try {
      const accessToken = localStorage.getItem("access_token");
      const loginResponse = await fetch(`${authApiBaseUrl}/login`, {
        method: "POST",
        body: JSON.stringify({
          accessToken,
        }),
        credentials: "include",
      });

      if (loginResponse.status === 401) {
        localStorage.clear();

        isLoggedIn.value = false;
        profileStore.profile = null;

        router.push("/");
        return;
      }

      isLoggedIn.value = loginResponse.status === 200;
    } catch (err) {
      toastStore.addToast({
        message: "Unable to login with Discord. Please try again later.",
        type: ToastType.Error,
      });
      isLoggedIn.value = false;
    }
  }

  async function logout() {
    try {
      const accessToken = localStorage.getItem("access_token");
      await fetch(`${authApiBaseUrl}/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
      });
    } finally {
      localStorage.clear();

      isLoggedIn.value = false;
      profileStore.profile = null;

      router.push("/");
    }
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

    login,
    logout,
    validateToken,
  };
});
