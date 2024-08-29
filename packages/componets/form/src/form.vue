<template>
  <form :class="[bem.b()]">
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
defineOptions({
  name: "gl-form",
});

const addField = (field) => {
  fields.push(field);
};
const context = {
  ...props,
  addField,
};
provide("form", context);

const validate = async (callback) => {
  console.log("触发");
  let errors = {};
  for (const field of fields) {
    try {
      await field.validate("");
    } catch (error) {
      console.log(error, "error");
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
