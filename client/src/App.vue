<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import NotificationFeedback from './components/NotificationFeedback.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="container body-container">
    <NotificationFeedback />
    <RouterView />
  </div>
</template>

<style>
body {
  background-color: antiquewhite;
}
.body-container {
  background-color: white;
  margin-top: 20px;
  height: 100vh;
  padding: 1rem;
}
</style>
