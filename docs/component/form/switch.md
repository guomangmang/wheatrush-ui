# switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 v-model 到一个 Boolean 类型的变量。

<script setup>
import { ref } from 'vue'

const value1 = ref(true)

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
