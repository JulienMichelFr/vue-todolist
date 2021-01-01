<template>
  <div id="app">
    <h1>
      {{ todolist.name }}
      <span v-bind:class="progressClasses"
        >{{ todolist.completedCount }} / {{ todolist.count }}</span
      >
    </h1>
    <CreateTodo @create-todo="createTodo" />
    <hr />
    <div class="list-group" v-for="todo in todolist.todos" :key="todo.id">
      <Todo
        class="list-group-item"
        v-on:toggle-status="() => toggleTodo(todo.id)"
        v-on:update-text="updatedText => updateTodoText(todo.id, updatedText)"
        v-bind:text="todo.text"
        v-bind:date="todo.date"
        v-bind:status="todo.status"
      >
        <button class="btn btn-danger" @click="deleteTodo(todo.id)">
          Delete
        </button>
      </Todo>
    </div>
  </div>
</template>

<script>
import Todo from "@/components/Todo/Todo.vue";
import CreateTodo from "@/components/CreateTodo/CreateTodo";
import { TodoModel } from "@/utils/models/todo/todo.model";
import { TodolistModel } from "@/utils/models/todolist/todolist.model";

export default {
  name: "App",
  components: {
    CreateTodo,
    Todo
  },
  props: {
    todolist: TodolistModel
  },
  computed: {
    /**
     * Generate css classes for current progress
     * @return {{completed: boolean, 'to-start': boolean, 'in-progress': boolean}}
     */
    progressClasses: function() {
      const result = {
        completed: false,
        "in-progress": false,
        "to-start": false
      };
      if (this.todolist.isCompleted) {
        result.completed = true;
        return result;
      }
      if (this.todolist.isNotStarted) {
        result["to-start"] = true;
        return result;
      }
      result["in-progress"] = true;
      return result;
    }
  },
  methods: {
    /**
     * Update todo status
     * @param id {string}
     */
    toggleTodo(id) {
      this.$store.commit("toggleTodo", {
        todolistId: this.todolist.id,
        todoId: id
      });
    },
    /**
     * Update todo text
     * @param id {string}
     * @param updatedText {string}
     */
    updateTodoText(id, updatedText) {
      this.$store.commit("updateTodoText", {
        todolistId: this.todolist.id,
        todoId: id,
        updatedText
      });
    },
    /**
     * Create a new todo
     * @param text {string}
     * @param status {boolean}
     * @param date {string} Date with format 'YYYY-MM-DD'
     */
    createTodo({ text, status, date }) {
      this.$store.commit("addTodo", {
        todolistId: this.todolist.id,
        todo: new TodoModel(text, status, new Date(date)).toObject()
      });
    },
    /**
     * Delete todo
     * @param id {string}
     */
    deleteTodo(id) {
      if (confirm("Delete todo ?")) {
        this.$store.commit("deleteTodo", {
          todolistId: this.todolist.id,
          todoId: id
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/variables";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
