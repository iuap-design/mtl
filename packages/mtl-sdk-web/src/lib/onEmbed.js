/**
 * 用于给开发者将自定义UI插入到指定的节点位置
 * MTLSDKWeb.onEmbed(id, compData => { return node })
 */
export default ( options ) => {
    arr = arr || []
    arr.forEach(func => {
        func(id, callback)
    })
    let _this = this
    // 返回回来的 node 必须是 React 组件
    const node = createElement(callback(_this.data))

    this.nodeCollect(node)
}
