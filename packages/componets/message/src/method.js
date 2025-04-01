import types from './constants'
import MessageComponent from './message.vue'
import { createApp, ref, watch } from 'vue'
const messageList = ref([])


const Message = (options) => {
    const messageApp = createApp(MessageComponent, options)
    showMessage(messageApp, options.duration)
}
Object.values(types).forEach((type) => {
    Message[type] = (options) => {
        options.type = type
        return Message(options)
    }
})


const showMessage = (app, duration) => {
    const oFrag = document.createDocumentFragment()
    const vm = app.mount(oFrag)
    // 将vue实例推入数列中
    messageList.value.push(vm)
    document.body.appendChild(oFrag)
    handlMessageTop(vm)
    vm.setVisibility(true)
    watch(messageList, () => {
        handlMessageTop(vm)
    })
    hideMessage(app, vm, duration)
}

const hideMessage = (app, vm, duration) => {
    vm.timer = setTimeout(async () => {
        await vm.setVisibility(false)
        app.unmount()
        // 删除已经结束的vm
        messageList.value = messageList.value.filter(item => item !== vm)
        clearTimeout(vm.timer)
        vm.timer = null
    }, duration || 3000)

}


const handlMessageTop = (vm) => {
    const { setTop, margin, height } = vm
    // 拿到当前messageList的下标
    const currentIndex = messageList.value.findIndex(item => vm === item)
    setTop((currentIndex + 1) * margin + (height * (currentIndex + 1)))
}
export default Message