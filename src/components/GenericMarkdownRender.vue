<script setup lang="ts">
import { full as emoji } from 'markdown-it-emoji'
import MarkdownIt from "markdown-it"

import { ref, useTemplateRef, onMounted, watch } from "vue"

// So this property assumes that all markdown is under the /markdown folder
// This means that any local relative files paths are relative to the place 
// where GenericMarkdownRender.vue live sin
var myproperties = defineProps<{
    markdownfilesource: string,
    breaks: string
}>()


var relativeFilePath = ".." + myproperties.markdownfilesource
var shouldBreak = false

if (myproperties.breaks == "true"){
    shouldBreak = true
}

async function getMarkdown(filePath: string): Promise<string> {
    const response = await fetch(filePath);

    if (!response.ok) {
        throw new Error(`Failed to load Markdown: ${filePath}`);
    }

    return await response.text();
}

var data = ""

var htmlsource = ref(data)

const markdown = new MarkdownIt({
    html: true,
    breaks: shouldBreak
}).use(emoji)
    // .use(MarkdownItAbbr)
    // .use(MarkdownItAnchor)
    // .use(MarkdownItFootnote)
    // .use(MarkdownItHighlightjs)
    // .use(MarkdownItSub)
    // .use(MarkdownItSup)
    // .use(MarkdownItTasklists)
    // .use(MarkdownItTOC);

async function updateMarkdown(){
    data = await getMarkdown(relativeFilePath)
    // console.log(data)
    htmlsource.value = data
}

onMounted(async () =>{
    await updateMarkdown()
})

// THis allows us to update the variable dynamically
watch(() => myproperties.markdownfilesource, async (newData, oldData) => {
    // myproperties.markdownfilesource = newData
    relativeFilePath = ".." + myproperties.markdownfilesource 
    await updateMarkdown()
})

</script>


<template>
    <div v-html="markdown.render(htmlsource)" ref="htmlmarkdownref"></div>
</template>



