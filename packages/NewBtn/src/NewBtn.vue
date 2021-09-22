<template>
  <button>vue3 自定义公共组件</button>
</template>

<script>
export default {
  name: "NewBtn",
  props: {
    type: {
      type: String,
      default: "",
      required: false,
    },
  },
};
</script>

<style></style>
