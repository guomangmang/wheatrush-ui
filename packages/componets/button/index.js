// 整合组件 导出组件
import _Button from "./src/button.vue";
import { withInstall } from "@wheatrush/utils/with-install";


const Button = withInstall(_Button);

export default Button; // 可以通过app.use使用， 也可以直接使用
export * from "./src/button";
