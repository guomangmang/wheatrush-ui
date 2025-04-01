import InfiniteScroll from './src'

import { App } from 'vue'

const _InfiniteScroll = InfiniteScroll

_InfiniteScroll.install = (app) => {
    app.directive('InfiniteScroll', _InfiniteScroll)
}

export default _InfiniteScroll
export const ElInfiniteScroll = _InfiniteScroll
