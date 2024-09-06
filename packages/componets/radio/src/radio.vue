<template>
  <label
    :class="[
      bem.b(),
      bem.is('disabled', disabled),
      bem.is('checked', modelValue === actualValue),
    ]"
  >
    <span
      :class="[
        bem.e('input'),
        bem.is('disabled', disabled),
        bem.is('checked', modelValue === actualValue),
      ]"
    >
      <input
        ref="radioRef"
        v-model="modelValue"
        :class="bem.e('original')"
        :value="actualValue"
        :name="name || radioGroup?.name"
        :disabled="disabled"
        :checked="modelValue === actualValue"
        type="radio"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        @click.stop
      />
      <span :class="bem.e('inner')" />
    </span>
    <span :class="bem.e('label')" @keydown.stop>
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script setup>
defineOptions({
  name: "gl-radio",
});
import { createNamespace } from "@wheatrush/utils/create";
import { useRadio } from "./use-radio.js";
import { radioProps, radioEmits } from "./radio.js";

const props = defineProps(radioProps);
const bem = createNamespace("radio");
const emit = defineEmits(radioEmits);
const { radioRef, actualValue, radioGroup, modelValue } = useRadio(props, emit);
</script>
