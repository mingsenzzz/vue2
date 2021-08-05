<template>
  <div>
    子组件1
    <button @click="sendMsgTo">传送值给brother2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      child1Name: "子组件1",
    };
  },
  methods: {
    sendMsgTo() {
      this.$eventBus.$emit("getUserName", this.child1Name);
    },
  },
};
</script>

<style>
</style>