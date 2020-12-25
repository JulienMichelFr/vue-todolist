/**
 * @typedef TodoInstance
 * @property text {string}
 * @property status {boolean}
 * @property date {Date}
 * @property id {number}
 */
/**
 * Creates a new TodoInstance
 * @param text {string}
 * @param status {boolean}
 * @param date {Date}
 * @return TodoInstance
 */
export function createTodo(text, status = false, date = new Date()) {
  return {
    text,
    status,
    date,
    id: Math.round(Math.random() * 1000)
  };
}
