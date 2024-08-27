# button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

<script setup lang="ts">
    import { AddOutline,AddCircleOutline,CallOutline,CloseSharp,WarningOutline,TimerOutline,SendSharp } from "@vicons/ionicons5";
</script>
<div style="display:flex;align-items: center;gap:20px">
 <gl-button type='default'>默认按钮</gl-button>
 <gl-button type='primary'>主要按钮</gl-button>
 <gl-button type='success'>成功按钮</gl-button>
 <gl-button type='info'>信息按钮</gl-button>
 <gl-button type='warning'>警告按钮</gl-button>
 <gl-button type="danger">危险按钮</gl-button>
</div>
<div style="display:flex;align-items: center;gap:20px;margin-top:20px">
 <gl-button type='default' round>圆角按钮</gl-button>
 <gl-button type='primary' round>主要按钮</gl-button>
 <gl-button type='success' round>成功按钮</gl-button>
 <gl-button type='info' round>信息按钮</gl-button>
 <gl-button type='warning' round>警告按钮</gl-button>
 <gl-button type="danger" round>危险按钮</gl-button>
</div>

<div style="display:flex;align-items: center;gap:20px;margin-top:20px">
 <gl-button type='default' :icon='AddCircleOutline' circle></gl-button>
 <gl-button type='primary' :icon='AddOutline' circle></gl-button>
 <gl-button type='success' :icon='CallOutline' circle></gl-button>
 <gl-button type='info' :icon='TimerOutline' circle></gl-button>
 <gl-button type='warning' :icon='WarningOutline' circle></gl-button>
 <gl-button type="danger" :icon='CloseSharp' circle></gl-button>
</div>

```vue
<script setup lang="ts">
import {
  AddOutline,
  AddCircleOutline,
  CallOutline,
  CloseSharp,
  WarningOutline,
  TimerOutline,
} from "@vicons/ionicons5";
</script>
<template>
  <div>
    <gl-button type="default">默认按钮</gl-button>
    <gl-button type="primary">主要按钮</gl-button>
    <gl-button type="success">成功按钮</gl-button>
    <gl-button type="info">信息按钮</gl-button>
    <gl-button type="warning">警告按钮</gl-button>
    <gl-button type="danger">危险按钮</gl-button>
  </div>
  <div>
    <gl-button type="default" round>圆角按钮</gl-button>
    <gl-button type="primary" round>主要按钮</gl-button>
    <gl-button type="success" round>成功按钮</gl-button>
    <gl-button type="info" round>信息按钮</gl-button>
    <gl-button type="warning" round>警告按钮</gl-button>
    <gl-button type="danger" round>危险按钮</gl-button>
  </div>

  <div>
    <gl-button type="default" :icon="AddCircleOutline" circle></gl-button>
    <gl-button type="primary" :icon="AddOutline" circle></gl-button>
    <gl-button type="success" :icon="CallOutline" circle></gl-button>
    <gl-button type="info" :icon="TimerOutline" circle></gl-button>
    <gl-button type="warning" :icon="WarningOutline" circle></gl-button>
    <gl-button type="danger" :icon="CloseSharp" circle></gl-button>
  </div>
</template>
```

## 禁用状态

按钮不可用状态。

<div style="display:flex;align-items: center;gap:20px">
 <gl-button type='default' disabled>默认按钮</gl-button>
 <gl-button type='primary' disabled>主要按钮</gl-button>
 <gl-button type='success' disabled>成功按钮</gl-button>
 <gl-button type='info' disabled>信息按钮</gl-button>
 <gl-button type='warning' disabled>警告按钮</gl-button>
 <gl-button type="danger" disabled>危险按钮</gl-button>
</div>

```vue
<script setup>
<div>
  <gl-button type="default" disabled>
    默认按钮
  </gl-button>
  <gl-button type="primary" disabled>
    主要按钮
  </gl-button>
  <gl-button type="success" disabled>
    成功按钮
  </gl-button>
  <gl-button type="info" disabled>
    信息按钮
  </gl-button>
  <gl-button type="warning" disabled>
    警告按钮
  </gl-button>
  <gl-button type="danger" disabled>
    危险按钮
  </gl-button>
</div>;
</script>
```

## 图标按钮

可以单独使用图标，也可以使用插槽进行自定义图标位置

<div style="display:flex;align-items: center;gap:20px">
 <gl-button type='primary' :icon='AddCircleOutline'></gl-button>
 <gl-button type='primary' :icon='SendSharp'></gl-button>
  <gl-button type='primary'>
  分享
  <gl-icon>
  <SendSharp/>
  </gl-icon>
  </gl-button>
</div>

```vue
<script setup>
<div style="display:flex;align-items: center;gap:20px">
 <gl-button type='primary' :icon='AddCircleOutline'></gl-button>
 <gl-button type='primary' :icon='SendSharp'></gl-button>
  <gl-button type='primary'>
    分享
  <gl-icon>
    <SendSharp/>
  </gl-icon>
  </gl-button>
</div>
</script>
```

## 不同尺寸

<div style="display:flex;align-items: center;gap:20px">
 <gl-button type='primary' size="samll" >小型按钮</gl-button>
 <gl-button type='primary' size="middle">中等按钮</gl-button>
 <gl-button type='primary' size="large">大型按钮</gl-button>
</div>

```vue
<template>
  <div>
    <gl-button type="primary" size="samll">小型按钮</gl-button>
    <gl-button type="primary" size="middle">中等按钮</gl-button>
    <gl-button type="primary" size="large">大型按钮</gl-button>
  </div>
</template>
```

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态,通过设置 loading 属性为 true 来显示加载中状态。

> 您可以使用 loading 插槽或 loadingIcon 属性自定义您的 loading 图标

<div>
  <gl-button type="primary" loading>Loading</gl-button>
</div>

```vue
<template>
  <gl-button type="primary" loading>Loading</gl-button>
</template>
```

## 跳转外部连接

可以通过 herf 属性跳转外部链接，配合 target 使用时可以控制打开的方式

<div style="display:flex;align-items: center;gap:20px">
<gl-button
type="primary"
href="https://github.com/element-plus/element-plus"
target="_blank"
rel="noopener noreferrer"
>
    a(在新标签页打开)
  </gl-button>
  <gl-button
type="primary"
href="https://github.com/element-plus/element-plus"
target="_self"
rel="noopener noreferrer"
>
    a(在本标签页打开)
  </gl-button>
</div>

```vue
<template>
  <div>
    <gl-button
      type="primary"
      href="https://github.com/element-plus/element-plus"
      target="_blank"
      rel="noopener noreferrer"
    >
      a(在新标签页打开)
    </gl-button>
    <gl-button
      type="primary"
      href="https://github.com/element-plus/element-plus"
      target="_self"
      rel="noopener noreferrer"
    >
      a(在本标签页打开)
    </gl-button>
  </div>
</template>
```

## Button API

### Button Attributes

| 参数     | 说明                                                | 类型    | 可选值                                                               | 默认值    | 示例                    |
| :------- | :-------------------------------------------------- | :------ | :------------------------------------------------------------------- | :-------- | :---------------------- |
| type     | 按钮类型                                            | String  | `primary`、`default`、`dashed`、`danger`、`link`                     | `default` | `danger`                |
| size     | 按钮尺寸                                            | String  | `large`、`middle`、`small`                                           | `middle`  | 20                      |
| icon     | 按钮图标                                            | String  | 所有组件库支持的 icon                                                | -         | `search`                |
| loading  | loading 状态，加载过程中禁止重复点击                | Boolean | `true`、`false`                                                      | `false`   | `true`                  |
| disabled | 是否禁用                                            | Boolean | `true`、`false`                                                      | `false`   | `true`                  |
| href     | 按钮作为链接跳转，功能类似于 a 标签的 href 属性     | String  | -                                                                    | -         | `https://www.baidu.com` |
| target   | 按钮作为链接跳转的方式，类似于 a 标签的 target 属性 | String  | `_blank` 、`_parent` 、`_self` 、`_top` 、其他自定义的 name 字符串； | `_blank`  | `_self`                 |

### Button Events

| 事件名 | 说明           | 回调函数参数 |
| :----- | :------------- | :----------- |
| click  | 点击按钮时触发 | -            |
