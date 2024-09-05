<script setup>


</script>

<template>
    <div class="flex-vertical terminal-text">
        <div>vlad@myWebsite:~/projects$ cat uw_dubhacks_2024_hackathon</div>
        <div class="flex-vertical flex-center">
            <div class="flex-horizontal flex-center text-margin section-split">
                Together with three other students from UW Seattle, we created a system to send messages over Bluetooth to a browser. A Raspberry Pi Pico W was used as it has wireless capabilities. It was quite stressful trying to get Bluetooth to work within the 48 hours we had when none of us knew how Bluetooth worked! It was a stressful hackathon, but it was indeed fun!
            </div>
            <div class="flex-horizontal flex-center">
                <img class="site-img section-split my-dashed-border" src="../assets/images/dubhacks_site.jpg"/>
                <img class="breadboard-img section-split my-dashed-border" src="../assets/images/dubhacks_breadboard.jpg"/>
            </div>
        </div>
    </div>

</template>

<style>
@import '../assets/main.css';

.site-img{
    height: 30em;
}

.breadboard-img{
    height: 30em;
}

.text-margin{
    margin-left: 20%;
    margin-right: 20%;
}
</style>