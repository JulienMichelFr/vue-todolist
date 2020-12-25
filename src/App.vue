<template>
  <div id="app">
    <h1>My Todolist</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div v-for="todo in todos" :key="todo.id">
      <Todo
        v-on:toggle-status="() => toggleTodo(todo.id)"
        v-bind:text="todo.text"
        v-bind:date="todo.date"
        v-bind:status="todo.status"
      />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Todo from "./components/Todo/Todo.vue";
import { createTodo } from "@/utils/create-todo/create-todo";

export default {
  name: "App",
  components: {
    HelloWorld,
    Todo
  },
  data: function() {
    return {
      date: new Date(),
      todos: [
        createTodo("My first todo"),
        createTodo("My old todo", false, new Date(2020, 11, 24)),
        createTodo("My completed todo", true)
      ]
    };
  },
  methods: {
    /**
     * @param id {number}
     */
    toggleTodo(id) {
      const todo = this.todos.find(t => t.id === id);
      if (!todo) {
        return;
      }
      todo.status = !todo.status;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
