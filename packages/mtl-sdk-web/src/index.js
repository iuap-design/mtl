import React, { createElement } from 'react'
import ReactDOM, { render, createPortal } from 'react-dom'

import resolve from './lib/resolve'

export default class MTLSDKWeb {
    constructor(){
        this.state = {
            collect: null
        }
        this.data = {}
        this.init();
    }
    init(data){
        this.data = resolve(data);
    }
    embed(id, callback){
        let _this = this
        // 返回回来的 node 必须是 React 组件
        const node = createElement(callback(_this.data))

        this.nodeCollect(node)
    }
    static nodeCollect(node){
        createPortal(child, container)
    }
    static generateRootComponent(){
        let { type, structure } = this.data.components;

        const snippets = structure.forEach(element => {
            const { width, height, top, left, cid } = element;
            let hasChild = element.hasChild;

            return (
                <div id={cid} style={{width: width, height: height}}>

                </div>
            )
        });
        // return (
        //     // <div className="root" 
        //     //     style={{ type == "absolutely" ? "position": "absolute"}}>
        //     // </div>
        // )
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
