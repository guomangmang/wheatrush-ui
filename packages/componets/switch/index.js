// 整合组件 导出组件
import _Switch from "./src/switch.vue";
import { withInstall } from "@wheatrush/utils/with-install";


const Switch = withInstall(_Switch);

export default Switch; // 可以通过app.use使用， 也可以直接使用
