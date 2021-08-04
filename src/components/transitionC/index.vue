<template>
  <div>
    <!-- <transition name="myTransition" duration="1000"> -->

    <!-- 单个元素使用transition, 多个元素使用transition-group -->
    <transition name="myTransition" :duration="{ enter: 500, leave: 2000 }">
      <div class="myName" v-show="show">我的名字</div>
    </transition>
    <div>
      <button @click="switchBtn">点击切换</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    switchBtn() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
/* 过渡开始进入的起点 */
.myTransition-enter {
  transform: translateX(-100%);
}
/* 过渡开始进入的终点 */
.myTransition-enter-to {
  transform: translateX(0);
}

/* 过渡的开始和结束过程*/
.myTransition-enter-active,
.myTransition-leave-active {
  transition-duration: 2s;
}

/* 过渡开始离开的起点 */
.myTransition-leave {
  transform: translateX(0);
  opacity: 1;
}
/* 过渡开始离开的终点 */
.myTransition-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.myName {
  background: green;
  height: 100px;
  width: 200px;
}
</style>