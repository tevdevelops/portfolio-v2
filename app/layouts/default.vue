<template>
  <div class="layout-container">
    <HeaderNav />
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout-container {
}

.main-content {
  padding-top: 1rem;
  height: 100%;
}
</style>
