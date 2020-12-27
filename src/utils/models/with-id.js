export class WithId {
  #id = Math.round(Math.random() * 1000);

  /**
   * @return {number}
   */
  get id() {
    return this.#id;
  }
}
