<template>
  <form :class="[bem.b()]" onsubmit="return false">
    <slot></slot>
  </form>
</template>

<script setup>
import { ref, provide, computed } from "vue";
import { createNamespace } from "@wheatrush/utils/create";
import { formProps } from "./form";
const bem = createNamespace("form");
const props = defineProps(formProps);
const fields = []; // 手机子元素的验证事件
const labelwidths = []; // 子元素的label的宽度集合
const labelwidth = ref();
defineOptions({
  name: "gl-form",
});

const addLabelWidth = (width) => {
  labelwidths.push(width);
  labelwidth.value = Math.max.apply(null, labelwidths);
};
const addField = (field) => {
  fields.push(field);
};
const context = {
  ...props,
  labelwidth,
  addField,
  addLabelWidth,
};
provide("form", context);

const validate = async (callback) => {
  let errors = {};
  for (const field of fields) {
    try {
      await field.validate("");
    } catch (error) {
      errors = {
        ...errors,
        ...error,
      };
    }
  }
  if (Object.keys(errors).length === 0) {
    return callback(true);
  } else {
    if (callback) {
      callback(false, errors);
    } else {
      return Promise.reject(errors);
    }
  }
};

defineExpose({
  validate,
});
</script>
