import { WithId } from "@/utils/models/with-id";

export class TodolistModel extends WithId {
  /**
   * @return {number}
   */
  get count() {
    return this.todos.length;
  }

  /**
   * @return {TodoModel[]}
   */
  get completed() {
    return this.todos.filter(todo => todo.status);
  }

  /**
   * @return {number}
   */
  get completedCount() {
    return this.completed.length;
  }

  /**
   * @return {TodoModel[]}
   */
  get notStarted() {
    return this.todos.filter(todo => !todo.status);
  }

  /**
   * @return {number}
   */
  get notStartedCount() {
    return this.notStarted.length;
  }

  /**
   * @return {boolean}
   */
  get isCompleted() {
    return this.todos.length > 0 && this.todos.every(todo => todo.status);
  }

  /**
   * @return {boolean}
   */
  get isNotStarted() {
    return this.todos.every(todo => !todo.status);
  }

  /**
   * @return {boolean}
   */
  get isInProgress() {
    return !this.isCompleted && !this.isNotStarted;
  }

  /**
   *
   * @param name
   * @param todos {TodoModel[]}
   */
  constructor(name, todos = []) {
    super();
    this.name = name;
    this.todos = todos;
  }

  /**
   * @param todo {TodoModel}
   */
  addTodo(todo) {
    this.todos.push(todo);
  }

  /**
   * @param todoId {number}
   */
  removeTodo(todoId) {
    const index = this.todos.findIndex(todo => todo.id === todoId);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
