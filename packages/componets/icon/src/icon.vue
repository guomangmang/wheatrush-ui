<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup>
import { computed } from "vue";
import { createNamespace } from "@wheatrush/utils/create";
import { iconProps } from "./icon";
defineOptions({
  name: "gl-icon",
});
const bem = createNamespace("icon");
const props = defineProps(iconProps);

// 使用计算属性计算样式

const style = computed(() => {
  if (!props.size && !props.color) return {};
  return {
    ...(props.size ? { "font-size": props.size + "px" } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
console.log(style, "dsvdfj");
</script>
