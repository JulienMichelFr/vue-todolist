<template>
  <div class="list-group">
    <TodolistCard
      class="list-group-item"
      v-for="todolist in todolists"
      :key="todolist.id"
      :todolist="todolist"
    ></TodolistCard>
  </div>
</template>

<script>
import { TodolistService } from "@/utils/services/todolist/todolist.service";
import { TodolistModel } from "@/utils/models/todolist/todolist.model";
import TodolistCard from "@/components/TodolistCard/TodolistCard";

export default {
  name: "Home",
  components: {
    TodolistCard
  },
  data: function() {
    return {
      todolists: TodolistService.todolists
    };
  },
  methods: {
    addTodo() {
      TodolistService.addTodolist(new TodolistModel("My todolist", []));
    }
  }
};
</script>
