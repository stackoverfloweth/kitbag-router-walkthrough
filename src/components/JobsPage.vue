<script lang="ts" setup>
import { useRoute } from '@kitbag/router';
import { computed } from 'vue';

const route = useRoute('jobs')

const sort = computed(() => route.params.sort)
</script>

<template>
  <div class="jobs-page">
    <h1>jobs-page</h1>

    <template v-for="id in 10" :key="id">
      <router-link :to="resolve => resolve('jobs.job', {jobId: id})">Job #{{ id }}</router-link>
    </template>

    <router-view />
  </div>
</template>

<style>
.jobs-page {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>