<script lang="ts" setup>
import { useRouter } from '@kitbag/router';

const router = useRouter()

async function createUser(event: Event): Promise<void> {
  await fetch('api/users', {
    method: 'POST',
    body: new FormData(event.target as HTMLFormElement)
  })

  router.push('profile')
}
</script>

<template>
  <div class="sign-up-page">
    <h1>sign-up-page</h1>

    <form @submit.prevent="createUser">
      <label for="email">Email</label>
      <input type="text" placeholder="Email" name="email" required autocomplete="off">

      <label for="password">Password</label>
      <input type="password" placeholder="Password" name="password" required>

      <button type="submit">Create User</button>
    </form>
  </div>
</template>

<style>
</style>