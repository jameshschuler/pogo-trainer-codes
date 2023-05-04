<template>
  <div id="search--container" class="p-6 bg-white shadow-lg rounded-xl absolute bottom-0 border-2 border-black">
    <div class="flex flex-row p-4 <lg:flex-col">
      <div class="flex flex-col min-w-xs mr-6 <lg:w-full">
        <label for="location--select" class="mb-2 font-semibold">Location</label>
        <select id="location-select" class="p-4 rounded-lg border-2 border-black" :disabled="true">
          <option selected value="san-diego">San Diego</option>
        </select>
      </div>
      <div class="flex flex-col w-full <lg:mt-4 relative">
        <label for="search-input" class="mb-2 font-semibold">Search Trainers</label>
        <input
          id="search--input"
          placeholder="Search Trainers by trainer name or discord username"
          class="p-4 rounded-lg border-2 border-black relative"
          type="text"
          name="searchQuery"
          v-model="query"
          @input="handleSearch()"
          data-lpignore="true"
        />
        <div class="absolute spinner--input text-black" v-if="store.searching">
          <span>
            <i class="fa-solid fa-circle-notch fa-spin fa-xl"></i>
          </span>
        </div>
      </div>
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
$search-container-height: 175px;

#search--container {
  min-height: $search-container-height;
  left: 5%;
  width: 90%;
  bottom: calc($search-container-height / -2) - 25;

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }

  .spinner--input {
    right: 15px;
    top: 50px;
  }
}

#search--input {
  &:focus {
    outline-color: #000;
    outline-style: solid;
    border-color: #000;
  }
}
</style>
