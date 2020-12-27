<template>
  <div class="d-flex justify-content-between">
    <span>{{ todolist.name }}</span>
    <span>
      <span class="to-start">{{ todolist.notStartedCount }}</span> /
      <span class="completed">{{ todolist.completedCount }}</span> /
      <span>{{ todolist.count }}</span>
    </span>
  </div>
</template>

<script>
import { TodolistModel } from "@/utils/models/todolist/todolist.model";

export default {
  name: "TodolistCard",
  props: {
    todolist: TodolistModel
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/_variables";
</style>
