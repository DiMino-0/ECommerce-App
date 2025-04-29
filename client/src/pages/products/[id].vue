<script setup lang="ts">
import { getOne, type ProductReview, type Product } from '@/models/products'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { refSession } from '@/models/session'
import type { User } from '@/models/users'

dayjs.extend(relativeTime)

const route = useRoute('/products/[id]')
const product = ref<Product>()

const session = refSession()
// watch(session.value.user, (user: User | null) => {
//   new_review.value?.reviewer ? = user;
// })

async function submitReview() {
  if (!session.value.user) {
    return
  }
  // const review = api('reviews', {
  //   method: 'POST',
  //   body: JSON.stringify(new_review),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
}
const new_review = ref<Partial<ProductReview>>({
  id: 0,
  rating: 0,
})

getOne(route.params.id).then((response) => {
  product.value = response
})

//example of functional programming, use reduce to get a count, sum, avg. To get one value from a list
const avg_rating = computed(
  () =>
    product.value?.reviews?.reduce((acc, review) => acc + (review?.rating ?? 0), 0) ??
    0 / (product.value?.reviews?.length ?? 0),
)
</script>

<template>
  <div>
    <div class="product section has-text-black" v-if="product">
      <div class="product-images">
        <img v-for="i in product.images" :src="i" alt="product image" />
      </div>
      <div class="product-info">
        <b-rate v-model="avg_rating" disabled show-score></b-rate>
        <h1 class="title">
          {{ product.title }}
        </h1>
        <h2 class="subtitle">
          {{ product.category }} - {{ product.brand }} - {{ product.tags?.join(' / ') }}
        </h2>

        <p>{{ product.description }}</p>
        <span class="price">${{ product.price }}</span>
        <button class="button is-success">Add to cart</button>

        <div>
          Reviews:
          <ul>
            <li class="card" v-for="review in product.reviews" :key="review.id">
              <div class="card-content">
                <img :src="review.reviewer?.image" alt="reviewer avatar" class="avatar" />
                <strong>{{ review.reviewer?.firstName }} {{ review.reviewer?.lastName }}</strong> -
                {{ review.rating }} stars
                <b-rate v-model="review.rating" disabled show-score></b-rate>
                <p>{{ review.comment }}</p>
                <i>
                  <!-- 4/28 currently date is displayed with the time created pulled from db, updating to more modern format using dayjs ex: 5 months ago -->
                  {{ dayjs(review.date).fromNow() }}
                </i>
              </div>
            </li>
          </ul>
          <form class="card" v-if="session.user" @submit.prevent="submitReview">
            <div class="card-content">
              <label class="label">Review: </label>
              <b-rate v-model="avg_rating" show-score></b-rate>
              <div class="field">
                <img :src="session.user.image" alt="user avatar" class="avatar" />
                <strong>{{ session.user.firstName }} {{ session.user.lastName }}</strong>
                <div class="control">
                  <textarea class="textarea" placeholder="Leave your rating here!"></textarea>
                </div>
                <!-- submit button -->
                <div class="control">
                  <button class="button">Submit</button>
                </div>
              </div>
            </div>
          </form>
          <div v-else>
            <p>Please login to leave a review</p>
            <router-link to="/login" class="button">Login</router-link>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="section">
      <h1 class="title">Loading...</h1>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  margin-bottom: 0.5em;
}

.rate {
  float: right;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 5%;
  margin-right: 1em;
  float: left;
}

.product {
  display: flex;
}

.product-images {
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  justify-content: space-between;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: palevioletred;
  display: block;
  margin: 1em;
}
</style>
