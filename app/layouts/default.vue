<template>
  <div class="layout-container">
    <HeaderNav />
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
@use 'styles/helpers' as *;

.layout-container {
  @include respond(xl) {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
  }
}

.main-content {
  padding-top: 1rem;
  height: 100%;

  @include respond(xl) {
    padding-top: 2.5rem;
  }
}
</style>
