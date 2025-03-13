/* B"H
 */
import { ref } from 'vue'

const cart = ref<any[]>([])

export function refCart() {
  return cart
}

export function addToCart({ name, price }: any) {
  cart.value.push({ name, price, quantity: 1 })
}
