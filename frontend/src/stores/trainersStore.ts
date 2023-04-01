import { defineStore } from "pinia";
import { ref } from "vue";

const apiUrl = import.meta.env.VITE_APP_API_URL;

export const useTrainersStore = defineStore("trainers", () => {
  const loading = ref<boolean>();
  const trainers = ref([]);

  async function searchTrainers(query?: string) {
    loading.value = true;

    try {
      const response = await fetch(apiUrl, { method: "GET" });
      const data = await response.json();

      trainers.value = data.data.trainers;
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    trainers,

    searchTrainers,
  };
});
