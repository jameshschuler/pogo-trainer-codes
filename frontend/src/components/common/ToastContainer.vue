<template>
  <div id="toast-container" class="flex">
    <Toast
      v-for="toast of toasts"
      :duration="toast.duration"
      :delay="toast.delay"
      :message="toast.message"
      :type="toast.type"
    />
  </div>
</template>
<script setup lang="ts">
import Toast from "@/components/common/Toast.vue";
import { useToastStore } from "@/stores/toastStore";

const { toasts } = useToastStore();
</script>
<style lang="scss" scoped>
#toast-container {
  flex-direction: column;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1;

  @include mobile {
    right: 0;
    width: 90%;
  }
}
</style>
