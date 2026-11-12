<script setup lang="ts">
defineProps<{
    command: string
}>()
</script>

<template>
    <div class="horizontal-div sw-text">
        <p class="sw-green">~$&nbsp;</p>
        <p>{{ command }}</p>
    </div>

</template>
