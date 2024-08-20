<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>


<template>
    <div class="test" style="border: 2px solid blue">
        <nav>
            <RouterLink class="router-button" to="/">Home</RouterLink>
            <RouterLink class="router-button" to="/about">About</RouterLink>
        </nav>

    </div>



</template>

<style>


.router-button{
    background-color: rgb(212, 28, 212);
    margin: 5px;
}

.button-container{
    margin: 5px;
}

.test{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>


