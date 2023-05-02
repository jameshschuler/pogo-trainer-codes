<template>
  <div id="search--container" class="p-6 bg-white shadow-lg rounded-lg">
    <div class="flex flex-row p-4">
      <div class="flex flex-col min-w-xs mr-6">
        <label for="location--select" class="mb-2 font-semibold">Location</label>
        <select id="location-select" class="p-4 rounded-md border border-gray-500" :disabled="true">
          <option selected value="san-diego">San Diego</option>
        </select>
      </div>
      <div class="flex flex-col w-full">
        <label for="search-input" class="mb-2 font-semibold">Search Trainers</label>
        <input
          id="search--input"
          placeholder="Search Trainers by trainer name or discord username"
          class="p-4 rounded-md border border-gray-500 relative"
          type="text"
          name="searchQuery"
          v-model="query"
          @input="handleSearch()"
          data-lpignore="true"
        />
      </div>

      <!-- <div class="absolute spinner--input text-gray-500" v-if="store.searching">
        <span>
          <i class="fa-solid fa-circle-notch fa-spin fa-xl"></i>
        </span>
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTrainersStore } from "../stores/trainersStore";
const store = useTrainersStore();
const route = useRoute();
const router = useRouter();

const query = ref<string>();

const handleSearch = debounce(() => store.searchTrainers(query.value));

function debounce(func: Function, timeout = 500) {
  let timer: any;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(args);
    }, timeout);
  };
}

function handleScroll() {
  throttle(() => {
    const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

    if (endOfPage) {
      store.loadNextPage();
    }
  }, 1000);
}

let throttleTimer = false;
function throttle(callback: Function, time: number) {
  if (throttleTimer) {
    return;
  }

  throttleTimer = true;
  setTimeout(() => {
    callback();

    throttleTimer = false;
  }, time);
}

onMounted(async () => {
  await router.isReady();
  store.source = route.params.source as string;

  if (store.trainers.length === 0) {
    store.searchTrainers();
  }

  window.addEventListener("scroll", handleScroll);
});
</script>
<style lang="scss" scoped>
#search--container {
  // TODO: fix spinner position
  .spinner--input {
    right: 35px;
    top: 42%;
  }
}

#search--input {
  &:focus {
    outline-color: black;
    outline-style: solid;
  }
}

#search--btn {
  &:hover {
    opacity: 0.8;
  }
}
</style>
