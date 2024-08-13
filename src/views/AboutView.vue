<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Button class="increaseButton" @click="increment">ADD!!!</Button>
  <Button class="decreaseButton" @click="decrement">ADD!!!</Button>
  <p>{{ count }}</p>
</template>

<script setup lang="ts">
import { useCounter } from '@/composables/useCounter'

const { count, increment, decrement } = useCounter()
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
</style>
