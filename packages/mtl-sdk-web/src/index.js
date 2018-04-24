
/**
 * 接口协议解析引擎（web)
 * auth: yoffe
 * Date: 2018-04-24
 */

 /**
  * usage：
  * import MTLSDKWeb from 'mtl-sdk-web'
  * new MTLSDKWeb(data)
  */
export default class MTLSDKWeb {
    constructor(data){
        this.data = data;
        this.init()
        this.state = {}
    }
    init(){
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
            this.
        }
        this.render();
    }
    resolve(){

    }
    setState(obj){
        this.state = Object.assign(this.state, obj)
    }
    osDecide(osInfo){
        return this.state.endpoint.os;
    }
    screenDecide(screenInfo){
        return this.state.endpoint.screen;
    }
    getVersion(){
        return this.state.endpoint.version;
    }
    render(){
        return (
            <div>
                { 
                    if(this.osDecide() == "web"){
                        
                    }
            }
            </div>
        )
    }
}

