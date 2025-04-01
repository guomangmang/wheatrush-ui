# Message 消息提示

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

<script setup>
import message from "@wheatrush/components/message";
const open1 = () => {
    message({
    type: "info",
    message: "这是提32示",
    duration: 3000,
  });
}

const open2 = () => {
    message({
    type: "success",
    message: "这是提示",
    duration: 3000,
  });
}

const open3 = () => {
    message({
    type: "warning",
    message: "这是提示",
    duration: 3000,
  });
}

const open4 = () => {
    message({
    type: "error",
    message: "这是提示",
    duration: 3000,
  });
}
</script>

<div style="display:flex;align-items: center;gap:20px">
 <gl-button @click="open1" type='primary'>Message</gl-button>
 <gl-button @click="open2"type='success'>Success</gl-button>
 <gl-button @click="open3" type='warning'>Warning</gl-button>
 <gl-button @click="open4"  type="danger">Error</gl-button>
</div>

```vue
<script setup>
import message from "@wheatrush/components/message";
const open1 = () => {
  message({
    type: "info",
    message: "这是提示",
    duration: 3000,
  });
};

const open2 = () => {
  message({
    type: "success",
    message: "这是提示",
    duration: 3000,
  });
};

const open3 = () => {
  message({
    type: "warning",
    message: "这是提示",
    duration: 3000,
  });
};

const open4 = () => {
  message({
    type: "error",
    message: "这是提示",
    duration: 3000,
  });
};
</script>

<template>
  <div>
    <gl-button @click="open1" type="primary">Message</gl-button>
    <gl-button @click="open2" type="success">Success</gl-button>
    <gl-button @click="open3" type="warning">Warning</gl-button>
    <gl-button @click="open4" type="danger">Error</gl-button>
  </div>
</template>
```
