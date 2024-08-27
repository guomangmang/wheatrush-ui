// 整合组件 导出组件
import _Icon from "./src/icon.vue";
import { withInstall } from "@wheatrush/utils/with-install";


const Icon = withInstall(_Icon);

export default Icon; // 可以通过app.use使用， 也可以直接使用
export * from "./src/icon";
