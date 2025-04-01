# switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 v-model 到一个 Boolean 类型的变量。

<script setup>
import { ref } from 'vue'

const value = ref(true)
const value1 = ref(true);

const value3 = ref(true);
const value4 = ref(false);
const value5 = ref(false);
</script>

<gl-switch v-model="value1" />

```vue
<template>
  <gl-switch v-model="value1" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value1 = ref(true);
</script>
```

## 尺寸

<div>
    <gl-switch  v-model="value" size="small" active-text="Open"
    inactive-text="Close"></gl-switch>
</div>
<div>
    <gl-switch  v-model="value" active-text="Open"
    inactive-text="Close"/>
</div>
<div>
    <gl-switch  v-model="value" size="large" active-text="Open"
    inactive-text="Close"/>
</div>

```vue
<template>
  <gl-switch
    v-model="value"
    size="large"
    active-text="Open"
    inactive-text="Close"
  />
  <br />
  <el-switch v-model="value" active-text="Open" inactive-text="Close" />
  <br />
  <gl-switch
    v-model="value"
    size="small"
    active-text="Open"
    inactive-text="Close"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref(true);
</script>
```

## 文字描述

使用 active-text 属性与 inactive-text 属性来设置开关的文字描述

<div>
<gl-switch
    v-model="value3"
    active-text="Open"
    inactive-text="Close"
  />
</div>

<gl-switch
    v-model="value3"
    active-text="开"
    inactive-text="关"
  />

```vue
<template>
<gl-switch
    v-model="value3"
    active-text="Open"
    inactive-text="Close"
  />

<gl-switch
    v-model="value3"
    active-text="开"
    inactive-text="关"
  />
</template>

<script setup>
import { ref } from "vue";

const value3 = ref(true);
```

## Switch API

### Switch Attributes

| 参数                  | 说明                                                                 | 类型                      | 默认值 |
| :-------------------- | :------------------------------------------------------------------- | :------------------------ | :----- |
| model-value / v-model | 绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型 | string / number / boolean | —      |
| disabled              | 是否禁用                                                             | boolean                   | false  |
| size                  | switch 的大小                                                        | enum                      | —      |
| active-text           | switch 打开时的文字描述                                              | string                    | ``     |
| inactive-text         | switch 的状态为 off 时的文字描述                                     | string                    | ''     |

## Switch Events

| 事件名 | 说明                   | 类型     |
| :----- | :--------------------- | :------- |
| change | 绑定值变化时触发的事件 | Function |
