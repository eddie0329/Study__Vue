<template>
  <div id="app">
    <InputContainer @focus="onFocus" />
  </div>
</template>

<script>
import InputContainer from './components/InputContainer';

export default {
  name: 'App',
  components: {
    InputContainer
  },
  methods: {
    onFocus() {
      
    }
  },
}
</script>
