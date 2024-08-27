
export const buttonTypes = [
    'default',
    'primary',
    'success',
    'warning',
    'info',
    'danger',
    '',
]
export const buttonNativeTypes = ['button', 'submit', 'reset']
export const buttonSize = ['small', 'medium', 'large']

export const buttonProps = {
    /**
     * @description 按钮尺寸
     */
    size: {
        type: String,
        validator: (val) => {
            return buttonSize.includes(val)
        },
        default: '',
    },
    /**
     * @description 按钮类型
     */
    type: {
        type: String,
        values: buttonTypes,
        default: 'primary',
    },
    /**
     * @description 禁用
     */
    disabled: Boolean,
    /**
 * @description icon component
 */
    icon: {
        type: String,
    },
    /**
     * @description native button type
     */
    nativeType: {
        type: String,
        values: buttonNativeTypes,
        default: 'button',
    },
    /**
     * @description 加载中
     */
    loading: Boolean,
    /**
     * @description determine whether it's a plain button
     */
    plain: Boolean,
    /**
     * @description determine whether it's a text button
     */
    text: Boolean,
    /**
     * @description determine whether it's a round button
     */
    round: Boolean,
    /**
     * @description determine whether it's a circle button
     */
    circle: Boolean,

    href: {
        type: String,
        default: '',
    },
    // 外链跳转方式，只有href设置了之后生效
    target: {
        type: String,
        default: '_self',
    },




}
export const buttonEmits = {
    click: (evt) => evt instanceof MouseEvent,
}
