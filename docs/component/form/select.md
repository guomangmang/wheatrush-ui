# select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选 v-model 的值为当前被选中的 el-option 的 value 属性值

<script setup>
import { ref } from 'vue'

const value = ref('')
const value1 = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<div>
<gl-select
      v-model="value"
      placeholder="Select"
      size="large"
      style="width: 240px"
    >
<gl-options
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
</gl-select>
</div>

```vue
<script setup>
import { ref } from "vue";

const value = ref("");

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
</script>

<template>
  <gl-select v-model="value" placeholder="Select" style="width: 240px">
    <gl-options
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </gl-select>
</template>
```

## 基础多选

多选选择器使用 tag 组件来展示已选中的选项。

<gl-select
      v-model="value1"
      placeholder="Select"
      multiple
      style="width: 240px"
    >
<gl-options
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
</gl-select>

```vue
<script setup>
import { ref } from "vue";

const value = ref("");

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
</script>

<template>
  <gl-select v-model="value" placeholder="Select" multiple style="width: 240px">
    <gl-options
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </gl-select>
</template>
```

## Select API

### Select Attributes

| 参数                  | 说明         | 类型                      | 默认值  |
| :-------------------- | :----------- | :------------------------ | :------ |
| model-value / v-model | 选中项绑定值 | string / number / boolean | —       |
| multiple              | 是否多选     | Boolean                   | `false` |

## Select Events

| 事件名 | 说明                 | 类型     |
| :----- | :------------------- | :------- |
| change | 选中值发生变化时触发 | Function |

## Option API

### Option Attributes

| 参数  | 说明                                    | 类型                               | 默认值 |
| :---- | :-------------------------------------- | :--------------------------------- | :----- |
| value | 选项的值                                | string / number / boolean / object | `	—`    |
| label | 选项的标签，若不设置则默认与 value 相同 | string / number                    | `	—`    |
