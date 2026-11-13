<script setup lang="ts">
import MarkdownIt from "markdown-it"
import { ref, useTemplateRef } from "vue"

// So this property assumes that all markdown is under the /markdown folder
// This means that any local relative files paths are relative to the place 
// where GenericMarkdownRender.vue live sin
const myproperties = defineProps<{
    markdownfilesource: string
}>()


const relativeFilePath = ".." + myproperties.markdownfilesource

console.log(relativeFilePath)

const markdownfilecontent = import.meta.glob("../markdown/homepage/testmarkdown.md",{
    query: '?raw',
    import: 'default',
    eager: true
});

console.log(markdownfilecontent)

const actualcontent = markdownfilecontent["../markdown/homepage/testmarkdown.md"]



console.log(actualcontent)
console.log(typeof(actualcontent))

const htmlsource = ref(actualcontent)


const markdown = new MarkdownIt({
    html: true,
    breaks: true
})
    // .use(MarkdownItAbbr)
    // .use(MarkdownItAnchor)
    // .use(MarkdownItFootnote)
    // .use(MarkdownItHighlightjs)
    // .use(MarkdownItSub)
    // .use(MarkdownItSup)
    // .use(MarkdownItTasklists)
    // .use(MarkdownItTOC);

</script>


<template>
    <div v-html="markdown.render(htmlsource)" ref="htmlmarkdownref"></div>
</template>



