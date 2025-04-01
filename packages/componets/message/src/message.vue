<template>
  <transition
    :name="bem.b('fade')"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="isVisable"
      :class="[bem.b(), bem.m(type)]"
      :style="{
        top: top + 'px',
      }"
    >
      <span :class="[bem.m('content')]">
        {{ message }}
      </span>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import { messageProps } from "./message.js";
import { createNamespace } from "@wheatrush/utils/create";
const props = defineProps(messageProps);
const bem = createNamespace("message");
const isVisable = ref(false);
const top = ref(0);
const margin = ref(20);
const height = ref(40);
const setVisibility = (Visable) => {
  return new Promise((resolve) => {
    isVisable.value = Visable;
    setTimeout(() => {
      resolve();
    }, 300);
  });
};
const setTop = (topvalue) => {
  top.value = topvalue;
  //   return top;
};
defineExpose({
  setVisibility,
  setTop,
  margin,
  height,
});
</script>
