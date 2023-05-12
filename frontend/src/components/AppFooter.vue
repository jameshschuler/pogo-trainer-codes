<template>
  <footer class="pb-6">
    <div class="flex justify-center items-center pt-6">
      <a class="mr-4" href="https://github.com/jameshschuler/pogo-trainer-codes" target="_blank">
        <span>
          <i class="fa-brands fa-fw fa-xl fa-github-alt"></i>
        </span>
      </a>
      <a href="https://discord.gg/pokemongosandiego" target="_blank">
        <span>
          <i class="fa-brands fa-fw fa-xl fa-discord"></i>
        </span>
      </a>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
a {
  .fa-github-alt {
    &:hover {
      color: #4078c0;
    }
  }

  .fa-discord {
    &:hover {
      color: rgb(88, 101, 242);
    }
  }
}
</style>
