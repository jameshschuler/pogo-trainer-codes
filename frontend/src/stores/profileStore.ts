import { ToastType } from "@/types/enums";
import { defineStore } from "pinia";
import { ref } from "vue";
import { Profile, UpdateProfileRequest } from "../types/api";
import { useAuthStore } from "./authStore";
import { useToastStore } from "./toastStore";

const baseApiUrl = import.meta.env.DEV
  ? import.meta.env.VITE_APP_DEV_API_URL
  : import.meta.env.VITE_APP_API_URL;
const profileApiBaseUrl = `${baseApiUrl}/profile`;

export const useProfileStore = defineStore("profile", () => {
  const profile = ref<Profile | null>();
  const authStore = useAuthStore();
  const toastStore = useToastStore();

  async function updateProfile(request: UpdateProfileRequest) {
    try {
      console.log(request);
    } catch (err) {
      toastStore.addToast({
        message: "Unable to update profile",
        type: ToastType.Error,
      });
    }
  }

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

      const responseData = (await response.json()) as Profile;

      if (responseData.trainerAlts.length === 0) {
        responseData.trainerAlts.push({
          name: "",
          code: "",
        });
      }

      profile.value = responseData;
    } catch (err) {
      toastStore.addToast({
        message: "Unable to get profile",
        type: ToastType.Error,
      });
    }
  }

  return {
    getProfile,
    updateProfile,

    profile,
  };
});
