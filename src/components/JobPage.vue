<script lang="ts" setup>
import { useRoute } from '@kitbag/router';

const route = useRoute('jobs.job')

// route.update
</script>

<template>
  <div class="job-page">
    <h1>job-page {{ route.params.jobId }}</h1>
  </div>
</template>

<style>
</style>