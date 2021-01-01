import Vue from "vue";
import Vuex from "vuex";
import { initTodos } from "@/utils/init";

Vue.use(Vuex);

/**
 * @typedef State
 * @property state {{todolist: TodolistModelInterface[]}}
 */

export default new Vuex.Store({
  state: {
    todolists: initTodos()
  },
  mutations: {
    /**
     * Add a new todolist
     * @param state {State}
     * @param todolist {TodolistModelInterface}
     */
    addTodolist(state, todolist) {
      state.todolists.push(todolist);
    },
    /**
     *
     * @param state {State}
     * @param todolistId {string}
     * @param todoId {string}
     */
    toggleTodo(state, { todolistId, todoId }) {
      const todolist = state.todolists.find(t => t.id === todolistId);
      if (!todolist) {
        return;
      }
      const todo = todolist.todos.find(t => t.id === todoId);
      if (!todo) {
        return;
      }
      todo.status = !todo.status;
    },
    /**
     * @param state {State}
     * @param todolistId {string}
     * @param todo {TodoModelInterface}
     */
    addTodo(state, { todolistId, todo }) {
      const todolist = state.todolists.find(t => t.id === todolistId);
      if (!todolist) {
        return;
      }
      todolist.todos.push(todo);
    },
    /**
     *
     * @param state {State}
     * @param todolistId {string}
     * @param todoId {string}
     * @param updatedText {string}
     */
    updateTodoText(state, { todolistId, todoId, updatedText }) {
      const todolist = state.todolists.find(t => t.id === todolistId);
      if (!todolist) {
        return;
      }
      /**
       * @type {TodoModelInterface | undefined}
       */
      const todo = todolist.todos.find(t => t.id === todoId);
      if (!todo) {
        return;
      }
      todo.text = updatedText;
    },
    /**
     *
     * @param state {State}
     * @param todolistId {string}
     * @param todoId {string}
     */
    deleteTodo(state, { todolistId, todoId }) {
      const todolist = state.todolists.find(t => t.id === todolistId);
      if (!todolist) {
        return;
      }
      const index = todolist.todos.findIndex(todo => todo.id === todoId);
      if (index > -1) {
        todolist.todos.splice(index, 1);
      }
    }
  },
  getters: {
    findTodolistById(state) {
      return id => {
        return state.todolists.find(todolist => todolist.id === id);
      };
    }
  },
  actions: {},
  modules: {}
});
