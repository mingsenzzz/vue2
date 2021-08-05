<template>
  <div class="parent">
    <Child1 />
    <Child2 />
  </div>
</template>

<script>
import Child1 from "./brother1";
import Child2 from "./brother2";
export default {
  components: {
    Child1,
    Child2,
  },
  mounted() {},
};
</script>

<style scoped>
.parent {
  height: 200px;
  width: 200px;
}
</style>