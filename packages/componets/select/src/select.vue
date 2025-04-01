<template>
  <div :class="[bem.b()]" @click="handleSelectClick">
    <!-- 文本框 -->
    <div :class="[bem.e('wrapper')]">
      <div :class="[bem.e('selection')]">
        <template v-if="optionsSelected.length">
          <div v-if="!multiple">
            {{ optionsSelected[0] && optionsSelected[0].text }}
          </div>
          <div :class="bem.e('labels')" v-else>
            <span
              :class="bem.e('labels__item')"
              v-for="(item, index) in optionsSelected"
              :key="index"
            >
              <span class="mku-global-ellipsis">{{ item.text }}</span>
              <gl-icon color="#ccc" :size="20" @click.stop="closeTag(item)">
                <CloseOutline />
              </gl-icon>
            </span>
          </div>
        </template>
        <!-- placeholder -->
        <div v-else :class="[bem.e('placeholder')]">
          <span>{{ placeholder }}</span>
        </div>
      </div>
      <div :class="bem.e('suffix')">
        <gl-icon color="#ccc" :size="20">
          <ChevronDown v-if="!isOpened" />
          <ChevronUp v-else />
        </gl-icon>
      </div>
    </div>

    <!-- dropdown -->
    <transition name="gl-select-dropdown">
      <ul
        :class="bem.e('menu')"
        v-show="isOpened && !disabled"
        @click.stop="handleDropdownClick"
      >
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>

<script setup>
defineOptions({
  name: "gl-select",
});
import { ref, provide } from "vue";
import { ChevronDown, ChevronUp, CloseOutline } from "@vicons/ionicons5";
import { createNamespace } from "@wheatrush/utils/create";
import { selectProps, selectEmit } from "./select.js";
import { SelectKey } from "./constants.js";
const bem = createNamespace("select");
const props = defineProps(selectProps);
const emit = defineEmits(selectEmit);
const isClickAtComponent = ref(false);
const isOpened = ref(false);
const optionsSelected = ref([]);

const changeCurrentValue = (data) => {
  let validateValue;
  if (props.multiple) {
    const index = optionsSelected.value.findIndex(
      (item) => item.value === data.value
    );
    if (index > -1) {
      optionsSelected.value.splice(index, 1);
    } else {
      optionsSelected.value.push(data);
    }
    validateValue = optionsSelected.value.map((e) => e.value);
  } else {
    validateValue = data.value;
    optionsSelected.value = [data];
  }

  emit("updata:modelValue", validateValue);
  emit("change", validateValue);
};
const context = {
  ...props,
  changeCurrentValue,
};
provide("SelectKey", context);

//  下拉框的显示与隐藏
const handleSelectClick = () => {
  if (props.disabled) return;
  isClickAtComponent.value = true;
  isOpened.value = !isOpened.value;
};

const handleDropdownClick = () => {
  if (props.disabled) return;
  if (props.multiple) {
    isOpened.value = true;
  } else {
    isOpened.value = !isOpened.value;
  }
};

const closeTag = (option) => {
  optionsSelected.value = optionsSelected.value.filter(
    (item) => item.value !== option.value
  );

  emit("updata:modelValue", optionsSelected.value);
  emit("change", optionsSelected.value);
  // this.popper.scheduleUpdate();
  // this.$emit('input', this.optionsSelected.map((e) => e.value));
};
</script>
