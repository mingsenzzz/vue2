<template>
  <div class="parent">
    <Child1>
      <template v-slot:aaa>
        <div>1111</div>
      </template>
      <template v-slot:bbb>
        <div>2222</div>
      </template>

      <div>44444</div>
    </Child1>
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