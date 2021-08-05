<template>
  <div>
    <!-- <transition name="myTransition" duration="1000"> -->

    <!-- 单个元素使用transition, 多个元素使用transition-group -->
    <transition name="myTransition" :duration="{ enter: 500, leave: 2000 }">
      <div class="myName" v-show="show">我的名字</div>
    </transition>

    <!-- appear属性，表示在初始化时，也执行一次过渡 -->
    <transition
      appear
      enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__slideInLeft"
    >
      <div class="myName" v-show="show2">我的名字2</div>
    </transition>
    <div>
      <button @click="switchBtn">点击切换1</button>
      <button @click="show2 = !show2">点击切换2</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      show2: true,
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
  margin-bottom: 20px;
}
</style>