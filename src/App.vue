<script setup>
import { RouterLink, RouterView } from 'vue-router'


import NavBar from '../src/views/NavBar.vue'
</script>

<template>

  <div class="navbar">
    <NavBar></NavBar>

  </div>

  <RouterView />
  

</template>


<style lang="scss">

.navbar{
  display: flex;
}





</style>

