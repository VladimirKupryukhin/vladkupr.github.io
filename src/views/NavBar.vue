<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>


<template>
    <div class="test" style="border: 2px solid bluse">
        <nav>
            <RouterLink class="router-button" to="/"><b>Home</b></RouterLink>
            <RouterLink class="router-button" to="/about"><b>About</b></RouterLink>
            <RouterLink class="router-button" to="/projects"><b>Projects</b></RouterLink>
        </nav>

    </div>



</template>

<style>


.router-button{
    font-family: Cascadia Code;
    margin: 5px;
    font-size: x-large;
    
    text-decoration: none;
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

nav a.router-link-exact-active {
  color: rgb(49,52,60);
  background-color: rgb(231, 231, 231);
}

nav a {
    color: rgb(231, 231, 231);;
    padding: 0 1rem;
}


</style>


