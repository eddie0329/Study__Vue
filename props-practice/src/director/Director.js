import Builder from '../builder/Builder';

export default class Director {
  constructor(h, self) {
    this._h = h;
    this._self = self;
    console.log(h);
    console.log(self);
    return this;
  }

  forceWork() {
    return new Builder(this._h, this._self);
  }
}
