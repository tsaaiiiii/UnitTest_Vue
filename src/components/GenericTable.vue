<script setup lang="ts" generic="T extends { id: number; name: string }">
import { defineProps } from 'vue'

export interface TableProps<T> {
  items: T[]
}

const props = defineProps<TableProps<T>>()

const renderItem = (item: T): string => item.id + ': ' + item.name
</script>

<template>
  <div>
    <div v-for="item in props.items" :key="item.id">
      {{ renderItem(item) }}
    </div>
  </div>
</template>
