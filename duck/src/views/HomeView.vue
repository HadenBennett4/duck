<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

  <main>
    <header>
      <nav>
        <router-link :to="{hash: '#home'}">Home</router-link>
        <router-link :to="{hash: '#about'}">About</router-link>
      </nav>
  </header>
    This is the home page
  </main>
</template>

<style scoped>
main{
  width: 100%;
  background-color: aqua;
  min-height: 100vh;
}
</style>
