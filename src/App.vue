<template>
  <div id="app">
    <input v-fbind:data="n" />
    <Transition />
  </div>
</template>

<script>
import Transition from "./components/transitionC";
export default {
  name: "App",
  components: { Transition },
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
