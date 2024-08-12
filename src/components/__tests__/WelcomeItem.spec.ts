import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WelcomeItem from '../WelcomeItem.vue'

describe('WelcomeItem.vue', () => {
  it('renders default slot content', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        default: '<p>Welcome to our application!</p>'
      }
    })
    expect(wrapper.text()).toContain('Welcome to our application!')
  })

  it('renders heading slot content', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        heading: '<span>Getting Started</span>'
      }
    })
    expect(wrapper.html()).toContain('<span>Getting Started</span>')
  })

  it('renders icon slot content', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        icon: '<svg class="icon"></svg>'
      }
    })
    expect(wrapper.find('i').html()).toContain('<svg class="icon"></svg>')
  })

  it('renders all slots together', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        icon: '<svg class="icon"></svg>',
        heading: '<span>Getting Started</span>',
        default: '<p>Welcome to our application!</p>'
      }
    })
    expect(wrapper.html()).toContain('<svg class="icon"></svg>')
    expect(wrapper.html()).toContain('<span>Getting Started</span>')
    expect(wrapper.text()).toContain('Welcome to our application!')
  })
})
