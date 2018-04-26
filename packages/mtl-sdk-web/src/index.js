// import init from './lib/init'
// import getData from './lib/getData'
// import embed from './lib/embed'
import React from 'react'
import ReactDOM, { render } from 'react-dom'

export default class MTLSDKWeb {
    constructor(){
        this.state = {
            collect: null
        }
        this.data = {}
        this.init();
    }
    init(data){
        this.data = data;
    }
    embed(id, callback){
        let _this = this
        // 返回回来的 node 必须是 React 组件
        const node = callback(_this.data)

        this.nodeCollect(node)
    }
    nodeCollect(node){
        thi.state.collect.push(node);
    }
    generateRootComponent(){
        return (
            <div className="root">
                { this.state.collect }
            </div>
        )
    }
    render( id ){
        const root = this.generateRootComponent()
        render(root, getElementById(id))
    }
    update(){
        update()
    }
    fire(params, callback){
        axios(params);
    }
    willReceiveData(data){

    }
}
