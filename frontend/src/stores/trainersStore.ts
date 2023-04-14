import { defineStore } from "pinia";
import { ref } from "vue";
import { ApiResponse, Trainer, TrainerSearchResponse } from "../models/api";
import { PagingInfo } from "./store";

const baseApiUrl = import.meta.env.VITE_APP_API_URL;

export const useTrainersStore = defineStore("trainers", () => {
  const errorMessage = ref<string>();
  const loading = ref<boolean>(false);
  const query = ref<string | undefined>();
  const searching = ref<boolean>(false);
  const source = ref<string>();
  const trainers = ref<Trainer[]>([]);
  const pagingInfo = ref<PagingInfo>({
    totalCount: 0,
    currentPage: 1,
    pageCount: 0,
    pageSize: 0,
  });

  async function loadNextPage() {
    const nextPage = pagingInfo.value.currentPage + 1;
    if (nextPage > pagingInfo.value.pageCount) {
      return;
    }

    return await searchTrainers(query.value, nextPage);
  }

  async function searchTrainers(q?: string, page?: number) {
    loading.value = true;

    if (q && q !== "") {
      searching.value = true;
    }

    try {
      let searchTrainersUrl = baseApiUrl;

      searchTrainersUrl += `?page=${page ?? 1}&query=${q ?? ""}`;

      if (source.value) {
        if (source.value.includes("-")) {
          source.value = source.value.replace("-", " ");
        }
        searchTrainersUrl += `&source=${source.value}`;
      }

      const response = await fetch(searchTrainersUrl, { method: "GET" });
      const responseData = (await response.json()) as ApiResponse<TrainerSearchResponse>;

      const { currentPage, totalCount, pageCount, pageSize } = responseData.data;

      if (q !== query.value) {
        trainers.value = responseData.data.trainers;
      } else {
        trainers.value = [...trainers.value, ...responseData.data.trainers];
      }

      query.value = q;

      pagingInfo.value = {
        currentPage,
        totalCount,
        pageSize,
        pageCount,
      };
      errorMessage.value = "";
    } catch (err) {
      errorMessage.value = "Unable to search for trainers. Please try again.";
    } finally {
      loading.value = false;
      searching.value = false;
    }
  }

  return {
    errorMessage,
    loading,
    query,
    searching,
    source,
    trainers,

    loadNextPage,
    searchTrainers,
  };
});
