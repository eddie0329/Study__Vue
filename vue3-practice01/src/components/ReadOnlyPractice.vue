<template>
  <hr />
  <h1>ReadOnly Practice</h1>
  <div>{{ state.count }}</div>
  <button @click="onClickPlus">+</button>
  <button @click="onClickCheckProxy">CHECK ISPROXY</button>
  <button @click="onClickCheckReactive">CHECK ISREACTIVE</button>
  <button @click="onClickCheckReadonly">CHECK ISREADONLY</button>
  <hr />
</template>

<script>
import { readonly, reactive, isProxy, isReactive, isReadonly } from 'vue';

export default {
  setup() {
    const state = reactive({ count: 0 });
    const readOnlyState = readonly(state);
    const readOnly = readonly({ count: 0 });
    const readOnlyCopy = readOnlyState.count;

    const onClickPlus = () => {
      state.count++;
      readOnlyState.count++; // warning !!!
      console.log(readOnlyState.count === readOnlyCopy); // false
    };

    const onClickCheckProxy = () => {
      console.log('isProxy(state) -> reactive', isProxy(state)); // true
      console.log('isProxy(readOnlyState) -> readonly', isProxy(readOnlyState)); // true
      console.log('isProxy(readOnlyCopy)', isProxy(readOnlyCopy)); // false
    };

    const onClickCheckReactive = () => {
      console.log('isReactive(state)', isReactive(state)); // true
      console.log('isReactive(readOnlyState)', isReactive(readOnlyState)); // true
      console.log('isReactive(readOnly)', isReactive(readOnly)); // false
      console.log('isReactive(readOnlyCopy)', isReactive(readOnlyCopy)); // false
    };

    const onClickCheckReadonly = () => {
      console.log('isReadonly(state)', isReadonly(state)); // false
      console.log('isReadonly(readOnlyState)', isReadonly(readOnlyState)); // true
      console.log('isReadonly(readOnly)', isReadonly(readOnly)); // true
      console.log('isReadonly(readOnlyCopy)', isReadonly(readOnlyCopy)); // false
    };

    return {
      state,
      readOnlyState,
      onClickPlus,
      onClickCheckProxy,
      onClickCheckReactive,
      onClickCheckReadonly,
    };
  },
};
</script>

<style>
</style>