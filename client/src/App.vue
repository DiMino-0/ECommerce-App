<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import NotificationList from './components/NotificationList.vue'
import SlidingDrawer from './components/SlidingDrawer.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import { ref } from 'vue'

const isShoppingCartOpen = ref(false)
</script>

<template>
  <header>
    <NavBar v-model:is-shopping-cart-open="isShoppingCartOpen" />
  </header>

  <div class="container body-container">
    <NotificationList />

    <RouterView />
  </div>

  <SlidingDrawer :isOpen="isShoppingCartOpen">
    <ShoppingCart />
  </SlidingDrawer>
</template>

<style>
body {
  background-color: aliceblue;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.body-container {
  background-color: white;
  flex-grow: 1;
  min-height: 100%;
  padding: 1rem;
  padding-top: 4em;
  margin-bottom: 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
