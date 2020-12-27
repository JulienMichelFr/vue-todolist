import { WithId } from "@/utils/models/with-id";

export class TodolistModel extends WithId {
  /**
   *
   * @param name {string}
   * @param todos {TodoModel[]}
   */
  constructor(name, todos) {
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
