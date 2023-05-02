<template>
  <div class="bg-red-50 h-md rounded-3xl relative">
    <div class="flex items-end justify-center image-container px-4">
      <figure>
        <img :src="HeroImg" alt="Person walking in a park" />
      </figure>
      <figure class="<md:hidden">
        <img :src="HeroOutsideImg" alt="Park" />
      </figure>
      <figure class="<xl:hidden">
        <img :src="NoSunNoPersonImg" alt="Park" />
      </figure>
      <figure class="<sm:hidden">
        <img :src="WalkingOutsideFlippedImg" alt="Person walking in a park" />
      </figure>
    </div>
  </div>
</template>
<script setup lang="ts">
import HeroOutsideImg from "../assets/middle.svg";
import NoSunNoPersonImg from "../assets/no_sun_no_person.svg";
import HeroImg from "../assets/outside_no_sun.svg";
import WalkingOutsideFlippedImg from "../assets/walking_outside_flipped.svg";
</script>
<style lang="scss" scoped>
.image-container {
  height: 88%;

  figure {
    img {
      height: 15rem;
    }
  }
}
</style>
