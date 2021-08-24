<template>
  <div>
    <!-- 具名插槽 -->
    <slot name="aaa"></slot>
    <slot name="bbb"></slot>
    <!-- 无名的插槽 -->
    <slot></slot>
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
  mounted() {
    console.log(this.$slots, "this");
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