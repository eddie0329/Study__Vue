import _get from 'lodash/get';
import _isArray from 'lodash/isArray';
import _isObject from 'lodash/isObject';
import { err } from './errhandler';

const typeValidator = {
  data: {
    string: true,
  },
  validate(el) {
    this.data[typeof el] ?? err(`el must string: ${el} : ${typeof el}`);
  }
};

const objectEntryMapper = ({ contextValue, target, entries }) => {
  Object.entries(entries).forEach(([key, value]) => {
    typeValidator.validate(value);
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
    typeValidator.validate(entry);
    target[entry] = function(payload) {
      const valueGotten = _get(this, `${contextValue}.${entry}`);
      return typeof valueGotten === 'function'
        ? valueGotten(payload)
        : valueGotten;
    };
  });
};

const entryTypeTable = ({ contextValue, target, entries }) => {
  switch (true) {
    case _isArray(entries):
      arrayEntryMapper({ contextValue, target, entries });
      break;
    case _isObject(entries):
      objectEntryMapper({ contextValue, target, entries });
      break;
    default:
      err(`entries should either array or object: ${entries}`);
  }
};

export const mapContextState = state => {
  const _state = {};
  entryTypeTable({ 
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

export const mapContextGetters = getters => {
  const _getters = {};
  entryTypeTable({
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

export const mapConetextMutations = mutations => {
  const _mutations = {};
  entryTypeTable({
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
