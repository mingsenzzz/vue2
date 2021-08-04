<template>
  <div id="app">
    <input v-fbind:data="n" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
