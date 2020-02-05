<template>
    <div>
        <div>{{ count }}</div>
        <button @click="INCREMENT">+</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import * as type from "./constants/index.js";

export default {
    data() {
        return {};
    },
    methods: {
        ...mapMutations([type.type.INCREMENT])
    },
    computed: {
        ...mapState({
            count: state => state.count
        })
    }
};
</script>

<style></style>
