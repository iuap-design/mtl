import React, { Component, createElement } from 'react'
import ReactDOM, { render, createPortal } from 'react-dom'

// import resolve from './lib/resolve'

export default class MTLSDKWeb extends Component {
    constructor(props){
        super(props)
        this.state = {
            collect: null
        }
        this.data = {}
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
