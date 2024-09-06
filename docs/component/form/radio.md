# radio 单选框

在一组备选项中进行单选

## 基础用法

要使用 Radio 组件，只需要设置 v-model 绑定变量， 选中意味着变量的值为相应 Radio value 属性的值， value 可以是 String、Number 或 Boolean。

<script setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio = ref('disabled')
const radio3 = ref('1')
</script>

<div style="margin-top:60px">
 <gl-radio-group v-model="radio1">
      <gl-radio value="1" >选项1</gl-radio>
      <gl-radio value="2" >选项2</gl-radio>
    </gl-radio-group>
</div>

```vue
<script setup>
import { ref } from "vue";

const radio1 = ref("1");
</script>

<template>
  <gl-radio-group v-model="radio1">
    <gl-radio value="1">选项1</gl-radio>
    <gl-radio value="2">选项2</gl-radio>
  </gl-radio-group>
</template>
```

## 禁用状态

disabled 属性可以用来控制单选框的禁用状态。

你只需要为单选框设置 disabled 属性就能控制其禁用状态。

<gl-radio v-model="radio" disabled value="disabled">Option A</gl-radio>
<gl-radio v-model="radio" disabled value="selected and disabled"> Option B</gl-radio>

```vue
<script setup>
import { ref } from "vue";

const radio1 = ref("1");
</script>

<template>
  <div>
    <gl-radio v-model="radio" disabled value="disabled">Option A</gl-radio>
    <gl-radio v-model="radio" disabled value="selected and disabled">
      Option B
    </gl-radio>
  </div>
</template>
```

## Radio API

### Radio Attributes

| 参数                  | 说明                                                       | 类型                      | 默认值  |
| :-------------------- | :--------------------------------------------------------- | :------------------------ | :------ |
| model-value / v-model | 选中项绑定值                                               | string / number / boolean | —       |
| value                 | 单选框的值                                                 | string / number / boolean | —       |
| name                  | 原始 name 属性                                             | String                    | —       |
| disabled              | 是否禁用                                                   | Boolean                   | `false` |
| label                 | 单选框的 label 如果 value 没有值， label 则作为 value 使用 | String                    | -       |

## Radio Events

| 事件名 | 说明                   | 类型     |
| :----- | :--------------------- | :------- |
| change | 绑定值变化时触发的事件 | Function |

## Radio Slots

| 插槽名  | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |

## RadioGroup API

### RadioGroup Attributes

| 参数                  | 说明                                                       | 类型                      | 默认值  |
| :-------------------- | :--------------------------------------------------------- | :------------------------ | :------ |
| model-value / v-model | 选中项绑定值                                               | string / number / boolean | —       |
| value                 | 单选框的值                                                 | string / number / boolean | —       |
| name                  | 原始 name 属性                                             | String                    | —       |
| disabled              | 是否禁用                                                   | Boolean                   | `false` |
| label                 | 单选框的 label 如果 value 没有值， label 则作为 value 使用 | String                    | -       |

## RadioGroup Events

| 事件名 | 说明                   | 类型     |
| :----- | :--------------------- | :------- |
| change | 绑定值变化时触发的事件 | Function |

## RadioGroup Slots

| 插槽名  | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |
