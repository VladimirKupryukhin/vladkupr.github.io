<script setup lang="ts">
import AsciiBorder from "../../components/AsciiBorder.vue"
import GenericMarkdownRender from "@/components/GenericMarkdownRender.vue";
</script>


<template>
  <div class="sw-text">
    <div class="master-center">
      <AsciiBorder>
        <img class="image-style" src="../../assets/motherboard.jpg"/>
      </AsciiBorder>
    </div>
    <GenericMarkdownRender markdownfilesource="/markdown/projects/tfr-motherboard/tfrmb1.md" breaks="false"/>
    
    <div class="master-center">
      <AsciiBorder>
        <img class="gif-style" src="../../assets/motherboard.gif"/>
      </AsciiBorder>
      <AsciiBorder>
        <img class="gif-style" src="../../assets/motherboard_motor_spin.gif"/>
      </AsciiBorder>
    </div>
    <GenericMarkdownRender markdownfilesource="/markdown/projects/tfr-motherboard/tfrmb2.md" breaks="false"/>
  </div>
</template>


<style scope>

.image-style {
    max-width: 40em;
    height: 100%;
    object-fit: contain;
}

.gif-style {
  max-width: 20em;
    height: 100%;
    object-fit: contain;
}
</style>