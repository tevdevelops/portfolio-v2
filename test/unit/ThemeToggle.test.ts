import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { ThemeToggle } from '#components'

let colorMode: { value: string; preference: string }

vi.mock('#imports', async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actual = await vi.importActual<any>('#imports')
  return {
    ...actual,
    useColorMode: () => colorMode,
  }
})

beforeEach(async () => {
  colorMode = { value: 'light', preference: 'light' }
})


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
