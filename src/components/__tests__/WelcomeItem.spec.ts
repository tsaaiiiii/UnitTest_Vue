import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import WelcomeItem from '@/components/WelcomeItem.vue'

describe('WelcomeItem', () => {
  it('renders the welcome message correctly', () => {
    const wrapper = shallowMount(WelcomeItem, {
      propsData: {
        name: 'John'
      }
    })

    expect(wrapper.text()).toContain('Welcome, John!')
  })

  it('displays a default welcome message if no name is provided', () => {
    const wrapper = shallowMount(WelcomeItem)

    expect(wrapper.text()).toContain('Welcome!')
  })

  it('emits a custom event when the welcome button is clicked', () => {
    const wrapper = shallowMount(WelcomeItem)

    wrapper.find('button').trigger('click')

    expect(wrapper.emitted('welcome-clicked')).toBeTruthy()
  })
})
