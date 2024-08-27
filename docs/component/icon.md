# Icon 图标

gl-ui 推荐使用 xicons 作为图标库

```
$ pnpm install @vicons/ionicons5
```

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目中使用

<script setup lang="ts">
    import { AddCircle } from "@vicons/ionicons5";
</script>
<div style="display:flex;align-items: center;">
 <gl-icon color="red" :size="50">
    <AddCircle></AddCircle>
</gl-icon>
 <gl-icon color="green" :size="50">
    <AddCircle></AddCircle>
</gl-icon>
</div>

```vue
<script setup lang="ts">
import { AddCircle } from "@vicons/ionicons5";
</script>
<template>
  <gl-icon color="red" :size="50">
    <AddCircle></AddCircle>
  </gl-icon>
</template>
```

## api

### Icon Props

| 标题  | 类型            | 默认值    | 说明     |
| ----- | --------------- | --------- | -------- |
| color | string          | undefined | 图标颜色 |
| size  | number\| string | undefined | 图片大小 |
