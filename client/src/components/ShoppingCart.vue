<script setup lang="ts">
import { refCart } from '@/models/cart'

const cart = refCart()
</script>

<template>
  <div class="cart has-text-black container">
    <h1 class="title is-2 has-text-black">Shopping Cart</h1>
    <h2 class="title is-4 has-text-black">Items in Cart: {{ cart.length }}</h2>
    <ul>
      <li v-for="item in cart" :key="item.product.id">{{ item.product.title }} - {{ item.product.price }}
        <img :src="item.product.thumbnail" :alt="item.product.title">
      </img>
        <span>
          x ${{ item.product.price }}
        </span>
        <span>
          = ${{ item.product.price * item.quantity }}
        </span>
      </li>
    </ul>
    <h2 class="title is-4 has-text-black">
      Total: ${{ cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0) }}
    </h2>
  </div>
</template>

<style scoped>
.cart {
  margin: 1rem;
}
</style>
