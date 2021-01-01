import { WithId } from "@/utils/models/with-id";

/**
 * @typedef TodoModelInterface
 * @property id {string}
 * @property text {string}
 * @property status {boolean}
 * @property date {Date}
 */

export class TodoModel extends WithId {
  /**
   * @param text {string}
   * @param status {boolean}
   * @param date {Date}
   * @param id {string | undefined}
   */
  constructor(text, status = false, date = new Date(), id = undefined) {
    super(id);
    this.text = text;
    this.status = status;
    this.date = date;
  }

  /**
   * @return {TodoModelInterface}
   */
  toObject() {
    return {
      ...super.toObject(),
      text: this.text,
      status: this.status,
      date: this.date
    };
  }

  /**
   * @param text {string}
   * @param status {boolean}
   * @param date {Date}
   * @param id {string}
   * @return {TodoModel}
   */
  static fromObject({ text, status, date, id }) {
    return new TodoModel(text, status, date, id);
  }
}
