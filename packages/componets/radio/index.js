// 整合组件 导出组件
import _Radio from "./src/radio.vue";
import _RadioGroup from './src/radio-group.vue'
import { withInstall } from "@wheatrush/utils/with-install";


const Radio = withInstall(_Radio);
const RadioGroup = withInstall(_RadioGroup)
export { Radio, RadioGroup }
// export default {} // 可以通过app.use使用， 也可以直接使用
// export * from "./src/radio";
