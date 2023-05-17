<template>
  <div class="modal bg-white w-lg border-2 border-black rounded-xl p-12 absolute top-1/3 left-0 right-0 mx-auto">
    <div class="flex flex-col items-center justify-center">
      <LoadingIndicator size="fa-3x" />
      <h1 class="text-3xl font-normal mt-6" v-if="message">{{ message }}</h1>
    </div>
  </div>
</template>
<script setup lang="ts">
import LoadingIndicator from "@/components/common/LoadingIndicator.vue";
import { ModalType } from "@/types/common";
import { PropType } from "vue";

defineProps({
  type: {
    type: String as PropType<ModalType>,
    required: true,
  },
  message: {
    type: String,
  },
});
</script>
<style lang="scss" scoped>
.modal {
  z-index: 3;
}
</style>
