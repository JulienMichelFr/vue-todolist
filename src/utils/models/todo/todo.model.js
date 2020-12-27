import { WithId } from "@/utils/models/with-id";

export class TodoModel extends WithId {
  /**
   * @param text {string}
   * @param status {boolean}
   * @param date {Date}
   */
  constructor(text, status = false, date = new Date()) {
    super();
    this.text = text;
    this.status = status;
    this.date = date;
  }
}
