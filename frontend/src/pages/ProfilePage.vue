<template>
  <div class="bg-white border-2 border-black rounded-xl p-12 dark:bg-dark-200">
    <Modal type="loading" message="Getting Profile..." v-if="loading" />
    <ProfileForm :loading="loading" />
  </div>
</template>
<script setup lang="ts">
import ProfileForm from "@/components/Profile/ProfileForm.vue";
import Modal from "@/components/common/Modal.vue";
import { useCommonStore } from "@/stores/commonStore";
import { useProfileStore } from "@/stores/profileStore";
import { onMounted, ref } from "vue";

const profileStore = useProfileStore();
const loading = ref<boolean>(false);
const commonStore = useCommonStore();

onMounted(async () => {
  if (!profileStore.profile) {
    loading.value = true;
    commonStore.showOverlay = true;
    await profileStore.getProfile();
    commonStore.showOverlay = false;
    loading.value = false;
  }
});
</script>
<style lang="scss" scoped>
#save-profile--btn {
  &:hover:enabled {
    background-color: lightgreen;
  }
}
</style>
