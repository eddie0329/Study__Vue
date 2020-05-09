import _get from "lodash/get";
import data from "../../../data.js";
import { mapDecksByKeys } from "./hearth-stone-deck-vo.js";

function satc(promisifiedFunc, ...arg) {
  return new Promise((resolve) => {
    promisifiedFunc(...arg)
      .then((res) => {
        resolve({ error: null, result: res });
      })
      .catch((err) => {
        const errcode = _get(err, "data.error.code"); // for any raw errors
        const summaryErrorCode = _get(err, "data.summary.code");
        resolve({ errorCode: errcode || summaryErrorCode, error: err });
      });
  });
}

const _getData = (data) =>
  new Promise((resolve) => {
    return resolve(data);
  });

const getDefaultState = () => ({
  rawDecks: [],
  refinedDecks: new Map(),
  deckKeys: [],
});

const getters = {};

const SET_RAW_DATA = "SET_RAW_DATA";
const SET_REFINED_DECKS = "SET_REFINED_DECKS";

const mutations = {
  [SET_RAW_DATA](state, data) {
    state.rawDecks = data;
  },
  [SET_REFINED_DECKS](state, refinedData) {
    state.refinedDecks = refinedData;
  },
};

const actions = {
  async getDecks({ commit }) {
    const { result } = await satc(_getData, data);
    const { body } = result;
    commit(SET_RAW_DATA, body);
    commit(SET_REFINED_DECKS, mapDecksByKeys(body));
  },
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters,
  actions,
  mutations,
};
