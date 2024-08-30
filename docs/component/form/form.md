# form 表单

表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

## 基本表单

最基础的表单包括各种输入表单项，比如 input、select、radio、checkbox 等。

在每一个 form 组件中，你需要一个 form-item 字段作为输入项的容器，用于获取值与验证值。

<script setup>
import { reactive,ref  } from 'vue'
const state = reactive({
    username:'',
    password:''
})
const validata = reactive({
  name: "",
  company: "",
  title:''
});
const formRef = ref(null);

const submit = () => {
  const form = formRef.value;
  form.validate((valid, errors) => {
     if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  });
};



// 校验规则
const rules  = reactive({
        name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在3-5位', trigger: 'blur' },
        ],
         company: [
            { required: true, message: '请输入公司名称', trigger: 'blur' },
        ],
        title :[
            { required: true, message: '请输入职位',trigger: 'blur' },
        ]
    })

</script>

  <gl-form :model="state" ref="formRef">
    <gl-form-item
      label="用户名"
    >
      <gl-input placeholder="请输入用户名" v-model="state.username"></gl-input>
    </gl-form-item>
    <gl-form-item
      label="密码"
    >
      <gl-input placeholder="请输入密码" v-model="state.password"></gl-input>
    </gl-form-item>
    <gl-form-item
    >
      <gl-button>提交</gl-button>
    </gl-form-item>
  </gl-form>

```vue
<script setup>
import { reactive } from "vue";
const state = reactive({
  username: "",
  password: "",
});
</script>
<template>
  <gl-form :model="state" ref="formRef">
    <gl-form-item label="用户名">
      <gl-input placeholder="请输入用户名" v-model="state.username"></gl-input>
    </gl-form-item>
    <gl-form-item label="密码">
      <gl-input placeholder="请输入密码" v-model="state.password"></gl-input>
    </gl-form-item>
    <gl-form-item>
      <gl-button>提交</gl-button>
    </gl-form-item>
  </gl-form>
</template>
```

## 表单校验

Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。

Form 组件提供了表单验证的功能，只需为 rules 属性传入约定的验证规则，并将 form-Item 的 prop 属性设置为需要验证的特殊键值即可。 校验规则参见 [async-validator](https://github.com/tmpfs/async-validate)

  <gl-form :model="validata" ref="formRef" :rules='rules'>
    <gl-form-item
      prop="name"
      label="姓名"
    >
      <gl-input placeholder="请输入姓名" v-model="validata.name"></gl-input>
    </gl-form-item>
    <gl-form-item
      prop="company"
      label="公司"
    >
      <gl-input placeholder="请输入公司" v-model="validata.company"></gl-input>
    </gl-form-item>
          <gl-form-item
      prop="title"
      label="职位"
    >
      <gl-input placeholder="请输入职位" v-model="validata.title"></gl-input>
    </gl-form-item>
    <gl-form-item>
      <gl-button @click="submit">按钮</gl-button>
    </gl-form-item>
  </gl-form>

```vue
<script setup>
import { reactive } from "vue";
const validata = reactive({
  name: "",
  company: "",
  title: "",
});
const formRef = ref(null);

const submit = () => {
  const form = formRef.value;
  form.validate((valid, errors) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
<template>
  <gl-form :model="validata" ref="formRef" :rules="rules">
    <gl-form-item prop="name" label="姓名">
      <gl-input placeholder="请输入姓名" v-model="validata.name"></gl-input>
    </gl-form-item>
    <gl-form-item prop="company" label="公司">
      <gl-input placeholder="请输入公司" v-model="validata.company"></gl-input>
    </gl-form-item>
    <gl-form-item prop="title" label="职位">
      <gl-input placeholder="请输入职位" v-model="validata.title"></gl-input>
    </gl-form-item>
    <gl-form-item>
      <gl-button @click="submit">按钮</gl-button>
    </gl-form-item>
  </gl-form>
</template>
```
