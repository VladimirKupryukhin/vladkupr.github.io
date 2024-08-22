<script setup>


</script>

<template>
    <div class="terminal-text">
        vlad@myWebsite:~/projects$ cat motherboard-like_pcb.txt
    </div>

    <div class="box">
        <div>
            some content here
        </div>
    </div>

</template>

<style>
@import '../assets/main.css';


.box {
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
}
</style>