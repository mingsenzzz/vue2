<template>
  <div>子组件2 从brother1拿到的name：{{ getNameFromBrother1 }}</div>
</template>

<script>
export default {
  data() {
    return {
      child2Name: "子组件2",
      getNameFromBrother1: undefined,
    };
  },
  mounted() {
    this.$eventBus.$on("getUserName", (val) => {
      console.log(val, "val");
      this.getNameFromBrother1 = val;
    });
  },
};
</script>

<style>
</style>