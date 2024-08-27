<script lang="ts" setup>
import { activeUser } from '@/services/activeUser';
import { useRouter } from '@kitbag/router';

const router = useRouter()

async function attemptLogin(): Promise<void> {
  activeUser.value = {id: 42}
  
  router.refresh()
}
</script>

<template>
  <div class="login-page">
    <h1>login-page</h1>

    <form @submit.prevent="attemptLogin">
      <label for="email">Email</label>
      <input type="text" placeholder="Email" name="email" required autocomplete="off">

      <label for="password">Password</label>
      <input type="password" placeholder="Password" name="password" required>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style>
</style>