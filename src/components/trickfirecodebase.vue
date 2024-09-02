<script setup>


</script>

<template>
    <div class="flex-vertical terminal-text">
        <div class="terminal-text">
            vlad@myWebsite:~/projects$ cat trickfire_codebase.txt
        </div>

        <div class="flex-horizontal flex-center section-split">
            <div class="flex-vertical my-dashed-border section-split">
                
                <div class="flex-horizontal" id="main_content">
                    <div class="flex-horizontal flex-center" id="top_text_1">
                        <div class="section-split">
                            With the cooperative suggestions of others, I designed the TrickFire Robotics codebase that operates on the physical rover. The main idea consists of organizing the code into three sections: low-level code that talks to the hardware, the high-level code that implements subsystems, and the interface that connects these two together. 
                            <br/>
                            <br/>
                            This big-picture design allows a great amount of decoupling, especially with the additional decoupling that comes from the Robot Operating System (ROS). Modifying or adding hardware is simple, as it does not break high-level code as long as the interface’s public functionality is not changed. 
                        </div>
                        <img class="gif-size my-dashed-border" src="../assets/images/arm_gif.gif"/>
                    </div>
                </div>
        
                <div class="flex-horizontal flex-center section-split">
                    <img class="my-dashed-border funnel-size" src="../assets/images/codefunnel.png" />
                </div>
            </div>

            <div class="flex-vertical my-dashed-border section-split">
                <div class="section-split">I have written code that: interfaces with the Moteus motor controllers, sending telemetry data over the ROS network via a websocket, set up a Docker environment to execute rover code, wrote arm code, creating utility functions to ease the difficulty of programming the rover.</div>
                <div class="flex-horizontal flex-center section-split">
                    <img class="my-dashed-border detailed-code-size" src="../assets/images/robotCodeOverview.png">
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

.section-split{
  margin: 10px;
}

.flex-vertical {
  display: flex;
  flex-direction: column;
}

.flex-horizontal {
  display: flex;
}

.gif-size{
    width: 20em;
    height: auto;
}

.funnel-size{
    width: 50em;
}

.detailed-code-size{
    width: 50em;
}

</style>