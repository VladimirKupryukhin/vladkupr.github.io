<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Title from './views/Title.vue'
import CommandInput from "./components/CommandInput.vue"
import TerminalNavigation from "./components/TerminalNavigation.vue"
</script>

<template>
  <header class=div-center-squish>
    <div class="">
      <Title />
    </div>
    <div class="div-vertical">
      <TerminalNavigation/>
    </div>
  </header>

</template>


<style scoped>
.wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
</style>