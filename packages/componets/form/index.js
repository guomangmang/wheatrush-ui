// 整合组件 导出组件
import _FormItem from "./src/form-item.vue";
import _Form from "./src/form.vue";
import { withInstall } from "@wheatrush/utils/with-install";


const FormItem = withInstall(_FormItem);

const Form = withInstall(_Form);

export { FormItem, Form }; // 可以通过app.use使用， 也可以直接使用
export default {}
// export * from "./src/form-item";