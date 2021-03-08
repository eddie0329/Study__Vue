<template>
  <div class="home">
    <h1>This is home page</h1>
    <my-card
      v-for="card in cardlist"
      :key="card.id"
      :title="card.title"
      :actress="card.actress"
      :script="card.script"
      @deleteCard="deleteCard(card.id)"
    >
    </my-card>
    <custom-modal
      v-if="isModalOpen"
      @onCancel="onCancel"
      @onConfirm="onConfirm"
    />
  </div>
</template>

<script>
// MODAL
// CARD
// CARD POPUP

// @ is an alias to /src
import MyCard from '../components/MyCard.vue';

export default {
  name: 'Home',
  components: {
    MyCard
  },
  data: () => ({
    isModalOpen: false,
    cardlist: [
      {
        id: 0,
        title: 'hello',
        actress: 'eddie',
        script: 'hello world!'
      },
      {
        id: 1,
        title: 'hello',
        actress: 'eddie',
        script: 'hello world!'
      },
      {
        id: 2,
        title: 'hello',
        actress: 'eddie',
        script: 'hello world!'
      }
    ]
  }),
  methods: {
    deleteCard(cardId) {
      this.isModalOpen = true;
      console.log(cardId);
    },
    onCancel() {
      console.log('NO');
    },
    onConfirm() {
      console.log('YES');
    }
  }
};
</script>

<style scoped>
.my-btn {
  color: red;
}
</style>
