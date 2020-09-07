<template>
  <div id="app">
    <div>
      <h1>Slot button test</h1>
      <!-- should display Submit -->
      <my-button></my-button>
      <!-- should display Save -->
      <my-button>Save</my-button>
      <hr />
    </div>
    <div>
      <h1>Named Slot test</h1>
      <named-slot>
        <template #header>
          <h2>This is header</h2>
        </template>
        <p>This is main</p>
        <p>Another main</p>
        <p>Hello word</p>
        <template #footer>
          <h2>This is footer</h2>
        </template>
      </named-slot>
      <hr />
    </div>
    <div>
      <h1>Scoped Slot test</h1>
      <!-- should display eddie -->
      <scoped-slots></scoped-slots>
      <!-- shoud display choi -->
      <scoped-slots #default="{user}">{{ user.lastName }}</scoped-slots>
      <hr />
    </div>
  </div>
</template>

<script>
import MyButton from './components/MyButton';
import NamedSlot from './components/NamedSlot';
import ScopedSlots from './components/ScopedSlots';

export default {
  name: 'App',
  components: {
    MyButton,
    NamedSlot,
    ScopedSlots,
  },
};
</script>
