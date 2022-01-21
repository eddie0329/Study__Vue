class Debounced {
  #timer;
  /** @type {boolean} */
  #validFlag = false;
  #func;

  constructor() {
    return this;
  }

  err(msg) {
    throw new Error(msg);
  }

  validate() {
    return this.#validFlag || this.err('Not yet - debounced');
  }

  init() {
    this.#timer = null;
    this.#validFlag = false;
    this.#func = null;
  }

  debounced(time, func) {
    if (!this.#timer) {
      this.#func = func;
      this.#timer = setTimeout(() => {
        this.#validFlag = true;
        this.#func();
      }, time);
    }
    this.validate();
    this.init();
  }
}

export default Debounced;
