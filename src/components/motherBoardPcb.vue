<script setup>


</script>

<template>

    <div class="flex-vertical terminal-text">
        <div class="">
            vlad@myWebsite:~/projects$ cat motherboard-like_pcb.txt
        </div>
        
        <div class="flex-horizontal flex-center section-split">
            <div class="flex-vertical section-split my-dashed-border">
                <div class="section-split">
                    Together with a team of three, we created a PCB that hosts a Raspberry Pico MCU, six stepper motor controllers, six PWM ports for servo motors, three light controllers, and a 12v->5v buck converter. It is my responsibility to connect all of the logical devices together in order to program the microcontroller using bare-metal software. The MCU communicates to the main computer using USB; commands are sent to the Pico which controls the board.
                </div>
                <div class="flex-horizontal flex-center">
                    <img class="schem-img" src="../assets/images/motherboard_schematic2.png"/>
                </div>
            </div>

            <div class="flex-vertical section-split my-dashed-border">
                <div class="section-split flex-horizontal flex-center">
                    <img class="pcb-img" src="../assets/images/motherboard_pcb_traces.png"/>
                </div>
                <div class="flex-horizontal flex-center section-split">
                    <img class="pcb-img" src="../assets/images/motherboard_pcb.png"/>
                </div>
            </div>
        </div>
    </div>



</template>

<style>
@import '../assets/main.css';

.schem-img{
    height: 33em;
}

.pcb-img{
    height: 19em
}

</style>