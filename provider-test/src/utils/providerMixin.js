import _get from 'lodash/get';

const objectEntryMapper = ({ contextValue, target, entries }) => {
  Object.entries(entries).forEach(([key, value]) => {
    target[key] = function(payload) {
      const valueGotten = _get(this, `${contextValue}.${value}`);
      return typeof valueGotten  === 'function' ? valueGotten(payload) : valueGotten;
    }
  })
}

export const mapState = state => {
  const _state = {};
  objectEntryMapper({ contextValue: 'state', target: _state, entries: state });
  return {
    inject: ['state'],
    computed: {
      ..._state
    }
  };
};

export const mapGetters = getters => {
  const _getters = {};
  objectEntryMapper({ contextValue: 'getters', target: _getters, entries: getters })
  return {
    inject: ['getters'],
    computed: {
      ..._getters
    },
  };
};

export const mapMutations = mutations => {
  const _mutations = {};
  objectEntryMapper({ contextValue: 'mutations', target: _mutations, entries: mutations })
  return {
    inject: ['mutations'],
    methods: {
      ..._mutations
    },
  }
}
