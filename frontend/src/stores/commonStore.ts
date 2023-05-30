import { defineStore } from "pinia";
import { ref } from "vue";

export const useCommonStore = defineStore("common", () => {
  const showOverlay = ref<boolean>(false);

  const featureToggles = ref({
    accounts: import.meta.env.VITE_APP_ACCOUNTS_FEATURE_TOGGLE === "true",
  });

  return {
    featureToggles,
    showOverlay,
  };
});
