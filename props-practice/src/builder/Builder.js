export default class Builder {
  constructor(h, self) {
    this._h = h;
    this._self = self;
    return this.build();
  }

  build() {
    console.log(this._self);
    return this._h;
  }
}