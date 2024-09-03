<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Button class="increaseButton" @click="increment">ADD!!!</Button>
  <Button class="decreaseButton" @click="decrement">ADD!!!</Button>
  <p class="count">{{ count }}</p>
  <div class="generic">
    <GenericTable :items="users" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounter } from '@/composables/useCounter'
import GenericTable from '@/components/GenericTable.vue'

const { count, increment, decrement } = useCounter()

interface User {
  id: number
  name: string
  email: string
}

const users = ref<User[]>([
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
])
</script>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}

Button {
  color: black;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s;
}

.increaseButton {
  background-color: red;
  &:hover {
    background-color: transparent;
  }
}

.decreaseButton {
  background-color: green;
  &:hover {
    background-color: transparent;
  }
}

p {
  color: red;
  font-size: 30px;
  margin-top: 20px;
  text-align: center;
}

.count {
  color: blue;
  font-size: 30px;
  margin-top: 20px;
  text-align: center;
}

.generic {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
