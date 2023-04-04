<template>
  <div id="search--container" class="absolute p-6 bg-white bottom-0 shadow-lg rounded-lg">
    <div class="h-full">
      <input
        id="search--input"
        placeholder="Search Trainers by trainer name, trainer code, or username"
        class="p-4 rounded-md border border-gray-500 w-full"
        type="text"
        name="searchQuery"
        v-model="query"
        @input="handleSearch()"
      />
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
      func.apply(this, args);
    }, timeout);
  };
}

onMounted(async () => {
  await router.isReady();
  store.source = route.params.source as string;
  store.searchTrainers();
});
</script>
<style lang="scss" scoped>
$search-container-height: 100px;

#search--container {
  height: $search-container-height;
  left: 10%;
  width: 80%;
  bottom: calc($search-container-height / -2);

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
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
