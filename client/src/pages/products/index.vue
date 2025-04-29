<script setup lang="ts">
import { addToCart } from '@/models/cart'
import { type DataListEnvelope } from '@/models/dataEnvelopes'
import { getAll, type Product } from '@/models/products'
import { ref } from 'vue'

const products = ref({} as DataListEnvelope<Product>)

getAll().then((response) => {
  products.value = response
})

function doAddToCart(product: Product) {
  addToCart(product)
}

interface Rateable {
  product_reviews: {
    average_rating: number
  }
}
</script>

<template>
  <div class="has-text-black">
    <h1 class="title has-text-black">Products</h1>
    <div class="shelf">
      <div class="product" v-for="p in products.items" :key="p.id">
        <div class="product-image">
          <RouterLink :to="`/products/${p.id}`">
            <img :src="p.thumbnail" alt="product image" />
          </RouterLink>
        </div>
        <div class="product-info">
          <b-rate
            v-model="(p as any as Rateable).product_reviews.average_rating"
            disabled
            show-score
          ></b-rate>
          <h2>{{ p.title }}</h2>
          <p>{{ p.description }}</p>
          <span class="price">${{ p.price }}</span>
          <button class="button is-success" @click="doAddToCart(p)">Add to cart</button>
        </div>
      </div>
      <!-- {{ p }} if you do this with an object you can quickly view the json -->
    </div>
  </div>
</template>

<style scoped>
.rate {
  float: right;
}
.shelf {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.shelf .product {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.shelf .product:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.product-image {
  text-align: center;
  margin-bottom: 1rem;
}

.product-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-info h2 {
  margin-top: 0;
  font-size: 1.2rem;
}

.price {
  color: crimson;
  font-weight: bold;
  font-size: 1.5em;
  margin: 0.75rem 0;
}

.button.is-success {
  align-self: flex-end;
  margin-top: auto;
}
</style>
