<script setup>


</script>

<template>
    <div class="terminal-text flex-vertical">
        <div>vlad@myWebsite:~/projects$ cat custom_i2c_implementation</div>
        <div class="flex-horizontal  flex-center section-split">
            <div class="flex-vertical section-split my-dashed-border">
                <div class="section-split">In order to learn how I2C works is to implement it from scratch! I utilized a Raspberry Pi Pico in order to control the clock and data pins in order to send and receive data from an MPU6000 gyroscope. Below is my graph paper that I used to check if the oscilloscope capture matched what I expected. </div>
                <div class="flex-vertical">
                    <div class="flex-horizontal flex-center"><img class="graph-img my-dashed-border section-split" src="../assets/images/i2c_graph.jpg"/></div>
                    <div class="flex-horizontal flex-center"><img class="mpu6000-img my-dashed-border section-split" src="../assets/images/mpu6000.jpg"/></div>
                </div>
            </div>

            <div class="flex-vertical section-split my-dashed-border">
                <div class="section-split">
                    Below is a sample from the code that is responsible for setting up the MPU6000. I had to go through a number of different datasheets in order to understand what registers to set in order to get the gyroscope to work. There was a lot of bit manipulation!
                </div>

                <div>
                    
                </div>

                <div class="section-split flex-horizontal flex-center">
                    <img class="my-dashed-border code-img" src="../assets/images/i2c_code.png"/>
                </div>

                <div class=" section-split flex-horizontal flex-center">
                    <img class="my-dashed-border datasheet-img" src="../assets/images/mpu6000_register_datasheet.png"/>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
@import '../assets/main.css';


.graph-img{
    height: 20em;
}

.code-img{
    height: 20em;
}

.datasheet-img{
    height: 15em;
}

.mpu6000-img{
    height: 15em;
    width: 15em;
}

</style>