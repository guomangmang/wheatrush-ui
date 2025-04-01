import {
    isPropFunction,
    throwError
} from '@element-plus/utils'
import { nextTick } from 'vue'


export const SCOPE = 'GlInfiniteScroll'
const attributes = {
    delay: {
        type: Number,
        default: DEFAULT_DELAY,
    },
    distance: {
        type: Number,
        default: DEFAULT_DISTANCE,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    immediate: {
        type: Boolean,
        default: true,
    },
}

const getScrollOptions = (
    el,
    instance
) => {
    return Object.entries(attributes).reduce((acm, [name, option]) => {
        const { type, default: defaultValue } = option
        const attrVal = el.getAttribute(`infinite-scroll-${name}`)
        let value = instance[attrVal] ?? attrVal ?? defaultValue
        value = value === 'false' ? false : value
        value = type(value)
        acm[name] = Number.isNaN(value) ? defaultValue : value
        return acm
    }, {})
}
const InfiniteScroll = {
    async mounted(el, binding) {
        const { instance, value: cb } = binding

        if (!isPropFunction(cb)) {
            throwError(SCOPE, "'v-infinite-scroll' binding value must be a function")
        }

        // ensure parentNode mounted
        await nextTick()

        const { delay, immediate } = getScrollOptions(el, instance)
        const container = getScrollContainer(el, true)
        const containerEl =
            container === window
                ? document.documentElement
                : (container)
        const onScroll = throttle(handleScroll.bind(null, el, cb), delay)

        if (!container) return

        el[SCOPE] = {
            instance,
            container,
            containerEl,
            delay,
            cb,
            onScroll,
            lastScrollTop: containerEl.scrollTop,
        }

        if (immediate) {
            const observer = new MutationObserver(
                throttle(checkFull.bind(null, el, cb), CHECK_INTERVAL)
            )
            el[SCOPE].observer = observer
            observer.observe(el, { childList: true, subtree: true })
            checkFull(el, cb)
        }

        container.addEventListener('scroll', onScroll)
    },
}


export default InfiniteScroll