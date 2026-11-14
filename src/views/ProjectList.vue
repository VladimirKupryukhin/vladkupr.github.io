<script setup lang="ts">
import GenericMarkdownRender from "../components/GenericMarkdownRender.vue"
</script>

<template>
    <div class="container sw-text ">
        <div class="left div-border">
            <GenericMarkdownRender markdownfilesource="/markdown/projects/left.md" breaks="true"/>
        </div>
        <div class="middle div-border">
            <GenericMarkdownRender markdownfilesource="/markdown/projects/divider.md" breaks="true"/>
        </div>
        <div class="right div-border">
            <GenericMarkdownRender markdownfilesource="/markdown/projects/right.md" breaks="true"/>
        </div>

    </div>
</template>


<style scope>

.container {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    width: 100%;
    align-items: stretch;
    gap: 1rem;
}

.left {
    width: 100%;
    text-align: right;
}

.middle {
    justify-self: center;
}

.right {
    width: 100%;
    text-align: left;
}


</style>


