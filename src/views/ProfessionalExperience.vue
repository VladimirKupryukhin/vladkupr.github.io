<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
    <div>
        <h1>Professional experience goes here</h1>
    </div>
    <div>
        <nav>
            <RouterLink class="navbar-master" to="/profexp/stryker">Stryker</RouterLink>
        </nav>
    </div>
    <RouterView />
</template>