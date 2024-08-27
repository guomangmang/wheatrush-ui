import { isString } from '@vue/shared'

export const inputProps = {
    /**
     * @description input 类型
     */
    type: {
        type: String,
        default: 'text',
    },
    /**
     * @description input 绑定
     */
    modelValue: {
        type: [Number, String],
        default: '',
    },
    /**
     * @description 占位符
     */
    placeholder: {
        type: String,
    },
    /**
     * @description clearable 清空
     */
    clearable: Boolean,

    /**
     * @description show-password 是否展示密码
     */

    showPassword: {
        type: Boolean,
        default: false,
    },
    /**
     * @description  disable 是否禁用
     */
    disable: Boolean,
    /**
     * @description readonly 是都只读
     */
    readonly: Boolean,
    /**
     * @description 	等价于原生 input aria-label 属性
     */
    label: {
        type: String,
        default: '',
    },
}


export const inputEmits = {
    'update:modelValue': (value) => isString(value),
    input: (value) => isString(value),
    change: (value) => isString(value),
    focus: (e) => e,
    blur: (e) => e,
    clear: () => true // 清空事件
}