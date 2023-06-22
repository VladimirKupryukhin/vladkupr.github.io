<script>
    export default{
        props: {
            linkMessage: String,
            fontSize: String
        }
    }


</script>


<template>
    <div class="container-bg text-color terminal-font">
        <a v-bind:href="linkMessage" class="hyperlink">

            <slot  name="text"></slot>
        
        </a>


    </div>

</template>


<style scoped>
    @import '../../assets/css/terminal_button.css';
    @import '../../assets/css/terminal_text.css';


    .terminal-font{
        font-size: v-bind(fontSize) !important
    }
</style>