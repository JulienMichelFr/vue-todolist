import * as faker from "faker";

export class WithId {
  #id = faker.random.uuid();

  /**
   * @return {number}
   */
  get id() {
    return this.#id;
  }
}
