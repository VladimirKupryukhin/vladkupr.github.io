<script setup>


</script>

<template>
    <div class="flex-vertical terminal-text">
        <div>
            vlad@myWebsite:~/projects$ cat sun_solar_panel_tracker.sh
        </div>

        <div class="flex-horizontal flex-center section-split" id="content">
            <div class="my-dashed-border flex-vertical section-split">
                <div class="section-split">
                    This was for BEE425 Microprocessor System Design in which we were tasked to build a project that utilized a microcontroller to take input, process it, and create an output. My partner and me decided to create a solar panel tracker utilizing sixteen photoresistors, a 16-1 multiplexor, a Raspberry Pi Pico MCU, and two small servo motors. 
                    <br/>
                    <br/>
                    I created the CAD and the electronic schematics while my partner created the PCB. Together, we wrote the code that interfaces with the hardware and the algorithm that follows the light. 
                </div>
                <div class="flex-horizontal flex-center section-split">
                    <img class="cad-img my-dashed-border" src="../assets/images/solar_panel_cad.png">
                </div>
            </div>
            <div class="flex-vertical my-dashed-border section-split">
                <div class="section-split">
                    Below is the final product of our efforts. An important aspect that we learned was that a) mechanical engineering is hard, b) we did not account for the wiring from the photoresistors to the PCB. Important lessons learned! Our lab professor was Joe Decuir, and he enjoyed our attempts at creating such a project.
                </div>
                <div class="flex-horizontal flex-center section-split">
                    <img class="real-life-img my-dashed-border" src="../assets/images/solar_panel_small.png"/>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
@import '../assets/main.css';

.flex-center{
  justify-content: center;
}

.real-life-img{
    width: 50em;
}

.cad-img{
    width: 35em;
}




</style>