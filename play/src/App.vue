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

const state = ref({
  username: "",
  password: "",
});
const formRef = ref(null);

const submit1 = () => {
  const form1 = formRef.value;
  form1.validate((valid, errors) => {
    console.log(valid, errors, "validate");
  });
};
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

  <gl-form :model="state" ref="formRef">
    <gl-form-item
      prop="username"
      label="用户名"
      :rules="[
        {
          required: true,
          min: 6,
          max: 16,
          message: '请输入正确用户名',
          trigger: 'change',
        },
      ]"
    >
      <gl-input placeholder="请输入用户名" v-model="state.username"></gl-input>
    </gl-form-item>
    <gl-form-item
      prop="password"
      label="用户名"
      :rules="[
        {
          required: true,
          min: 6,
          max: 16,
          message: '请输入正确密码',
          trigger: 'change',
        },
      ]"
    >
      <gl-input placeholder="请输入密码" v-model="state.password"></gl-input>
    </gl-form-item>
    <!-- <gl-button @click="submit1">按钮</gl-button> -->
  </gl-form>
  <button @click="submit1">按钮</button>
</template>

<style scoped></style>
