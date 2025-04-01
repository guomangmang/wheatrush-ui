// 整合组件 导出组件
import { withInstallFunction } from "@wheatrush/utils/with-install";

import Message from './src/method'

export const GlMessage = withInstallFunction(Message, '$message')
export default GlMessage

export * from './src/message'