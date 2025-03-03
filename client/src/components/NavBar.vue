<script setup lang="ts">
import { ref } from 'vue'

const showBurger = ref(false)
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
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <RouterLink to="/login" class="button is-primary">
              <strong>Login</strong>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
