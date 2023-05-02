import { CreateProfileRequest, Profile } from "@/types/api";
import { defineStore } from "pinia";
import { ref } from "vue";

const baseApiUrl = import.meta.env.DEV ? import.meta.env.VITE_APP_DEV_API_URL : import.meta.env.VITE_APP_API_URL;
const profileApiBaseUrl = `${baseApiUrl}/profile`;

export const useProfileStore = defineStore("profile", () => {
  const profile = ref<Profile>();

  async function createProfile(): Promise<boolean> {
    try {
      const createProfileResponse = await fetch(`${profileApiBaseUrl}`, {
        method: "POST",
        body: JSON.stringify({
          accessCode: localStorage.getItem("access_token"),
        } as CreateProfileRequest),
      });

      if (createProfileResponse.status !== 200) {
        return false;
      }

      const profileData = await createProfileResponse.json();
      profile.value = profileData;
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async function getProfile(): Promise<boolean> {
    // TODO:
    try {
      const response = await fetch(`${profileApiBaseUrl}`, {
        method: "GET",
      });

      if (response.status !== 200) {
        return false;
      }

      const responseData = await response.json();

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  return {
    createProfile,
    getProfile,

    profile,
  };
});
