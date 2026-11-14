<script setup lang="ts">
import AsciiBorder from "../../components/AsciiBorder.vue"
import GenericMarkdownRender from "@/components/GenericMarkdownRender.vue";
</script>


<template>
  <div class="sw-text">
    <GenericMarkdownRender markdownfilesource="/markdown/prof-experience/stryker/stryker.md" breaks="false"/>
    <div class="master-center">
      <AsciiBorder>
        <img src="../../assets/lp35.png"/>
        <p class="master-center">Image from Stryker. All rights are theirs</p>
      </AsciiBorder>
    </div>
      <GenericMarkdownRender markdownfilesource="/markdown/prof-experience/stryker/stryker_thoughts.md" breaks="false"/>
  </div>
</template>