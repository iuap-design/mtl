import React, { Component, createElement } from 'react'
import ReactDOM, { render, createPortal } from 'react-dom'

import resolve from './lib/resolve'

export default class MTLSDKWeb extends Component {
    constructor(props){
        super(props)
        this.state = {
            collect: null
        }
        this.data = {}
    }
    /**
     * 用于给开发者将自定义UI插入到指定的节点位置
     * MTLSDKWeb.onEmbed(id, compData => { return node })
     */
    static onEmbed(){
        arr = arr || []
        arr.forEach(func => {
            func(id, callback)
        })
        let _this = this
        // 返回回来的 node 必须是 React 组件
        const node = createElement(callback(_this.data))

        this.nodeCollect(node)
    }
    nodeCollect(node){
        createPortal(child, container)
    }
    /**
     * 根据参数解析渲染UI骨架
     */
    generateRootComponent(){
        let { type, structure } = this.props.data.components;
        const snippets = structure.map(element => {
            const { width, height, top, left, cId } = element;
            let hasChild = element.hasChild ? element.hasChild : null;

            return (
                <div key={cId} id={cId} style={{width: width, height: height}}>
                    <span key={cId}>{cId}</span>
                </div>
            )
        });

        return (
           <div style={this.componentPosCtrlByType(type)}>
                { snippets }
           </div>
       )
    }
    /**
     * 根据不同的 components type 字段控制布局及其样式
     */
    componentPosCtrlByType(type){
        switch(type){
            case "absolutely":
                return {
                    position: "absolute"
                }
                break;
            case "table":
                return { }
                break;
            case "linear":
                return {
                    display: "flex"
                }
                break;
        }
    }
    render(){
        return (
            <div>
                { this.generateRootComponent() }
            </div>
        )
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
