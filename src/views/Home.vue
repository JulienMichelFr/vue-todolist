<template>
  <div class="home">
    <h1>Hello world</h1>
    <button class="btn btn-success" @click="addTodo()">Add</button>
    <pre>
      <code>{{JSON.stringify(todolists)}}</code>
    </pre>
  </div>
</template>

<script>
import { TodolistService } from "@/utils/services/todolist/todolist.service";
import { TodolistModel } from "@/utils/models/todolist/todolist.model";

export default {
  name: "Home",
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
