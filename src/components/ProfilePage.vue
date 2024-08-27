<script lang="ts" setup>
import { activeUser } from '@/services/activeUser';

</script>

<template>
  <div class="profile-page">
    <h1>profile-page</h1>
    <h2>{{ activeUser?.id }}</h2>
  </div>
</template>

<style>
</style>