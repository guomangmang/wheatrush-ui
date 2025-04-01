import { isString } from '@vue/shared'
export const selectProps = {
    modelValue: Object,
    multiple: {
        type: Boolean,
        default: false
    },
    disabled: false,
    size: String,
    placeholder: String,
}

export const selectEmit = {
    'update:modelValue': (value) => isString(value),
    change: (value) => isString(value),
} 