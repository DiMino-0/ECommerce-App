<script setup lang="ts"></script>

<template>
  <main>
    <!-- Feedback Form -->
    <h1>Feedback Form</h1>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label for="feedback">Feedback:</label>
      <textarea id="feedback" name="feedback" required></textarea>

      <button type="submit">Submit</button>
    </form>
  </main>
</template>

<style lang="css" scoped>
form {
  color: tomato;
}
</style>
