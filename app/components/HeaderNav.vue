<template>
  <header class="container">
    <a class="skip-link" href="#main">Skip to main content</a>
    <div class="container-content">
      <NuxtLink to="/" aria-label="Home">
        <LogoSvg />
      </NuxtLink>
      <nav class="header-nav" aria-label="Main Navigation">
        <ul role="menu">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li>About</li>
          <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/freelance">Freelance</NuxtLink></li>
          <li><NuxtLink to="/labs">Labs</NuxtLink></li>
          <li>Contact</li>
        </ul>
      </nav>
      <ThemeToggle />
      <!-- Hamburger Icon -->
      <button aria-label="Toggle Menu Drawer" @click="toggleDrawer">
        <Menu key="menu" class="icon" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu } from 'lucide-vue-next'

function toggleDrawer(): void {
  console.log('Toggle Drawer')
}
</script>

<style scoped lang="scss">
// TODO: fix this import
// @use 'abstracts';

header {
  background-color: var(--background-color);
  position: sticky;
  top: 0;
  width: 100%;
}

ul {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.skip-link {
  position: absolute;
  left: -999px;
}
.skip-link:focus {
  left: 1rem;
  top: 1rem;
}

.container-content {
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.header-nav {
  // @include respond(md) {
  //   display: flex;
  // }
}
</style>
