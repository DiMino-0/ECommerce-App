<script setup lang="ts">
import { ref } from 'vue'

const showBurger = ref(false)

const props = defineProps<{
  isShoppingCartOpen?: boolean
}>()

const events = defineEmits<{
  modelUpdate: [Boolean]
}>()
</script>

<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger has-text-black"
          aria-label="menu"
          aria-expanded="false"
          v-bind:class="{ 'is-active': showBurger.valueOf() }"
          v-on:click="showBurger = !showBurger.valueOf()"
          data-target="navbar-items"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbar-items"
        class="navbar-menu"
        v-bind:class="{ 'is-active': showBurger.valueOf() }"
      >
        <div class="navbar-start">
          <RouterLink to="/" class="navbar-item">Home</RouterLink>

          <RouterLink to="/about" class="navbar-item">About</RouterLink>

          <RouterLink to="/products" class="navbar-item">Products</RouterLink>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <button
              class="button"
              :class="{ 'is-active': props.isShoppingCartOpen }"
              v-on:click="events('modelUpdate', !props.isShoppingCartOpen)"
            >
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
          <div class="navbar-item"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
