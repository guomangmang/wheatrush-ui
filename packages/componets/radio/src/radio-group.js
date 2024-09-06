
export const radioGroupProps = {
    /**
     * @description native `id` attribute
     */
    id: {
        type: String,
        default: undefined,
    },
    /**
     * @description whether the nesting radios are disabled
     */
    disabled: Boolean,
    /**
     * @description binding value
     */
    modelValue: {
        type: [String, Number, Boolean],
    },
    /**
     * @description native `name` attribute
     */
    name: {
        type: String,
        default: undefined,
    },
}


export const radioGroupEmits = {
    change: (value) => (value)
}
