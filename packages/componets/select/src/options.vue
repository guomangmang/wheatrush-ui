<template>
  <li :class="[bem.e('item')]" @click="handleOptionsClick">
    <slot>
      {{ label || value }}
    </slot>
  </li>
</template>

<script setup>
defineOptions({
  name: "gl-options",
});
import { SelectKey } from "./constants.js";
import { inject, ref } from "vue";
import { optionsProps } from "./options.js";
import { createNamespace } from "@wheatrush/utils/create";
const props = defineProps(optionsProps);
const bem = createNamespace("select");

const selectData = inject("SelectKey");

const handleOptionsClick = () => {
  selectData.changeCurrentValue({
    value: props.value,
    text: props.label,
  });
};
</script>
