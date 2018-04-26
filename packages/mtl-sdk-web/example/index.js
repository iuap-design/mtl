import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'

import MTLSDKWeb from 'mtl-sdk-web';

// 1、如何调用，首先初始化，并传入数据
// 得到的是完整骨架以及信息源。
const data = axios.get('/home/msg')
const skeleton = MTLSDKWeb.init(data)

// 2、拼装，拼装各种业务页面和逻辑
// 考虑：cid1和cid2需要联动吗？cid1如果操作更新后如何与后端交互。
skeleton.embed("cid1", function(compData){
    return  html = "<div>" + compData.name + "</div>"
})
skeleton.embed("cid2", function(compData){
    // 场景1：cid2组件执行了点击操作，需要和服务端进行通信；
    const html = "<div id='name' onClick='handleClick'>" + compData.name + "</div>";
    
    function handleClick(){
        skeleton.fire({
            "type": "",
            "data": {},
            "success": function (){},
            "error": function (){}
        })
    }
    return html
})
skeleton.embed("cid3", function(compData){
    return  html = "<div>" + compData.name + "</div>"
})

// 3、最终渲染
skeleton.render( DOMNode );

// 4、什么时候需要更新
skeleton.update();