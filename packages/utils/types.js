import { isNil, isFunction } from 'lodash-unified'
export const isPropAbsent = (prop) => {
    // isNil 检查 value 是否是 null 或者 undefined。
    return isNil(prop)
}

export const isPropFunction = (prop) => {
    // isFunction 检查 value 是否是 函数
    return isFunction(prop)
}