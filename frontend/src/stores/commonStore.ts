import { defineStore } from "pinia";
import { ref } from "vue";

export const useCommonStore = defineStore("common", () => {
  const showOverlay = ref<boolean>(true);

  return {
    showOverlay,
  };
});
