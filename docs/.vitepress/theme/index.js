import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import GlIcon from '@wheatrush/components/icon'
import GlButton from '@wheatrush/components/button'
import GlInput from '@wheatrush/components/input'
import '@wheatrush/theme-chalk/src/index.scss'
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(GlIcon) // 在vitepree 中注册全局组件
        app.use(GlButton)
        app.use(GlInput)
    }
}