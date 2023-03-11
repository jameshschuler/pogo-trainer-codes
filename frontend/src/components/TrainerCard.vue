<template>
  <div
    class="trainer--card shadow-lg rounded-md p-4 px-8 flex flex-col justify-center items-center"
  >
    <img :src="avatarUrl" alt="avatar" />
    <div class="mt-8 text-center">
      <h1 class="text-xl font-semibold">Trainer Name</h1>
      <h3 class="mt-3 text-gray-500">Trainer Code</h3>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const avatarUrl = `https://api.dicebear.com/5.x/bottts-neutral/svg?radius=50&size=96&seed=${props.name}`;
</script>
<style lang="scss" scoped>
.trainer--card {
  height: 300px;
}
</style>
