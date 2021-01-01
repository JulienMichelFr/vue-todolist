import { WithId } from "@/utils/models/with-id";
import { TodoModel } from "@/utils/models/todo/todo.model";

/**
 * @typedef TodolistModelInterface
 * @property id {string}
 * @property name {string}
 * @property todos {TodoModelInterface[]}
 */

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
   * @param name
   * @param todos {TodoModel[]}
   * @param id {string | undefined}
   */
  constructor(name, todos = [], id = undefined) {
    super(id);
    this.name = name;
    this.todos = todos;
  }

  /**
   * @return TodolistModelInterface
   */
  toObject() {
    return {
      ...super.toObject(),
      name: this.name,
      todos: this.todos.map(t => t.toObject())
    };
  }

  /**
   *
   * @param name {string}
   * @param todos {{date: Date, text: string, status: boolean, id: string}[]}
   * @param id {string}
   * @return {TodolistModel}
   */
  static fromObject({ name, todos, id }) {
    return new TodolistModel(
      name,
      todos.map(t => TodoModel.fromObject(t)),
      id
    );
  }
}
