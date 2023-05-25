<template>
  <div @click="toggleCard" :class="{ flipped: flipped }" class="trainer--card cursor-pointer">
    <div class="card--inner p-4 px-8 w-full h-full">
      <div class="card--front rounded-md bg-white border-2 border-black rounded-xl">
        <div class="flex justify-end pt-4 pr-4">
          <span>
            <i class="fa-solid fa-fw fa-lg fa-qrcode"></i>
          </span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img class="avatar mt-4" :src="avatarUrl" alt="avatar" />
          <div class="mt-8 text-center">
            <h1 class="text-xl font-semibold dark:text-white">{{ trainer.trainerName }}</h1>
            <h3 class="mt-3 text-gray-500 dark:text-blue-500 flex items-center">
              {{ trainer.trainerCode }}
              <span class="ml-2 mb-2" @click.stop="copyTrainerCode(trainer.trainerCode)">
                <i class="fa-solid fa-fw fa-lg fa-copy text-black hover:text-blue-500"></i>
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div class="card--back bg-gray-200 flex flex-col justify-center items-center border-2 border-black rounded-xl">
        <canvas ref="canvas"></canvas>
        <h1 class="text-xl font-semibold mt-5">
          <span class="mr-2">
            <i class="fa-brands fa-discord"></i>
          </span>
          {{ trainer.username }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useToastStore } from "@/stores/toastStore";
import QRCode from "qrcode";
import { onMounted, PropType, ref } from "vue";
import { Trainer } from "../types/api";

const props = defineProps({
  trainer: {
    type: Object as PropType<Trainer>,
    required: true,
  },
});

const toastStore = useToastStore();

const avatarUrl = `https://api.dicebear.com/5.x/bottts-neutral/svg?radius=50&size=96&seed=${props.trainer.trainerName}`;

const canvas = ref(null);
const flipped = ref<boolean>(false);

function copyTrainerCode(trainerCode: string) {
  navigator.clipboard.writeText(trainerCode);
  toastStore.addToast({
    delay: 500,
    message: "Copied trainer code to clipboard",
  });
}

function toggleCard() {
  flipped.value = !flipped.value;
}

onMounted(async () => {
  QRCode.toCanvas(canvas.value, "test", { errorCorrectionLevel: "H" }, function (error: any) {
    if (error) {
      console.error(error);
    }
  });
});
</script>
<style lang="scss" scoped>
.trainer--card {
  height: 300px;
  background-color: transparent;

  &.flipped {
    .card--inner {
      transform: rotateY(180deg);
      transition: transform 0.5s;
    }
  }

  .card--inner {
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;

    .card--front,
    .card--back {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
    }

    .card--back {
      transform: rotateY(180deg);
    }
  }
}
</style>
