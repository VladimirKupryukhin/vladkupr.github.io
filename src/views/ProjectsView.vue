<script setup>
import TrickFireCodebase from '../components/trickfirecodebase.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main class="white-text">
    <div class="terminal-text vertical-flex">
        <div>vlad@myWebsite:~/projects$</div>
        <div>vlad@myWebsite:~/projects$ ls</div>
    </div>

    <div>
        <nav class="vertical-flex">
            <RouterLink class="blue-terminal-text ls-output" to="/projects/trickfire_codebase">trickfire_codebase.txt <-- Click Me!</RouterLink>
            <RouterLink class="green-terminal-text ls-output" to="/projects/sun_solar_tracker">sun_solar_panel_tracker.sh</RouterLink>
            <RouterLink class="terminal-text ls-output" to="/projects/motherboard_pcb">motherboard-like_pcb.txt</RouterLink>
            <RouterLink class="blue-terminal-text ls-output" to="/projects/custom_i2c">custom_i2c_implementation</RouterLink>
            <RouterLink class="terminal-text ls-output" to="/projects/uw_dubhacks_2024">uw_dubhacks_2024_hackathon</RouterLink>

        </nav>
    </div>

    <div>
        <RouterView />
    </div>

  </main>
</template>


<style>
@import '../assets/main.css';

.vertical-flex{
    display: flex;
    flex-direction: column;
}

.ls-output{
    margin-left: 10px;
    width: fit-content
}

.blue-terminal-text{
    color: lightblue;
    font-family: Cascadia Code;
    text-decoration: none;
}

.green-terminal-text{
    color: greenyellow;
    font-family: Cascadia Code;
    text-decoration: none;
}

</style>
