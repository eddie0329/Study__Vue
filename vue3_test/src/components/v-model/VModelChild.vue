<template>
  <div>
    <label for="first-name">First Name</label>
    <input
      type="text"
      id="first-name"
      :value="firstName"
      @input="(e) => $emit('update:firstName', e.target.value)"
    />
    <label for="last-name">LastName</label>
    <input
      type="text"
      id="last-name"
      :value="lastName"
      @input="(e) => $emit('update:lastName', e.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
  },
};
</script>

<style>

</style>