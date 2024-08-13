import { describe, it, expect } from 'vitest'
import { useCounter } from '../useCounter'

describe('useCounter', () => {
  it('count 預設值為 0', () => {
    const { count } = useCounter()
    expect(count.value).toBe(0)
  })

  it('increment 執行一次 +1', () => {
    const { count, increment } = useCounter()
    increment()
    expect(count.value).toBe(1)
  })

  it('decrements 執行一次 -1', () => {
    const { count, decrement } = useCounter()
    decrement()
    expect(count.value).toBe(-1)
  })

  it('執行兩次 increment 與一次 decrement，count 為 1', () => {
    const { count, increment, decrement } = useCounter()
    increment()
    increment()
    decrement()
    expect(count.value).toBe(1)
  })
})
