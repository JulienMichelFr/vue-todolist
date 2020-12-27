<template>
  <div>
    <router-link
      :to="{ name: 'todolist.detail', params: { id: todolist.id } }"
      class="list-group"
      v-for="todolist in todolists"
      :key="todolist.id"
    >
      <TodolistCard class="list-group-item" :todolist="todolist"></TodolistCard>
    </router-link>
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
