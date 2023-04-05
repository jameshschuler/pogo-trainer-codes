import { defineStore } from "pinia";
import { ref } from "vue";

const baseApiUrl = import.meta.env.VITE_APP_API_URL;

export const useTrainersStore = defineStore("trainers", () => {
  const errorMessage = ref<string>();
  const loading = ref<boolean>(false);
  const query = ref<string | undefined>();
  const source = ref<string>();
  const trainers = ref([]);

  async function searchTrainers(q?: string) {
    loading.value = true;

    query.value = q;

    try {
      let searchTrainersUrl = baseApiUrl;

      searchTrainersUrl += `?query=${query.value ?? ""}`;

      if (source.value) {
        if (source.value.includes("-")) {
          source.value = source.value.replace("-", " ");
        }
        searchTrainersUrl += `&source=${source.value}`;
      }

      const response = await fetch(searchTrainersUrl, { method: "GET" });
      const data = await response.json();

      trainers.value = data.data.trainers;
      errorMessage.value = "";
    } catch (err) {
      errorMessage.value = "Unable to search for trainers. Please try again.";
    } finally {
      loading.value = false;
    }
  }

  return {
    errorMessage,
    loading,
    query,
    source,
    trainers,

    searchTrainers,
  };
});
