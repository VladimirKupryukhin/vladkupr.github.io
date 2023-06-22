<script setup>
    import TerminalText from './text/TerminalText.vue'
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

        <div>
            <TerminalText fontSize="30px">
                <template #text>
                    Name: Vladimir Kupryukhin
                    <br/>
                    Education: Computer Engineering Student at the University of Washington Bothell
                    <br/>
                    Phone: 206-886-7661
                    <br/>
                    Email: vladimirkupryukhin@gmail.com
                    <br/>
                    Skills
                </template>
            </TerminalText>
        </div>


    </div>

</template>

<style>
    @import '../assets/css/whoami.css';
</style>
