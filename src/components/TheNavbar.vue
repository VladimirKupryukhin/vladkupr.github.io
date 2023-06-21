
<script setup>
    import TerminalButton from './button/TerminalButton.vue'


</script>


<template>
    <div class="setup-navigation-bar" style="borsder: 5px solid RED">

        <TerminalButton class="button-margin" fontSize="30px" linkMessage="home" >
            <template #text>
                Home
            </template>
        </TerminalButton>

        <TerminalButton class="button-margin" fontSize="30px" linkMessage="projects" >
            <template #text>
                Projects
            </template>
        </TerminalButton>




    </div>



</template>

<style>
    @import '../assets/css/navigation_bar.css';
</style>