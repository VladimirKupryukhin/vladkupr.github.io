<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AsciiBorder from "../components/AsciiBorder.vue"
import GenericMarkdownRender from "@/components/GenericMarkdownRender.vue";

const emptyObject = {
    date: "1-01-0001",
    title: "Empty",
    blogmarkdown: "/blog/emptyblog.md"
}

let blogJson: Object[] = []
var currentBlogIndex = -1

// let prevBlog: Object = ref(emptyObject)
let currentBlog: Object = ref(emptyObject)
// let nextBlog: Object = ref(emptyObject)

var leftBtnDisabled = ref(true)
var rightBtnDisabled = ref(true)


onMounted(async () =>{
    var response = await fetch("/blog/bloglist.json");
    blogJson = await response.json();

    blogJson.sort((a,b) => new Date(a.date) - new Date(b.date))

    // Display the latest blog possible
    currentBlog.value = blogJson[blogJson.length - 1]
    currentBlogIndex = blogJson.length -1

    // console.log(blogJson)
    if (blogJson.length > 1){
        leftBtnDisabled.value = false
    }


})

function onPrevClick(){
    if (currentBlogIndex - 1 >= 0){
        currentBlogIndex--
        currentBlog.value = blogJson[currentBlogIndex]
        rightBtnDisabled.value = false
    }
    else{
        leftBtnDisabled.value = true
    }

    //Check if we reached the end
    if (currentBlogIndex == 0){
        leftBtnDisabled.value = true
    }

    // console.log(currentBlog)
}

function onNextClick(){
    if (currentBlogIndex + 1 <= blogJson.length - 1){
        currentBlogIndex++
        currentBlog.value = blogJson[currentBlogIndex]
        leftBtnDisabled.value = false
        rightBtnDisabled.value = false
    }
    else{
        rightBtnDisabled.value = true
    }

    //Check if we reached the end
    if (currentBlogIndex == blogJson.length - 1){
        rightBtnDisabled.value = true
    }

    // console.log(currentBlog)
}

</script>


<template>
    <div class="sw-text">
        <div ref="blog-bar" class="horizontal-div bar-center">
            <div>
                <AsciiBorder>
                    <button class="navbar-master remove-underline" @click="onPrevClick" :disabled="leftBtnDisabled"><-- PREV</Button>
                </AsciiBorder>
            </div>
            <div class="div-vertical bar-center">
                <p>{{ currentBlog.title }}</p>
                <p>{{ currentBlog.date }}</p>
            </div>
            <div>
                <AsciiBorder>
                    <button class="navbar-master remove-underline" @click="onNextClick" :disabled="rightBtnDisabled">NEXT --></Button>
                </AsciiBorder>
            </div>
    
        </div>
        <GenericMarkdownRender :markdownfilesource="currentBlog.blogmarkdown" breaks="false"/>      
    </div>
</template>


<style scoped>

.bar-center{
    /* justify-content: center;
    text-align: center; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.remove-underline{
    text-decoration: none
}


button {
    font-family: monospace;
    font-size: 16px;
    color: #00ff66;
    background: transparent;

    border: none;
    padding: 8px 16px;

    cursor: pointer;
    text-transform: uppercase;
}

button:hover {
    color: black;
    background: #1d3627;
}

button:active {
    transform: translateY(2px);
}

button:disabled {
    color: #1d3627;
    background: transparent;
    cursor:auto;
}

button:not(:disabled):hover{
    color: black;
    background: #00ff66;
    
}

</style>
