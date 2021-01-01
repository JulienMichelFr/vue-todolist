import * as faker from "faker";

export class WithId {
  /**
   * @type {string}
   */
  #id;

  /**
   * @return {string}
   */
  get id() {
    return this.#id;
  }

  /**
   * @param id {string}
   */
  constructor(id = faker.random.uuid()) {
    this.#id = id;
  }

  /**
   * @return {{id: string}}
   */
  toObject() {
    return {
      id: this.#id
    };
  }
}
