
export const messageTypes = ['success', 'info', 'warning', 'error']
export const messageDefaults = {
    customClass: '',
    center: false,
    dangerouslyUseHTMLString: false,
    duration: 3000,
    icon: undefined,
    id: '',
    message: '',
    onClose: undefined,
    showClose: false,
    type: 'info',
    plain: false,
    offset: 16,
    zIndex: 0,
    grouping: false,
    repeatNum: 1,
}
export const messageProps = {
    /**
  * @description custom class name for Message
  */
    customClass: {
        type: String,
        default: messageDefaults.customClass,
    },
    /**
     * @description whether to center the text
     */
    center: {
        type: Boolean,
        default: messageDefaults.center,
    },
    /**
     * @description whether `message` is treated as HTML string
     */
    dangerouslyUseHTMLString: {
        type: Boolean,
        default: messageDefaults.dangerouslyUseHTMLString,
    },
    /**
     * @description display duration, millisecond. If set to 0, it will not turn off automatically
     */
    duration: {
        type: Number,
        default: messageDefaults.duration,
    },
    /**
     * @description custom icon component, overrides `type`
     */
    icon: {
        type: String,
        default: messageDefaults.icon,
    },
    /**
     * @description message dom id
     */
    id: {
        type: String,
        default: messageDefaults.id,
    },
    /**
     * @description message text
     */
    message: {
        type: [
            String,
            Object,
            Function,
        ],
        default: messageDefaults.message,
    },
    /**
     * @description callback function when closed with the message instance as the parameter
     */
    onClose: {
        type: Function,
        default: messageDefaults.onClose,
    },
    /**
     * @description whether to show a close button
     */
    showClose: {
        type: Boolean,
        default: messageDefaults.showClose,
    },
    /**
     * @description message type
     */
    type: {
        type: String,
        values: messageTypes,
        default: messageDefaults.type,
    },
    /**
     * @description whether message is plain
     */
    plain: {
        type: Boolean,
        default: messageDefaults.plain,
    },
    /**
     * @description set the distance to the top of viewport
     */
    offset: {
        type: Number,
        default: messageDefaults.offset,
    },
    /**
     * @description input box size
     */
    zIndex: {
        type: Number,
        default: messageDefaults.zIndex,
    },
    /**
     * @description merge messages with the same content, type of VNode message is not supported
     */
    grouping: {
        type: Boolean,
        default: messageDefaults.grouping,
    },
    /**
     * @description The number of repetitions, similar to badge, is used as the initial number when used with `grouping`
     */
    repeatNum: {
        type: Number,
        default: messageDefaults.repeatNum,
    },
}