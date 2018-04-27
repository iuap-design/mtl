
/**
 * 数据解析
 */
export default opt => {
    opt = opt || {}
    
    const { endpoint, components, data, linkage } = opt;
    
    return { 
        endpoint, // 终端类型说明
        components,// 描述组件布局和结构
        data,     // 组件数据说明，id是组件的唯一标识
        linkage
    }
}