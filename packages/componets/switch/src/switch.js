import { isString } from '@vue/shared'
export const switchProps = {
    modelValue: {
        type: [Boolean, String, Number],
        default: false,
    },
    value: [String, Number, Boolean],
    label: String,
    disabled: Boolean,
    name: String,
    checked: Boolean,
    size: String,
    activeValue: {
        type: [Boolean, String, Number],
        default: true,
    },
    inactiveValue: {
        type: [Boolean, String, Number],
        default: false,
    },
    activeText: {
        type: String,
        default: '',
    },
    inactiveText: {
        type: String,
        default: '',
    }
}


export const switchEmits = {
    'update:modelValue': (value) => (value),
    change: (value) => isString(value),
}