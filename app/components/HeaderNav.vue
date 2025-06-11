<template>
  <header>
    <a class="skip-link" href="#main">Skip to main content</a>
    Logo
    <nav aria-label="Main Navigation">
      <ul role="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <ThemeToggle />
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
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
</style>
