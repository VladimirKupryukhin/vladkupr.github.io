<script>
    export default{
        props: {
            fontSize: String
        }
    }
</script>



<template>
    <div class="terminal-font">
        <slot name="text"></slot>
    </div>


</template>



<style>
    @import '../../assets/css/terminal_text.css';

    .terminal-font{
        font-size: v-bind(fontSize) !important;
    }



</style>

