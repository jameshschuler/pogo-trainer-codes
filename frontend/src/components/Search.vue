<template>
  <div
    id="search--container"
    class="absolute p-6 bg-white bottom-0 shadow-lg rounded-lg"
  >
    <div class="flex h-full justify-center">
      <input
        id="search--input"
        placeholder="Search Trainers by name or code"
        class="p-4 rounded-md border border-gray-500"
        type="text"
        name="searchQuery"
      />
      <button
        id="search--btn"
        class="ml-3 bg-black text-white w-14 h-full rounded-lg"
      >
        <i class="fa fa-fw fa-lg fa-search"></i>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
$search-container-height: 100px;

#search--container {
  height: $search-container-height;
  left: 10%;
  width: 80%;
  bottom: calc($search-container-height / -2);
}

#search--input {
  width: 80%;

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
