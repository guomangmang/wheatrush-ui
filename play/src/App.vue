<script setup>
import { AddCircle } from "@vicons/ionicons5";
import { ref } from "vue";

const createData = (level = 4, parentKey = "") => {
  if (!level) return [];
  const arr = new Array(6 - level).fill(0);
  return arr.map((_, index) => {
    const key = parentKey + level + index;
    return {
      key,
      xx: createLabel(level),
      children: createData(level - 1, key),
    };
  });
};

function createLabel(level) {
  if (level === 4) return "道生一";
  if (level === 3) return "一生二";
  if (level === 2) return "二生三";
  if (level === 1) return "三生万物";
}

const data = ref(createData());

const model = ref("hello");
</script>

<template>
  <gl-icon color="red" :size="50">
    <AddCircle></AddCircle>
  </gl-icon>
  <gl-tree
    label-field="xx"
    :data="data"
    key-field="key"
    children-field="children"
  >
  </gl-tree>
  <gl-button type="primary" disabled
    >上一页
    <gl-icon color="red" :size="20">
      <AddCircle></AddCircle>
    </gl-icon>
  </gl-button>
  {{ model }}
  <gl-input
    placeholder="占位符"
    v-model="model"
    :show-password="true"
    clearable
  >
    <template #prepend> HTTP: </template>
    <template #prefixIcon>
      <gl-icon color="red" :size="20">
        <AddCircle></AddCircle>
      </gl-icon>
    </template>

    <template #suffixIcon>
      <gl-icon color="red" :size="20">
        <AddCircle></AddCircle>
      </gl-icon>
    </template>
    <template #append> com </template>
  </gl-input>
</template>

<style scoped></style>
