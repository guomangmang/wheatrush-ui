<template>
  <div
    :class="[
      bem.b(),
      bem.is('checked', checked),
      bem.m(size),
      bem.is('disabled', disabled),
    ]"
    @click.prevent="switchValue"
  >
    <input
      type="checkbox"
      :class="bem.e('input')"
      ref="input"
      :disabled="disabled"
    />
    <!-- 左侧文字 -->
    <span
      v-if="activeText"
      :class="[bem.e('label'), bem.em('label', 'left')]"
      >{{ activeText }}</span
    >
    <label for="checkboxInput" :class="bem.e('core')"></label>
    <span
      v-if="inactiveText"
      :class="[bem.e('label'), bem.em('label', 'right')]"
      >{{ inactiveText }}</span
    >
  </div>
</template>

<script setup>
import { computed, ref, nextTick, watch } from "vue";
defineOptions({
  name: "gl-switch",
});
import { switchProps, switchEmits } from "./switch.js";
import { createNamespace } from "@wheatrush/utils/create";
const bem = createNamespace("switch");
const props = defineProps(switchProps);
const emit = defineEmits(switchEmits);
const isControlled = ref(props.modelValue !== false);
const actualValue = computed(() => {
  return isControlled.value ? props.modelValue : false;
});
const checked = computed(() => actualValue.value === props.activeValue);
const input = ref();
const switchValue = () => {
  if (props.disabled) return;
  console.log(checked.value, "checked.value");
  const val = checked.value ? props.inactiveValue : props.activeValue;
  console.log(val, "val");
  emit("update:modelValue", val);
  // emit(CHANGE_EVENT, val)
  // emit(INPUT_EVENT, val)
  nextTick(() => {
    input.value.checked = checked.value;
  });
};

watch(
  () => props.modelValue,
  () => {
    isControlled.value = true;
  }
);
</script>
