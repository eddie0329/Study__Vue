<template>
  <div>{{ refinedDecks.get(deckKey).className }}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    deckKey: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState("HearthStoneDeck", ["refinedDecks"]),
  },
};
</script>

<style></style>
