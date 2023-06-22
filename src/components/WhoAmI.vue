<script setup>
    import TerminalText from './text/TerminalText.vue'
    import TerminalBorder from './TerminalBorder.vue'
</script>

<template>








    <div id="whoami-content" class="terminal-background">

        <div class="command">
            <TerminalText fontSize="30px">
                <template #text>
                    ~/$&nbsp;
                </template>
            </TerminalText>

            <TerminalText fontSize="30px">
                <template #text>
                    whoami
                </template>
            </TerminalText>
        </div>


        <div class="command">
            <div name="photo">
                <TerminalBorder>
                    <img src="../assets/images/vlad.png">
                </TerminalBorder>
            </div>

            <div class="photo-space">
                <TerminalText fontSize="30px">
                    <template #text>
                        Name: Vladimir Kupryukhin
                        <br/>
                        Education: Computer Engineering Student at the University of Washington Bothell
                        <br/>
                        Phone: 206-886-7661
                        <br/>
                        Email: vladimirkupryukhin@gmail.com
                    </template>
                </TerminalText>

                <TerminalText fontSize="30px" class="skills-word">
                        <template #text>
                            Programming Languages
                        </template>
                </TerminalText>

                <div class="command">
                    <TerminalBorder>
                        <div class="command">
                            <img src="../assets/images/c-plus-plus-logo.png">
                            <img src="../assets/images/java-logo.png">
                            <img src="../assets/images/python-logo.png">
                            <img src="../assets/images/git-logo.png">
                            <img src="../assets/images/linux-logo.png">
                        </div>
                    </TerminalBorder>
                 </div>


                 <TerminalText fontSize="30px" class="skills-word">
                        <template #text>
                            Frameworks/Tooling
                        </template>
                </TerminalText>

                <div class="command">
                    <TerminalBorder>
                        <div class="command">
                            <img src="../assets/images/docker-logo.png" class="image-size">
                            <img src="../assets/images/ros-logo.png" class="image-sizse">
                            <!-- <img src="../assets/images/python-logo.png"> -->
                            <!-- <img src="../assets/images/git-logo.png"> -->
                            <!-- <img src="../assets/images/ros-logo.png"> -->
                        </div>
                    </TerminalBorder>
                 </div>


            </div>



        </div>

        



        


    </div>

</template>

<style>
    @import '../assets/css/whoami.css';
</style>

