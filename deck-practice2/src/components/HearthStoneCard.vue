<template>
  <div>
    <div v-for="card in cards" :key="card[key]">
      {{ card[value].name }}
      {{ card[value]._deckId }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    console.log(this.cards);
  },
  props: {
    deckKey: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      key: 0,
      value: 1,
    };
  },
  computed: {
    ...mapState("HearthStoneDeck", ["refinedDecks"]),
    cards() {
      return this.refinedDecks.get(this.deckKey)._cards;
    },
  },
};
</script>

<style></style>
