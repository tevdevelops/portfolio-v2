import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setup, mount } from '@nuxt/test-utils'
import ThemeToggle from '@/app/components/ThemeToggle.vue'

let colorMode: { value: string; preference: string }

vi.mock('#imports', async () => {
  const actual = await vi.importActual<any>('#imports')
  return {
    ...actual,
    useColorMode: () => colorMode,
  }
})

beforeEach(async () => {
  colorMode = { value: 'light', preference: 'light' }
})

await setup({ server: false })

describe('ThemeToggle', () => {
  it('toggles colorMode.preference', async () => {
    const wrapper = mount(ThemeToggle)
    expect(colorMode.preference).toBe('light')

    await wrapper.trigger('click')
    expect(colorMode.preference).toBe('dark')

    await wrapper.trigger('click')
    expect(colorMode.preference).toBe('light')
  })
})
