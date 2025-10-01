<template>
  <header v-on-click-outside="() => (isOpen = false)" class="container">
    <a class="skip-link" href="#main">Skip to main content</a>
    <div class="container-content">
      <NuxtLink to="/" aria-label="Home">
        <LogoSvg />
      </NuxtLink>
      <nav
        class="header-nav"
        :class="{ 'header-nav--open': isOpen }"
        aria-label="Main Navigation"
      >
        <ul role="menu" class="header-nav__list">
          <li><NuxtLink to="/" class="header-nav__item">Home</NuxtLink></li>
          <li>
            <button class="header-nav__item">About</button>
          </li>
          <li>
            <NuxtLink to="/portfolio" class="header-nav__item"
              >Portfolio</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/freelance" class="header-nav__item"
              >Freelance</NuxtLink
            >
          </li>
          <li><NuxtLink to="/labs" class="header-nav__item">Labs</NuxtLink></li>
          <li>
            <button class="header-nav__item">Contact</button>
          </li>
        </ul>
      </nav>
      <div class="theme-toggle-container">
        <ThemeToggle />
      </div>
      <!-- Hamburger Icon -->
      <button
        aria-label="Toggle Menu Drawer"
        class="header-nav__toggle"
        @click="toggle"
      >
        <Menu v-if="!isOpen" key="menu" class="icon" />
        <X v-if="isOpen" key="x" class="icon" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { vOnClickOutside } from '@vueuse/components'

const { isOpen, toggle } = useMobileNav()

function handleResize(): void {
  if (window.innerWidth >= 1024) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">
@use 'styles/helpers' as *;

header {
  background-color: var(--background-color);
  position: sticky;
  top: 0;
  width: 100%;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: relative;

  @include respond(lg) {
    border-bottom: 1px solid var(--border-color);
  }
}

.header-nav {
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: var(--background-color);
  top: 100%;
  width: 100%;
  height: 0px;
  overflow: hidden;
  transition: height 0.3s ease-in-out;

  @include respond(lg) {
    position: relative;
    border-bottom: none;
    height: auto;
  }

  &--open {
    height: 300px;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;

    @include respond(lg) {
      flex-direction: row;
    }
  }

  &__item {
    color: var(--text-color);
    display: block;
    padding: 0.5rem;
    text-decoration: none;
    font-size: 1.25rem;

    &:hover,
    &:focus {
      color: var(--primary-color);
      text-decoration: underline;
    }
  }

  &__toggle {
    @include respond(lg) {
      display: none;
    }
  }
}

.theme-toggle-container {
  position: fixed;
  padding: 0.25rem;
  right: 1rem;
  bottom: 1rem;
  z-index: 10;
  border-radius: 100%;
  background-color: var(--background-color);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.2);

  @include respond(lg) {
    position: unset;
    box-shadow: none;
  }
}
</style>
