# input 输入框

通过鼠标或键盘输入字符

## 基础用法

<script setup>
    import { Home,Close } from "@vicons/ionicons5";
    
    import { ref } from 'vue'
    const model = ref("hello");
    const model2 = ref("hello");
    const input = ref("");
    const input2 = ref('')
    const input3 = ref('')
    const input4 = ref('')
</script>

<gl-input
    placeholder="请输入"
    v-model="model"
    >
</gl-input>

```vue
<script setup>
import { ref } from "vue";
const model = ref("hello");
</script>

<template>
  <el-input v-model="model" placeholder="Please input" />
</template>
```

## 禁用状态

通过 disabled 属性指定是否禁用 input 组件

<gl-input
    placeholder="请输入"
    v-model="model2"
    disable
    >
</gl-input>

```vue
<script setup>
import { ref } from "vue";
const model2 = ref("hello");
</script>

<template>
  <gl-input placeholder="请输入" v-model="model2" disable> </gl-input>
</template>
```

## 一键清空

使用 clearable 属性即可得到一个可一键清空的输入框

<gl-input
    v-model="input"
    placeholder="Please input"
    clearable>
</gl-input>

```vue
<template>
  <gl-input v-model="input" placeholder="Please input" clearable />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
```

## 密码框

使用 show-password 属性即可得到一个可切换显示隐藏的密码框

<gl-input
    v-model="input2"
    type="password"
    placeholder="Please input password"
    show-password>
</gl-input>

```vue
<template>
  <el-input
    v-model="input2"
    type="password"
    placeholder="Please input password"
    show-password
  />
</template>

<script setup>
import { ref } from "vue";
const input2 = ref("");
</script>
```

# 带图标的输入框

要在输入框中添加图标， prefix 和 suffix 命名的插槽

<gl-input
    placeholder="请输入"
    v-model="input3">
<template #prefixIcon>
<gl-icon color="red" :size="20">
<Home></Home>
</gl-icon>
</template>

</gl-input>

<div  style="margin-top:20px">
<gl-input
    placeholder="请输入"
    v-model="input3">

<template #suffixIcon>
<gl-icon color="red" :size="20">
<Home></Home>
</gl-icon>
</template>

</gl-input>
</div>

```vue
<template>
  <gl-input placeholder="请输入" v-model="input3">
    <template #prefixIcon>
      <gl-icon color="red" :size="20">
        <Home></Home>
      </gl-icon>
    </template>
  </gl-input>

  <gl-input placeholder="请输入" v-model="input3">
    <template #suffixIcon>
      <gl-icon color="red" :size="20">
        <Home></Home>
      </gl-icon>
    </template>
  </gl-input>
</template>

<script setup>
import { Home } from "@vicons/ionicons5";
import { ref } from "vue";
const input3 = ref("");
</script>
```

## 复合型输入框

可以在输入框中前置或后置一个元素，通常是标签或按钮。

<gl-input
    placeholder="请输入"
    v-model="input4">
<template #prepend> HTTP: </template>
<template #append> com </template>
</gl-input>

<div  style="margin-top:20px">
<gl-input
    placeholder="请输入"
    v-model="input4">
<template #append> com </template>
</gl-input>
</div>

```vue
<template>
  <gl-input placeholder="请输入" v-model="input4">
    <template #prepend> HTTP: </template>
    <template #append> com </template>
  </gl-input>

  <gl-input placeholder="请输入" v-model="input4">
    <template #append> com </template>
  </gl-input>
</template>

<script setup>
import { Home } from "@vicons/ionicons5";
import { ref } from "vue";
const input4 = ref("");
</script>
```

## API

### input Attributes

| 参数          | 说明                             | 类型    | 可选值                                                                                                      | 默认值  |
| :------------ | :------------------------------- | :------ | :---------------------------------------------------------------------------------------------------------- | :------ |
| type          | 输入框类型                       | String  | 等[原生 input 类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | `text`  |
| v-model       | 绑定值                           | String  | String                                                                                                      | -       |
| placeholder   | 输入框占位文本                   | String  | -                                                                                                           | -       |
| clearable     | 是否显示清除按钮                 | Boolean | `true`、`false`                                                                                             | `false` |
| disabled      | 是否禁用                         | Boolean | `true`、`false`                                                                                             | `false` |
| show-password | 是否显示切换密码图标             | Boolean | `true`、`false`                                                                                             | `false` |
| readonly      | 原生 readonly 属性，是否只读     | Boolean | `true`、`false`                                                                                             | `false` |
| label         | 等价于原生 input aria-label 属性 | String  | -                                                                                                           | -       |

### input Events

| 事件名 | 说明                                                          |
| :----- | :------------------------------------------------------------ |
| blur   | 当选择器的输入框失去焦点时触发                                |
| focus  | 当选择器的输入框获得焦点时触发                                |
| change | 仅当 modelValue 改变时，当输入框失去焦点或用户按 Enter 时触发 |
| input  | 在 Input 值改变时触发                                         |
| clear  | 在点击由 clearable 属性生成的清空按钮时触发                   |
