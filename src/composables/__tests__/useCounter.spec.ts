import { describe, it, expect } from 'vitest'
import { useCounter } from '../useCounter'

describe('useCounter', () => {
  it('initial count is 0', () => {
    const { count } = useCounter()
    expect(count.value).toBe(0)
  })

  it('increments the count', () => {
    const { count, increment } = useCounter()
    increment()
    expect(count.value).toBe(1)
  })

  it('decrements the count', () => {
    const { count, decrement } = useCounter()
    decrement()
    expect(count.value).toBe(-1)
  })

  it('increments and decrements the count', () => {
    const { count, increment, decrement } = useCounter()
    increment()
    increment()
    decrement()
    expect(count.value).toBe(1)
  })
})
