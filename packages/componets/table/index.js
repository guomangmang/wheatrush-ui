// 整合组件 导出组件
import _Table from "./src/table.vue";
// import _Options from "./src/options.vue";
import { withInstall } from "@wheatrush/utils/with-install";


const Table = withInstall(_Table);
// const Options = withInstall(_Options);
export { Table }
export default {}
// export default {} // 可以通过app.use使用， 也可以直接使用
// export * from "./src/radio";
