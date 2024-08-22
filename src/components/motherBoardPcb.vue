<script setup>


</script>

<template>
    <div class="terminal-text">
        vlad@myWebsite:~/projects$ cat motherboard-like_pcb.txt
    </div>

    <div class="terminal-text dashed-border" >
        <div style="margin: 5px;">
            some content here
        </div>
    </div>

</template>

<style>
@import '../assets/main.css';

.dashed-border{
    border:dashed white;
    width: fit-content;
    
}

/* https://stackoverflow.com/questions/64114273/can-i-replace-css-borders-with-ascii-style-borders*/
/*.box {
    height: fit-content;
    width: fit-content;
    border: 2px dashed red;
    margin: 0 auto;
    position: relative;

}

.box::after {
    content: "+";
    position: absolute;
    left: -6px;
    top: -13px;
    font-weight: bold;
    font-size: 18px;
    color: red;
}

.box::before {
    content: "+";
    position: absolute;
    right: -6px;
    top: -13px;
    font-weight: bold;
    font-size: 18px;
    color: red;
}

.box .inner::after {
    content: "+";
    position: absolute;
    left: -6px;
    bottom: -11px;
    font-weight: bold;
    font-size: 18px;
    color: red;
}

.box .inner::before {
    content: "+";
    position: absolute;
    right: -6px;
    bottom: -11px;
    font-weight: bold;
    font-size: 18px;
    color: red;
}*/
</style>