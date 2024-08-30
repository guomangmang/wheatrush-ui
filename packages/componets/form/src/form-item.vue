<template>
  <div
    :class="[
      bem.b(),
      bem.is('error', validateState === 'error'),
      bem.is('success', validateState === 'success'),
    ]"
  >
    <label :class="bem.e('label')" ref="labelRef" :style="style">
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <div :class="bem.e('content')">
      <slot></slot>
      <div :class="bem.e('error')">{{ validateMessage }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, computed, inject, onMounted } from "vue";
import { createNamespace } from "@wheatrush/utils/create";
import { formItemProps } from "./form-item";
import AsyncValidator from "async-validator";
const bem = createNamespace("form-item");
const props = defineProps(formItemProps);
const formContext = inject("form");
const labelRef = ref(null);
defineOptions({
  name: "gl-form-item",
});

// 处理label的样式
const style = computed(() => {
  console.log(formContext, "formContext");
  return {
    ...(formContext.labelwidth.value
      ? { width: formContext.labelwidth.value + "px" }
      : {}),
  };
});

// 这里主要是验证逻辑
const validateState = ref();
const validateMessage = ref("");
const converArray = (rules) => {
  return rules ? (Array.isArray(rules) ? rules : [rules]) : [];
};
const _rules = computed(() => {
  // 合并规则
  const myRules = converArray(props.rules);
  const formRules = formContext.rules;

  if (formRules && props.prop) {
    const _temp = formRules[props.prop];
    if (_temp) {
      myRules.push(...converArray(_temp));
    }
  }
  return myRules;
});

const getRuleFiltered = (trigger) => {
  const rules = _rules.value;
  return rules.filter((rule) => {
    if (!rule.trigger || !trigger) return true;
    if (Array.isArray(rule.trigger)) {
      return rule.trigger.includes(trigger);
    } else {
      return rule.trigger === trigger;
    }
  });
};

// 成功处理函数

const successHandle = () => {
  console.log("成功");
  validateState.value = "success";
  validateMessage.value = "";
};

// 失败处理函数
const errorHandle = (err) => {
  validateState.value = "error";
  validateMessage.value = err[0].message;
};
const validate = async (trigger, callback) => {
  const rules = getRuleFiltered(trigger);
  const modelName = props.prop;
  const validator = new AsyncValidator({
    [modelName]: rules,
  });
  const model = formContext.model;
  return validator
    .validate({
      [modelName]: model[modelName],
    })
    .then(() => {
      successHandle();
    })
    .catch(({ errors, fields }) => {
      errorHandle(errors);
      return Promise.reject(fields);
    });
};

const context = {
  ...props,
  validate,
};

provide("form-item", context);
onMounted(() => {
  const width = getLabelWidth();
  formContext.addField(context);
  formContext.addLabelWidth(width);
});

const getLabelWidth = () => {
  const label = labelRef.value;
  if (label) {
    const { width } = label.getBoundingClientRect();
    return width;
  }
};
</script>
