<script setup lang="ts">
    import CommandInput from "../components/CommandInput.vue"
</script>

<template>
    <div class="sw-text">
        <CommandInput command="whoami" class="mytitle"/>
        <p class="mytitle">Vladimir Kupryukhin</p>
    </div>

</template>

<style scoped>

.mytitle {
    font-size: 50px;
}

.whoami-response{
    font-size: 20px;
}

</style>

