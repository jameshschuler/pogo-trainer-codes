<template>
  <div class="bg-white border-2 border-black rounded-xl p-12">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl">Profile</h1>
      <button id="save-profile--btn" class="py-2 px-4 border-2 border-black rounded-lg clickable">Save</button>
    </div>
    <ProfileForm />
  </div>
</template>
<script setup lang="ts">
import ProfileForm from "@/components/Profile/ProfileForm.vue";
import { useProfileStore } from "@/stores/profileStore";
import { onMounted } from "vue";

const profileStore = useProfileStore();

onMounted(async () => {
  await profileStore.getProfile();
});
</script>
<style lang="scss" scoped>
#save-profile--btn {
  &:hover {
    background-color: lightgreen;
  }
}
</style>
