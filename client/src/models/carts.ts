//This is an example of a singleton model
import { ref } from 'vue'

interface cartItem {
  name: string
  price: number
  quantity: number
}

const cart = ref<cartItem[]>([])

export function refCart() {
  return cart
}

const items = [
  { name: 'apple', price: 1.99 },
  { name: 'banana', price: 0.99 },
  { name: 'orange', price: 1.49 },
  { name: 'grape', price: 2.99 },
  { name: 'kiwi', price: 1.29 },
]

interface cartItem {
  name: string
  price: number
  quantity: number
}
function addToCart({ name, price }: cartItem) {
  cart.value.push({ name, price, quantity: 1 })
}
