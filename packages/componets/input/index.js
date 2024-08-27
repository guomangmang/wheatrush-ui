// 整合组件 导出组件
import _Input from "./src/input.vue";
import { withInstall } from "@wheatrush/utils/with-install";


const Input = withInstall(_Input);

export default Input; // 可以通过app.use使用， 也可以直接使用
export * from "./src/input";
