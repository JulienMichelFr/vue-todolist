<template>
  <div id="app">
    <h1>
      My Todolist
      <span v-bind:class="progressClasses">{{ completed }} / {{ total }}</span>
    </h1>
    <CreateTodo @create-todo="createTodo" />
    <hr />
    <div class="list-group" v-for="todo in todos" :key="todo.id">
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

export default {
  name: "App",
  components: {
    CreateTodo,
    Todo
  },
  /**
   * @return {{
   *   date: Date,
   *   todos: TodoModel[]
   * }}
   */
  data: function() {
    return {
      date: new Date(),
      todos: [
        new TodoModel("My first todo"),
        new TodoModel("My old todo", false, new Date(2020, 11, 24)),
        new TodoModel("My completed todo", true)
      ]
    };
  },
  computed: {
    /**
     * Get todos count
     * @return {number}
     */
    total() {
      return this.todos?.length ?? -1;
    },
    /**
     * Get completed todos count
     * @return {number}
     */
    completed() {
      return this.todos?.filter(({ status }) => !!status).length ?? 0;
    },
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
      if (this.completed === this.total) {
        result.completed = true;
        return result;
      }
      if (this.completed === 0) {
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
     * @param id {number}
     */
    toggleTodo(id) {
      const todo = this.todos.find(t => t.id === id);
      if (!todo) {
        return;
      }
      todo.status = !todo.status;
    },
    /**
     * Update todo text
     */
    updateTodoText(id, updatedText) {
      const todo = this.todos.find(t => t.id === id);
      if (!todo) {
        return;
      }
      if (!updatedText?.trim()?.length) {
        return;
      }
      todo.text = updatedText;
    },
    /**
     * Create a new todo
     * @param text {string}
     * @param status {boolean}
     * @param date {string} Date with format 'YYYY-MM-DD'
     */
    createTodo({ text, status, date }) {
      this.todos.push(new TodoModel(text, status, new Date(date)));
    },
    /**
     * Delete todo
     * @param id {number}
     */
    deleteTodo(id) {
      if (confirm("Delete todo ?")) {
        this.todos = this.todos.filter(t => t.id !== id);
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
