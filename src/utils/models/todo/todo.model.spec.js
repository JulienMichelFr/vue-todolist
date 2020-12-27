import { TodoModel } from "@/utils/models/todo/todo.model";

describe("create-todo", () => {
  it("creates a valid todo", () => {
    const text = "My Todo";
    const status = true;
    const date = new Date();
    const created = new TodoModel(text, status, date);
    expect(created.text).toEqual(text);
    expect(created.status).toEqual(status);
    expect(created.date).toEqual(date);
    expect(created.id).toBeDefined();
  });
  it("creates a valid todo with generated status and date", () => {
    const text = "My todo";
    const created = new TodoModel(text);
    expect(created.text).toEqual(text);
    expect(created.status).toEqual(false);
    expect(created.date).toBeInstanceOf(Date);
  });
});
