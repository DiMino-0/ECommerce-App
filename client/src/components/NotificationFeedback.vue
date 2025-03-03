<script setup lang="ts">
import { ref } from 'vue'
const notifications = ref([
  { message: "Your friends' have posted new activities, check them out!", type: 'success' },
  { message: 'Failed to submit form, retry with correct data!', type: 'warning' },
  { message: 'You have a new message, click friends to view!', type: 'info' },
  { message: 'Connection Lost! Attempting to reconnect...', type: 'danger' },
])

function removeNotification(index: number) {
  notifications.value.splice(index, 1)
}
</script>

<template>
  <div class="container">
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="notification"
      :class="`is-${notification.type}`"
    >
      <div>{{ notification.message }}</div>
      <button v-on:click="removeNotification(index)" class="delete has-background-grey"></button>
    </div>
  </div>
</template>

<style scoped></style>
