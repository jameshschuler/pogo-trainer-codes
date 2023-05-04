<template>
  <form class="mt-6 flex">
    <section class="pr-4">
      <div class="flex flex-col my-4">
        <label for="username" class="mb-2 font-semibold">Discord Username</label>
        <input
          class="p-4 rounded-lg border-2 border-black"
          type="text"
          id="username"
          :disabled="true"
          :value="profileStore.profile?.username"
        />
      </div>
    </section>
    <section class="pl-4">
      <div class="flex flex-col my-4">
        <label for="trainer-name" class="mb-2 font-semibold">Trainer Name</label>
        <input class="p-4 rounded-lg border-2 border-black" type="text" id="trainer-name" />
      </div>

      <div class="flex flex-col my-4">
        <label for="trainer-code" class="mb-2 font-semibold">Trainer Code</label>
        <input class="p-4 rounded-lg border-2 border-black" type="text" id="trainer-code" :disabled="true" />
      </div>
    </section>
  </form>
</template>
<script setup lang="ts">
import { useProfileStore } from "@/stores/profileStore";

const profileStore = useProfileStore();
</script>
<style lang="scss" scoped>
section {
  flex: 1 1 0;

  input {
    &:disabled {
      background-color: #e5e7eb;
      opacity: 0.75;
      border-color: #9ca3af;
    }
  }
}
</style>
