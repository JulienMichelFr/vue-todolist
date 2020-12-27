export const TodolistService = {
  /**
   * @type {TodolistModel[]}
   */
  todolists: [],
  /**
   * @param todolistId {number}
   * @return {TodolistModel | undefined}
   */
  findById(todolistId) {
    return this.todolists.find(todolist => todolist.id === todolistId);
  },
  /**
   *
   * @param todolist {TodolistModel}
   */
  addTodolist(todolist) {
    this.todolists.push(todolist);
  },
  /**
   * @param todolistId {number}
   */
  removeTodolist(todolistId) {
    const index = this.todolists.findIndex(
      todolist => todolist.id === todolistId
    );
    if (index > -1) {
      this.todolists.splice(index, 1);
    }
  }
};
