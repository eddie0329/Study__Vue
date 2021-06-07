class Dep {
  constructor() {
    this.subscribers = [];
  }

  depend() {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }

  notify() {
    this.subscribers.forEach((sub) => sub());
  }
}

function watcher(myFunc) {
  target = myFunc;
  target();
  target = null;
}

let data = {
  price: 5,
  quantity: 2,
};

let target, total, salePrice;

Object.keys(data).forEach((key) => {
  let internalValue = data[key];
  const dep = new Dep();

  Object.defineProperty(data, key, {
    get() {
      dep.depend();
      return internalValue;
    },
    set(newVal) {
      internalValue = newVal;
      dep.notify();
    },
  });
});

watcher(() => {
  total = data.price * data.quantity;
});

watcher(() => {
  salePrice = data.price * 0.9;
});
