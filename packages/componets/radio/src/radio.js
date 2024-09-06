// v-model
// value 单选框的值
// label 单选框的 label 如果value没有值， label则作为value使用
// disabled 是否禁用单选框
import { isString } from '@vue/shared'
export const radioProps = {
    modelValue: Object,
    value: [String, Number, Boolean],
    label: String,
    disabled: Boolean,
    name: String,
}


export const radioEmits = {
    'update:modelValue': (value) => isString(value),
    change: (value) => isString(value),
}