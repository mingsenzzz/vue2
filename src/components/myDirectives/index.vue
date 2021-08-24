<template>
  <ul>
    <li
      v-for="item in list"
      :key="item.id"
      v-clickedDirective:propKey="item.text"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          text: "第一个",
        },
        {
          id: 2,
          text: "第二个",
        },
        {
          id: 3,
          text: "第三个",
        },
      ],
    };
  },
  directives: {
    clickedDirective: {
      //当绑定的元素插入到dom时
      inserted(el, data) {
        //data {arg: propKey, value: item.text  }
        el.addEventListener("click", () => {
          console.log(data.value);
        });
      },
      bind() {},
      update() {},
      componentUpdated() {},
      unbind() {},
    },
  },
};
</script>

<style>
</style>