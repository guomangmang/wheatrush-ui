// 整合组件 导出组件
import _Tree from "./src/tree.vue";
import { withInstall } from "@wheatrush/utils/with-install";


const Tree = withInstall(_Tree);

export default Tree; // 可以通过app.use使用， 也可以直接使用
export * from "./src/tree";
