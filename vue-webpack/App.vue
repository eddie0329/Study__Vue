<template>
    <div>
        <GetterExample></GetterExample>
        <MutationExample></MutationExample>
    </div>
</template>

<script>
import router from "./router/router.js";
import GetterExample from "./GetterExample.vue";
import MutationExample from "./MutationExample.vue";
import { mapState, mapMutations } from "vuex";

export default {
    components: {
        GetterExample,
        MutationExample
    },
    router,
    data() {
        return {};
    }
    // computed: mapState({
    //     count: state => state.count,
    //     greeting: state => state.greeting
    // })
    // computed: {
    //     ...mapState({
    //         count: state => state.count,
    //         greeting: state => state.greeting
    //     }),
    //     localIncrement() {
    //         const result = this.count + 1;
    //         return result;
    //     }
    // }
};
</script>

<style></style>
