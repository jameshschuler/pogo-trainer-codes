import { Profile } from "@/types/api";
import { defineStore } from "pinia";
import { ref } from "vue";

const baseApiUrl = import.meta.env.DEV ? import.meta.env.VITE_APP_DEV_API_URL : import.meta.env.VITE_APP_API_URL;
const profileApiBaseUrl = `${baseApiUrl}/profile`;

export const useProfileStore = defineStore("profile", () => {
  const profile = ref<Profile | null>();

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
        profile.value = null;
      }

      const responseData = await response.json();
      profile.value = responseData.data;
    } catch (err) {
      console.error(err);
    }
  }

  return {
    getProfile,

    profile,
  };
});
