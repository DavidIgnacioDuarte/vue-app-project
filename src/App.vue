<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

</script>
<template>
  <header>
    <Navbar></Navbar>
  </header>
  <div id="contenido">
    <RouterView></RouterView>
  </div>
</template>

<style>
#contenido {
  margin: 2px;
  padding: 5px;
}

</style>



