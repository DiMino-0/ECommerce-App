<script setup lang="ts">
import { refNotifications, removeNotification } from '@/models/notifications'
import { ref } from 'vue'

const notifications = refNotifications()
</script>

<template>
  <div>
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="notification is-light"
      :class="`is-${notification.type}`"
    >
      <button class="delete" @click="removeNotification(index)"></button>
      {{ notification.message }}
    </div>
  </div>
</template>

<style scoped></style>
