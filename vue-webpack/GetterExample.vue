<template>
    <div>
        <div>{{ doneTodos }}</div>
        <div>{{ getTodoById(1) }}</div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["doneTodos", "getTodoById"])
    }
};
</script>

<style></style>
