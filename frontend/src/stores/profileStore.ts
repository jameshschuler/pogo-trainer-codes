import { defineStore } from "pinia";
import { ref } from "vue";
import { Profile } from "../types/api";
import { useAuthStore } from "./authStore";

const baseApiUrl = import.meta.env.DEV ? import.meta.env.VITE_APP_DEV_API_URL : import.meta.env.VITE_APP_API_URL;
const profileApiBaseUrl = `${baseApiUrl}/profile`;

export const useProfileStore = defineStore("profile", () => {
  const profile = ref<Profile | null>();
  const authStore = useAuthStore();

  async function getProfile(): Promise<void> {
    try {
      const accessToken = localStorage.getItem("access_token");
      const response = await fetch(`${profileApiBaseUrl}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
      });

      if (response.status !== 200) {
        if (response.status === 401) {
          await authStore.logout();
        }

        return;
      }

      const responseData = await response.json();
      profile.value = responseData;
    } catch (err) {
      console.error(err);
    }
  }

  return {
    getProfile,

    profile,
  };
});
