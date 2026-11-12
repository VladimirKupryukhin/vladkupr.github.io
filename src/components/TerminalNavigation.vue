<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { ref, useTemplateRef, onMounted, reactive, watch } from "vue"
import CommandInput from "./CommandInput.vue"
// import RouterDef from "../router/index.ts"

var route = useRoute()
var router = useRouter()

const myitems = ref([
    "projects", "/", "/profexp/stryker"
])

const pwdlist = ref([])

const lsList = ref ([])

const itemRefs = useTemplateRef("routerLinkLSList")
const pwdListRef = useTemplateRef("routerLinkPWDList")


// onMounted(()=> console.log(itemRefs.value))

watch(() => route.path, (newPath) => {
    console.log('Updated path:', newPath)
    updatePWDandLS()
    
})

function updatePWDandLS(){
    var allPaths = router.getRoutes()

    const currentPathObj = allPaths.find(item => item.path === route.path)

    console.log(currentPathObj)

    // Clear list and rebuild it
    pwdlist.value = []
    var splitPath = currentPathObj.path.split("/")

    var currentPath = "/"

    if (splitPath[1] == "")
    {
        splitPath = ["/"]
    }
    else
    {
        splitPath[0] = "/"
    }


    
    console.log(splitPath)

    // Add home always
    var currentPathObject = allPaths.find(item => item.path === splitPath[0])
    console.log(currentPathObject)
    pwdlist.value.push(currentPathObject)


    for (let index = 1; index < splitPath.length; index++){
        currentPath += splitPath[index]
        console.log(currentPath)

        var currentPathObject = allPaths.find(item => item.path === currentPath)
        
        console.log(currentPathObject)


        pwdlist.value.push(currentPathObject)

        currentPath += "/"

    }



    // Clear list and rebuild it
    lsList.value = []

    for (let childIndex = 0; childIndex < currentPathObj.children.length; childIndex++){
        // console.log(currentPathObj.children[childIndex].name)
        lsList.value.push(currentPathObj.children[childIndex])
    }



}

onMounted(async () =>{
    await router.isReady()
    updatePWDandLS()
})

// onMounted(() => updatePWDandLS())
</script>

<template>
    <div class="div-vertical">
        <CommandInput command="pwd"/>
        <div>
            <RouterLink v-for="item in pwdlist" ref="routerLinkPWDList" class="navbar-master sw-text" :to="item.path">{{ item.name }}</RouterLink>
        </div>
        <CommandInput command="ls"/>
        <div>
            <RouterLink v-for="item in lsList" ref="routerLinkLSList" class="navbar-master sw-text" :to="item.path">{{ item.name }}</RouterLink>
        </div>
    </div>
</template>
