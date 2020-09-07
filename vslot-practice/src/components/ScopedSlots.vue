<template>
  <div>
    <slot :user="user">{{ user.firstName }}</slot>
  </div>
</template>

<script>
export default {
  name: 'ScopedSlots',
  data: () => ({
    user: {
      firstName: 'eddie',
      lastName: 'choi',
    },
  }),
};
</script>

<style>
</style>