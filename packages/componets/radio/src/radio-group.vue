<template>
  <div ref="radioGroupRef" :class="bem.b('group')" role="radiogroup">
    <slot />
  </div>
</template>

<script>
const UPDATE_MODEL_EVENT = "update:modelValue";
</script>
<script setup>
defineOptions({
  name: "gl-radio-group",
});
import { radioGroupKey } from "./constants";
import { radioGroupProps, radioGroupEmits } from "./radio-group";
import { createNamespace } from "@wheatrush/utils/create";
import { nextTick, provide, reactive, toRefs, computed } from "vue";
const bem = createNamespace("radio");
const props = defineProps(radioGroupProps);
const emit = defineEmits(radioGroupEmits);

const changeEvent = (value) => {
  emit("update:modelValue", value);
  nextTick(() => emit("change", value));
};
const name = computed(() => {
  return props.name || "sdfggfnh";
});
provide(
  radioGroupKey,
  reactive({
    ...toRefs(props),
    changeEvent,
    name,
  })
);
</script>
