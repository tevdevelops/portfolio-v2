type UseMobileNavReturn = {
  isOpen: Ref<boolean>
  toggle: () => void
}

export function useMobileNav(): UseMobileNavReturn {
  const isOpen = useState('mobile-nav-is-open', () => false)

  function toggle() {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    toggle,
  }
}
