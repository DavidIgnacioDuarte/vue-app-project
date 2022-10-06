<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <header></header>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/axios-use">Weather Card</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/tabla">Ver Tabla</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <body>
    <div id="contenido">
      <RouterView></RouterView>
    </div>
  </body>
</template>
<style>
.contenido {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
}
</style>


