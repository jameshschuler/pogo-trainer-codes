<template>
  <div>Profile</div>
</template>
<script setup lang="ts">
import { useProfileStore } from "@/stores/profileStore";
import { onMounted } from "vue";

const profileStore = useProfileStore();

onMounted(async () => {
  await profileStore.getProfile();
});
</script>
<style lang="scss" scoped></style>
