import { TodolistService } from "@/utils/services/todolist/todolist.service";
import { TodolistModel } from "@/utils/models/todolist/todolist.model";
import * as faker from "faker/locale/fr";
import { TodoModel } from "@/utils/models/todo/todo.model";

faker.seed(1);

const TODOLIST_COUNT = 10;
export function initTodolistService() {
  TodolistService.todolists = [];
  for (let i = 0; i < TODOLIST_COUNT; i++) {
    const TODO_COUNT = faker.random.number({ min: 3, max: 10 });
    let todos = [];
    for (let j = 0; j < TODO_COUNT; j++) {
      todos.push(
        new TodoModel(
          faker.hacker.phrase(),
          faker.random.boolean(),
          faker.date.soon()
        )
      );
    }
    TodolistService.addTodolist(
      new TodolistModel(faker.commerce.department(), todos)
    );
  }
}
