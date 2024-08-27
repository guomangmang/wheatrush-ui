# 快速开始

本节将介绍如何在项目中使用 wheatrush-ui。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```javascript
// main.ts
import { createApp } from "vue";
import WheatrushUi from " wheatrush-ui";
import "wheatrush-ui/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(WheatrushUi);
app.mount("#app");
```
