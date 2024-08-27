<template>
  <button
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(size),
      bem.is('round', round),
      bem.is('plain', plain),
      bem.is('circle', circle),
      bem.is('disabled', disabled),
      bem.is('loading', loading),
    ]"
    :disabled="disabled || loading"
    @click="onBtnClick"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading" />
      <!-- :class="bem.is('loading', loading)" -->
      <div :class="bem.is('loading', loading)"></div>
    </template>
    <gl-icon v-if="icon" :size="20" color="#606266">
      <component :is="icon" v-if="icon" />
    </gl-icon>
    <span :class="{ [bem.em('text', 'expand')]: hasMultipleSlots }"
      ><slot />
    </span>
  </button>
</template>

<script>
const ENITS_CLICK = "click";
</script>
<script setup>
import { createNamespace } from "@wheatrush/utils/create";
import { buttonProps } from "./button";
import { useButton } from "./use-button";

const emits = defineEmits([ENITS_CLICK]);
defineOptions({
  name: "gl-button",
});
const { hasMultipleSlots } = useButton();
const bem = createNamespace("button");
const props = defineProps(buttonProps);

const onBtnClick = () => {
  if (props.loading) return;
  if (props.href) {
    window.open(props.href, props.target);
    return;
  }
  emits(ENITS_CLICK);
};
</script>
