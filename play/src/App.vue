<script setup>
import { AddCircle } from "@vicons/ionicons5";
import { ref, reactive } from "vue";
const radio1 = ref("1");
import light from "./components/breathingLight/index.vue";
const light2 = {
  type: 1,
};
const value = ref("100");

const value3 = ref(false);
const value4 = ref(false);
const value5 = ref(true);
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
      v-model="value3"
      size="samll"
      active-text="Pay by month"
      inactive-text="Pay by year"
    ></gl-switch>
    <gl-switch
      v-model="value3"
      size="samll"
      active-text="Pay by month"
      inactive-text="Pay by year"
    ></gl-switch>
  </div>
</template>

<style scoped></style>
