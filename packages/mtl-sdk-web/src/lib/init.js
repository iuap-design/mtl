
/**
 * 接口协议解析引擎（web)
 * auth: yoffe
 * Date: 2018-04-24
 */

export default const init = (protocol) => {
    this.data = data;
    this.init()
    this.state = {}

    if( data && data.endpoint && data.structure ) {
        const { 
            // 终端类型说明
            endpoint,
            // 描述组件布局和结构
            structure,
            // 组件数据说明，id是组件的唯一标识
            data,
            //
            linkage
        } = this.data;
        this.state.data = data;
    }
    
    const setState = (obj) => {
        this.state = Object.assign(this.state, obj)
    }
    const osDecide = (osInfo) => {
        return this.state.endpoint.os;
    }
    const screenDecide = (screenInfo) => {
        return this.state.endpoint.screen;
    }
    const getVersion = () => {
        return this.state.endpoint.version;
    }

    return (
        <div style="">
            <div id="3232" data-source="{'name': 'yoffe'}"></div>
            <div id=""></div>
            <div id=""></div>
            <div id=""></div>
        </div>
    )
}

