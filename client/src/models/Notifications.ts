import { ref } from 'vue'

const notifications = ref<Notification[]>([])

export interface Notification {
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

export function addNotification(notification: Notification) {
  notifications.value.push(notification)
}

export function removeNotification(index: number) {
  notifications.value.splice(index, 1)
}

export const refNotifications = () => notifications
