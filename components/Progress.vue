<template>
  <div
    :style="{
      width: ((slide + 1) / total) * 100 + '%',
      backgroundColor: color,
    }"
    class="h-1 absolute bottom-0 opacity-50"
  ></div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
    slide: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: "#000",
    },
  },
};
</script>
