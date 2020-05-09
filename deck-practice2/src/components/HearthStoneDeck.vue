<template>
  <div>
    <div v-for="deck in refinedDecks" :key="deck[key]">
      <HearthStoneHero :deck-key="deck[key]" />
      <HearthStoneCard :deck-key="deck[key]" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import HearthStoneHero from "./HearthStoneHero";
import HearthStoneCard from "./HearthStoneCard";

export default {
  async created() {
    await this._fecthDecks();
    console.log(this.refinedDecks);
  },
  data() {
    return {
      key: 0,
      value: 1,
    };
  },
  components: {
    HearthStoneHero,
    HearthStoneCard,
  },
  computed: {
    ...mapState("HearthStoneDeck", ["refinedDecks"]),
  },
  methods: {
    ...mapActions({ _fecthDecks: "HearthStoneDeck/getDecks" }),
  },
};
</script>

<style></style>
