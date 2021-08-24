<template>
  <div id="app">
    <input v-fbind:data="n" />
    <!-- <Transition /> -->
    <PraticeEventBus />
    <MyDirective />
  </div>
</template>

<script>
// import Transition from "./components/transitionC";
import PraticeEventBus from "./components/praticeEventBus";
import MyDirective from "./components/myDirectives";
export default {
  name: "App",
  components: {
    // Transition,
    PraticeEventBus,
    MyDirective,
  },
  data() {
    return {
      n: { aaa: 3333 },
    };
  },
  directives: {
    fbind: {
      bind() {},
      inserted(ele, sss) {
        ele.value = sss.value.aaa;
      },
      update() {},
    },
  },
};
</script>

<style>
</style>
