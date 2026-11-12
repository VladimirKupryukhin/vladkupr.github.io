<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
    <div class="">
        <nav>
            <RouterLink class="navbar-master sw-text" to="/profexp/stryker">Stryker</RouterLink>
        </nav>
    </div>
    <div class="sw-text">
        <h1>Professional experience goes here</h1>
    </div>
    <RouterView />
</template>