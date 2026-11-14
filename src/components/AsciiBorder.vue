<script setup lang="ts">
import { ref, onMounted, nextTick, useTemplateRef } from 'vue'

const slotWrapper = useTemplateRef<HTMLElement>('slotWrapper')

const dashWidthPx = 11
const pipeHeightPx = 19

const topborderText = ref('')
const heightBorderText = ref('')


onMounted(async () => {
    await nextTick()

    if (!slotWrapper.value) return

    // Wait for all images inside the slot
    const images = Array.from(
        slotWrapper.value.querySelectorAll('img')
    )

    await Promise.all(
        images.map(img => img.decode().catch(() => {}))
    )

    // Wait for browser layout
    await new Promise(resolve =>
        requestAnimationFrame(resolve)
    )

    const rect = slotWrapper.value.getBoundingClientRect()

    var elementWidthPx = rect.width
    var elementHeightPx = rect.height

    const dashQuantity = Math.floor(elementWidthPx / dashWidthPx)
    topborderText.value = "+" + '-'.repeat(dashQuantity) + "+"

    const pipeQuantity = Math.floor(elementHeightPx / pipeHeightPx)
    heightBorderText.value = '|\n'.repeat(pipeQuantity)
})
</script>


<template>
    <div class="ddebug-div-border master-container">
        <div class="master-center">
            <pre ref="topborder">{{ topborderText }}</pre>
        </div>

        <div ref="middle" class="horizontal-div">
            <div class="master-center side-middle-align">
                <pre ref="leftvertical">{{ heightBorderText }}</pre>
            </div>
            <div ref="slotWrapper">
                <slot></slot>
            </div>
            <div class="master-center side-middle-align">
                <pre  ref="rightvertical">{{ heightBorderText }}</pre>
            </div>
        </div>

        <div class="master-center">
            <pre ref="bottomborder">{{ topborderText }}</pre>
        </div>


    </div>
</template>



<style scoped>
.master-container {
    display: inline-block;
    width: fit-content;
    height: fit-content;
}

.side-middle-align{
    align-items: center;
}

pre {
    margin: 0;
    padding: 0;
    line-height: 1;
    font-family: monospace;
    white-space: pre;
}

</style>