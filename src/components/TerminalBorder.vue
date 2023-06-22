<script setup>



</script>

<script>
    export default {
        props: {
            imageUrl: String
        },
        data() {
            return {

            }
        },
        // mounted () {

        // },
        async mounted() {
            let image = new Image();

            image.onload = function () {
                console.log(`the image dimensions are ${image.width}x${image.height}`)
            };

            image.src = this.imageUrl




            setTimeout (() => {
                // const content = this.$refs.content
                // console.log("adasdasdasda\nclientHeight")
                // console.log(content.clientHeight)
                // console.log("clientWdith")
                // console.log(content.clientWidth)
                const top = this.$refs.top
                //top.textContent = "--------"

                const bottom = this.$refs.bottom
                //bottom.textContent = "--------------"

                const leftBorder = this.$refs.leftBorder
                //leftBorder.textContent = "|||"

                const rightBorder = this.$refs.rightBorder
                //rightBorder.textContent = "||||||"

                

                const content = this.$refs.content
                console.log("clientHeight")
                console.log(content.clientHeight)
                console.log("clientWdith")
                console.log(content.clientWidth)

                let horizontalLine = ""
                let verticalLine = ""

                for (let index = 0; index < content.clientWidth / 17; index++) {
                    horizontalLine += "-"
                }


                for (let index = 0; index < (content.clientHeight - 28 -4) / 35; index++) {
                    verticalLine += "|"
                }

                
                top.textContent = horizontalLine
                bottom.textContent = horizontalLine

                leftBorder.textContent = verticalLine
                rightBorder.textContent = verticalLine

            },100)

        }

    }


</script>

<template>

    <div class="border-size">
        <div ref="top" class="horizontal-shift terminal-font">
        
        </div>

        <div ref="leftContentRight" class="middle-content">
            <div ref="leftBorder" class="vertical-line terminal-font">
                
            </div>

            <div ref="content" style="border: 0px solid red" >
                <slot></slot>
            </div>

            <div ref="rightBorder" class="vertical-line terminal-font ">
                
            </div>
        </div>

        <div ref="bottom" class="horizontal-shift terminal-font border-size">
            
        </div>
    </div>


    


</template>

<style>
    @import '../assets/css/terminal_border.css';
    @import '../assets/css/terminal_text.css';
</style>