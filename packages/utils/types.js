import { isNil } from 'lodash-unified'
export const isPropAbsent = (prop) => {
    // isNil 检查 value 是否是 null 或者 undefined。
    return isNil(prop)
}