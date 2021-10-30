const err = (msg) => {
  throw new Error(`mapComputed Error: ${msg}`);
};

const objectKeysHandler = {
  handle({ target, computedMap, computedKeys }) {
    Object.entries(computedKeys).forEach(([alteredKey, computedKey]) => {
      if (target[alteredKey]) err(`Duplicated key: ${computedKey}`);
      else target[alteredKey] = (computedMap[computedKey] ?? err(`Invalid key: ${computedKey}`));
    });
  },
};

const arrayKeysHandler = {
  handle({ target, computedMap, computedKeys }) {
    computedKeys.forEach(key => {
      if (target[key]) err(`Duplicated key: ${key}`);
      else target[key] = (computedMap[key] ?? err(`Invalid key: ${key}`));
    });
  },
};

const keysHandler = {
  data: {
    object: ({ target, computedMap, computedKeys }) => objectKeysHandler.handle({ target, computedMap, computedKeys }),
    array: ({ target, computedMap, computedKeys }) => arrayKeysHandler.handle({ target, computedMap, computedKeys }),
  },
  handle({ target, computedMap, computedKeys }) {
    (this.data[Array.isArray(computedKeys) ? 'array' : typeof computedMap] ?? err('Invalid Type'))({ target, computedMap, computedKeys });
  },
};

/**
 * @param {Object} computedMap
 * @param {string[]} computedKeys
 */
const mapComputed = (computedMap, computedKeys) => {
  let computed = {};
  keysHandler.handle({ target: computed, computedMap, computedKeys });
  return {
    computed,
    beforeDestory() {
      computed = null;
    },
  };
};

export default mapComputed;
