// prop 检验
// label 标签文本
// rules 规则
// show-message	是否显示校验错误信息


// trigger	验证逻辑的触发方式 change


export const formItemProps = {
    prop: String,
    label: String,
    rules: [Array, Object],
    showMessage: Boolean,
}


export const inputEmits = {
    'update:modelValue': (value) => isString(value),
    input: (value) => isString(value),
    change: (value) => isString(value),
    focus: (e) => e,
    blur: (e) => e,
    clear: () => true // 清空事件
}