<template>
  <div class="home">
    <my-button>Hello</my-button>
    <emit-container></emit-container>
    <v-model-container></v-model-container>
    <props-container></props-container>
    <AttrsContainer />
    <Ref />
    <Reactive />
  </div>
</template>

<script>
import EmitContainer from '@/components/emit/EmitContainer.vue';
import VModelContainer from '../components/v-model/VModelContainer.vue';
import PropsContainer from '../components/props/PropsContainer.vue';
import AttrsContainer from '../components/attrs/AttrsContainer.vue';
import Ref from '../components/ref/Ref.vue';
import Reactive from '../components/reactive/Reactive.vue';

export default {
  name: 'Home',
  components: {
    EmitContainer,
    VModelContainer,
    PropsContainer,
    AttrsContainer,
    Ref,
    Reactive
  },
};
</script>
