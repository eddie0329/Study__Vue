<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$router.push({ name: "Test" });
  }
}
</script>

