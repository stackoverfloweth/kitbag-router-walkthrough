<script setup lang="ts">
</script>

<template>
  <nav class="app__nav">
    <router-link to="/">🏠</router-link>
    <router-link :to="resolve => resolve('jobs')">Jobs</router-link>
    <router-link :to="resolve => resolve('profile')">Profile</router-link>
    <router-link to="https://router.kitbag.dev">Docs</router-link>
  </nav>
  
  <RouterView /> 
</template>

<style>
.app__nav {
  display: flex;
  gap: 5px;
  align-items: center;
}
</style>