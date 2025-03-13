<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SlidingDrawer from './components/SlidingDrawer.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import NotificationList from './components/NotificationList.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="container body-container">
    <NotificationList />
    <RouterView />
  </div>

  <SlidingDrawer>
    <ShoppingCart />
  </SlidingDrawer>
</template>

<style>
body {
  background-color: aliceblue;
}

.body-container {
  background-color: white;
  height: 100vh;
  padding: 1rem;
}
</style>
