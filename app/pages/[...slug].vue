<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <HeaderNav />
  <main id="main" class="container">
    <ContentRenderer v-if="page" :value="page" />
  </main>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}
</script>
