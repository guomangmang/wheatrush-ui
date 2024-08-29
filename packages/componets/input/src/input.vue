<template>
  <div :class="[bem.b()]">
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" :class="bem.be('group', 'prepend')">
        <slot name="prepend" />
      </div>

      <div ref="wrapperRef" :class="wrapperKls">
        <!-- prefix slot -->
        <span v-if="$slots.prefixIcon" :class="bem.e('prefix')">
          <slot name="prefixIcon" />
        </span>

        <input
          ref="input"
          :class="bem.e('inner')"
          v-bind="attrs"
          :placeholder="placeholder"
          :readonly="readonly"
          :aria-label="label"
          :disabled="disable"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
        />

        <!-- suffix slot -->
        <span v-if="$slots.suffixIcon" :class="bem.e('suffix')">
          <slot name="suffixIcon" />
        </span>
        <gl-icon
          v-if="showPwdVisible"
          :class="[bem.e('icon'), bem.e('password')]"
          @click="handlePasswordVisible"
        >
          <EyeOutline v-if="passwordVisible" />
          <EyeOffOutline v-else />
        </gl-icon>
        <gl-icon
          v-if="showClear"
          :class="[bem.e('icon'), bem.e('password')]"
          @click="clear"
        >
          <Close />
        </gl-icon>
      </div>

      <!-- append slot -->
      <div v-if="$slots.append" :class="bem.be('group', 'append')">
        <slot name="append" />
      </div>
    </template>
  </div>
</template>

<script setup>
import { EyeOutline, EyeOffOutline, Close } from "@vicons/ionicons5";
import { createNamespace } from "@wheatrush/utils/create";
import { inputProps, inputEmits } from "./input";
import {
  useSlots,
  computed,
  useAttrs,
  watch,
  ref,
  onMounted,
  nextTick,
  inject,
} from "vue";
defineOptions({
  name: "gl-input",
  inheritAttrs: false,
});
const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);
const slots = useSlots();
const attrs = useAttrs; // 强制用户绑定其他属性时直接绑定到input上
const bem = createNamespace("input");
const wrapperKls = computed(() => [bem.e("wrapper")]);
// const inputDisabled = useFormDisabled()
const input = ref(null);
onMounted(() => {
  setNativeInputValue();
});
const setNativeInputValue = () => {
  const inputEle = input.value;
  if (!inputEle) {
    return;
  }
  inputEle.value = String(props.modelValue);
};

const formItemContext = inject("form-item");
watch(
  () => props.modelValue,
  () => {
    formItemContext.validate("change");
    setNativeInputValue();
  }
);

const showPwdVisible = computed(
  () => props.showPassword && !props.disable && !props.readonly
);
const showClear = computed(
  () => props.clearable && !props.disable && !props.readonly && props.modelValue
);

const handleInput = (event) => {
  const value = event.target.value;
  if (value) {
    emit("input", value);
    emit("update:modelValue", value);
  }
};
const handleFocus = (event) => {
  emit("focus", event);
};
const handleChange = (event) => {
  const value = event.target.value;
  emit("change", value);
};

const handleBlur = (event) => {
  emit("blur", event);
  formItemContext.validate("blur");
};

const focus = async (event) => {
  await nextTick(() => {});
  input.value?.focus();
};
const passwordVisible = ref(false);
const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value;
  focus();
};

const clear = () => {
  emit("clear");
  emit("update:modelValue", "");
  focus();
};
</script>
