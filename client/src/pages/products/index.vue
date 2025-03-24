<script setup lang="ts">
import { refCart, addToCart } from '@/models/cart'
import { getAll, type Product } from '@/models/products'

const products = getAll()

const cart = refCart()
</script>

<template>
  <div>
    <h1 class="title">Products</h1>
    <div class="shelf">
      <div class="product" v-for="product in products.items" :key="product.id">
        <div class="product-image">
          <RouterLink :to="`/products/${product.id}`">
            <img :src="product.thumbnail" alt="product image" />
          </RouterLink>
        </div>
        <div class="product-info">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <span class="price">${{ product.price }}</span>
          <button class="button is-success" @click="addToCart(product)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shelf {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.shelf .product {
  width: 30%;
  margin: 1em;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

.price {
  color: crimson;
  font-weight: bold;
  font-size: 1.5em;
  display: block;
  margin: 1em;
}

.button.is-success {
  float: right;
}
</style>
