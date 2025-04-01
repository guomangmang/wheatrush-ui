// 整合组件 导出组件
import _Select from "./src/select.vue";
import _Options from "./src/options.vue";
import { withInstall } from "@wheatrush/utils/with-install";


const Select = withInstall(_Select);
const Options = withInstall(_Options);
export { Select, Options }
export default {}
// export default {} // 可以通过app.use使用， 也可以直接使用
// export * from "./src/radio";
