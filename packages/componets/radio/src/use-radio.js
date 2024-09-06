import { computed, ref, inject } from 'vue'
import { isPropAbsent } from '@wheatrush/utils/index.js'
import { radioGroupKey } from './constants.js'

const UPDATE_MODEL_EVENT = 'update:modelValue'
export const useRadio = (
    props,
    emit
) => {
    const radioRef = ref()
    const actualValue = computed(() => {
        if (!isPropAbsent(props.value)) {
            return props.value
        }
        return props.label
    })
    const radioGroup = inject(radioGroupKey, undefined)
    const isGroup = computed(() => !!radioGroup)

    const modelValue = computed({
        get() {
            return isGroup.value ? radioGroup.modelValue : props.modelValue
        },
        set(val) {
            if (isGroup.value) {
                radioGroup.changeEvent(val)
            } else {
                emit && emit(UPDATE_MODEL_EVENT, val)
            }
            radioRef.value.checked = props.modelValue === actualValue.value
        },
    })
    return {
        radioRef,
        actualValue,
        radioGroup,
        modelValue
    }
}