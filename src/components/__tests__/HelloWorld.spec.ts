import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

// describe
// 將分散的測試整合在一起的容器，並可以命名

// it
// 等同於 test，與 describe 一起使用，用來描述測試的目的
// Example:
// describe('鉛筆盒',()=>{
//   test('擦布',()=>{
//     // 測試：擦布是否存在
// })
//   test('原子筆',()=>{
//     // 測試：原子筆是否存在
// })
// })

// expect（預期）
// 用來斷言，用來判斷測試是否通過
// 要測試 camera 這個物件是不是正常的，於是我們預期這個相機能夠在使用了拍照功能後，會 Return 出來的回傳值裡面包含了 '照片' 這個字串。
//Example:
//describe('背包',()=>{
//  test('相機',()=>{
//  const camera = new Camera()
//  expect(camera.take_photo()).toContain('照片')
// })
// })

// 參考：https://medium.com/@Monster.0313/unit-test-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-%E4%BA%8C-vue-3-with-vitest-617e8101f7c5
