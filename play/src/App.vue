<script setup>
import { AddCircle } from "@vicons/ionicons5";
import { ref, reactive } from "vue";
import message from "@wheatrush/components/message";
const radio1 = ref("1");
import light from "./components/breathingLight/index.vue";

const light2 = {
  type: 1,
};
const value = ref("100");

const value3 = ref(false);
const value4 = ref(false);
const value5 = ref(true);
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];

const handleClick = () => {
  message({
    type: "success",
    message: "这是提示",
    duration: 3000,
  });
};

const handleClick2 = () => {
  message({
    type: "error",
    message: "这是提32示",
    duration: 3000,
  });
};
</script>

<template>
  <light :type="light2.type ? 'success' : 'error'" />
  <div>
    <gl-radio-group v-model="radio1">
      <gl-radio label="测试1" value="1"></gl-radio>
      <gl-radio label="测试2" value="2"></gl-radio>
    </gl-radio-group>

    <gl-switch
      v-model="value3"
      size="samll"
      active-text="Pay by month"
      inactive-text="Pay by year"
    ></gl-switch>
    <gl-switch
      v-model="value4"
      active-text="Pay by month"
      inactive-text="Pay by year"
    ></gl-switch>
    <gl-switch
      v-model="value3"
      size="large"
      active-text="Pay by month"
      inactive-text="Pay by year"
    ></gl-switch>

    <gl-select
      v-model="value"
      style="width: 240px"
      placeholder="这是placeholder"
      multiple
      @change="handleSelect"
    >
      <gl-options
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </gl-options>
    </gl-select>
  </div>
  <gl-button @click="handleClick">点击</gl-button>
  <gl-button @click="handleClick2">点击2</gl-button>
</template>

<style scoped></style>
