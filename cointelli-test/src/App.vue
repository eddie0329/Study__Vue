<template>
  <div id="app">
    <form id="submitForm" @submit.prevent="onSubmitForm">
      <input v-model="inputIncome" type="number" placeholder="추가/수정" />
      <button>제출</button>
    </form>

    <!-- 소득 리스트 Sample -->
    <ul>
      <li v-for="(gain, index) in gains" :key="`income-${index}`">
        ${{ gain }}
        <span style="color: red" @click="onClickDelete(index)">삭제</span>&nbsp;
        <span style="color: blue" @click="onClickEdit(index)">수정</span>
      </li>
    </ul>
    <!-- /소득 리스트 Sample -->

    <ul>
      <!-- 여기에 코드를 작성해주세요 -->
    </ul>
  </div>
</template>

<script>
import Debounced from '@/utils/debounced';

export default {
  name: 'App',
  data: () => {
    return {
      /** @type {number[]} */
      gains: [1000, 2000, 3000, 4000, 5000],
      /** @type {number} */
      inputIncome: 0,
      /** @type {number?} */
      editAtIndex: null,
      debounedObj: null
    };
  },
  methods: {
    /**
     * @params {number} deleteAtIndex
     */
    onClickDelete(deleteAtIndex) {
      this.gains = this.gains.filter(
        (_, individualIdx) => individualIdx !== deleteAtIndex
      );
    },
    /**
     * @params {number} editAtIndex
     */
    onClickEdit(editAtIndex) {
      this.inputIncome = this.gains[editAtIndex];
      this.editAtIndex = editAtIndex;
    },
    onSubmitForm() {
      this.debounedObj?.debounced(1000, this.debouncedFunc.bind(this));
    },
    debouncedFunc() {
      if (this.editAtIndex !== null) {
        this.gains[this.editAtIndex] = this.inputIncome;
      } else {
        this.gains.push(this.inputIncome)
      }
      this.inputIncome = 0;
    }
  },
  created() {
    this.debounedObj = new Debounced();
  }
};
</script>

<style>
</style>
