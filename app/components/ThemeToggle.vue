<template>
  <button
    class="theme-toggle"
    :aria-label="`Switch to ${oppositeTheme} mode`"
    @click="toggleTheme"
  >
    <client-only>
      <Sun v-if="colorMode.value === 'dark'" key="sun" class="icon" />
      <Moon v-else key="moon" class="icon" />
    </client-only>
  </button>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'

const colorMode = useColorMode()

const oppositeTheme = computed(() =>
  colorMode.value === 'dark' ? 'light' : 'dark'
)

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped lang="scss">
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 9999px;
  min-height: 40px;
  min-width: 40px;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: scale(1.1);
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    stroke: var(--text-color);
    stroke-width: 1.5;
    transition:
      stroke 0.3s ease,
      stroke-width 0.3s ease;
  }

  .placeholder {
    opacity: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
