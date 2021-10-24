export const mapState = states => {
  const _state = {};
  Object.entries(states).forEach(([key, value]) => {
    _state[key] = function() {
      return this.state[value];
    };
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
  Object.entries(getters).forEach(([key, value]) => {
    _getters[key] = function() {
      return this.getters[value];
    };
  });
  return {
    inject: ['getters'],
    computed: {
      ..._getters
    },
  };
};

export const mapMutations = mutations => {
  const _mutations = {};
  Object.entries(mutations).forEach(([key, value]) => {
    _mutations[key] = function() {
      return this.mutations[value]();
    };
  });
  return {
    inject: ['mutations'],
    methods: {
      ..._mutations
    },
  }
}
