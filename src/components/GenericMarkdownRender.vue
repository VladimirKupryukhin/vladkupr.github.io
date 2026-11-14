<script setup lang="ts">
import { full as emoji } from 'markdown-it-emoji'
import MarkdownIt from "markdown-it"

import { ref, useTemplateRef, onMounted } from "vue"

// So this property assumes that all markdown is under the /markdown folder
// This means that any local relative files paths are relative to the place 
// where GenericMarkdownRender.vue live sin
const myproperties = defineProps<{
    markdownfilesource: string,
    breaks: string
}>()


const relativeFilePath = ".." + myproperties.markdownfilesource
var shouldBreak = false

if (myproperties.breaks == "true"){
    shouldBreak = true
}

// console.log(relativeFilePath)

// const markdownfilecontent = import.meta.glob("../markdown/homepage/testmarkdown.md",{
//     query: '?raw',
//     import: 'default',
//     eager: true
// });

console.log(relativeFilePath)

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

onMounted(async () =>{
    data = await getMarkdown(relativeFilePath)
    console.log(data)
    htmlsource.value = data
})

</script>


<template>
    <div v-html="markdown.render(htmlsource)" ref="htmlmarkdownref"></div>
</template>



