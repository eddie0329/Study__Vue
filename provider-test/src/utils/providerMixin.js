import _get from 'lodash/get';
import _isArray from 'lodash/isArray';
import _isObject from 'lodash/isObject';

const objectEntryMapper = ({ contextValue, target, entries }) => {
  Object.entries(entries).forEach(([key, value]) => {
    target[key] = function(payload) {
      const valueGotten = _get(this, `${contextValue}.${value}`);
      return typeof valueGotten === 'function'
        ? valueGotten(payload)
        : valueGotten;
    };
  });
};

const arrayEntryMapper = ({ contextValue, target, entries }) => {
  entries.forEach(entry => {
    target[entry] = function(payload) {
      const valueGotten = _get(this, `${contextValue}.${entry}`);
      return typeof valueGotten === 'function'
        ? valueGotten(payload)
        : valueGotten;
    };
  });
};

const typeValidator = ({ contextValue, target, entries }) => {
  switch (true) {
    case _isArray(entries):
      arrayEntryMapper({ contextValue, target, entries });
      break;
    case _isObject(entries):
      objectEntryMapper({ contextValue, target, entries });
      break;
    default:
      throw new Error(
        `Provider Error: Entries should either array or object: ${entries}`
      );
  }
};

export const mapState = state => {
  const _state = {};
  typeValidator({ 
    contextValue: 'state', 
    target: _state, 
    entries: state 
  });
  return {
    inject: ['state'],
    computed: {
      ..._state
    }
  };
};

export const mapGetters = getters => {
  const _getters = {};
  typeValidator({
    contextValue: 'getters',
    target: _getters,
    entries: getters
  });
  return {
    inject: ['getters'],
    computed: {
      ..._getters
    }
  };
};

export const mapMutations = mutations => {
  const _mutations = {};
  typeValidator({
    contextValue: 'mutations',
    target: _mutations,
    entries: mutations
  });
  return {
    inject: ['mutations'],
    methods: {
      ..._mutations
    }
  };
};
