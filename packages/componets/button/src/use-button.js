import { computed, useSlots } from 'vue'


export const useButton = () => {
    const slots = useSlots()
    const hasMultipleSlots = computed(() => {
        const defaultSlot = slots.default?.()
        return Array.isArray(defaultSlot) && defaultSlot.length > 1;
    });

    return {
        hasMultipleSlots,
    }
}





