<script setup lang="ts">
import { useNow } from '@vueuse/core'

const { now, pause, resume } = useNow({ controls: true })
</script>
<template>
  <div class="about">
    <h1 class="title has-text-black is-1">This is the About page!</h1>
    <p class="subtitle has-text-black is-3">Current time: {{ now }}</p>
    <button class="button" v-on:click="pause">Pause</button>
    <button class="button" v-on:click="resume">Resume</button>
  </div>
</template>

<style lang="css" scoped></style>
