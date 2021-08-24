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
    <div @click="changeParentData">改变parentData</div>
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
  data() {
    return {
      parentData: 22222,
    };
  },
  mounted() {},
  methods: {
    changeParentData() {
      this.parentData = 333;
    },
  },
};
</script>

<style scoped>
.parent {
  height: 200px;
  width: 200px;
}
</style>