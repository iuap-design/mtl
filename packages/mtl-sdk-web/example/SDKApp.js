import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'

// 示例 start
import MTLSDKWeb, { onEmbed, onReload, onUpdate } from 'mtl-sdk-web';
const JSONData = require('./api.json');

export default class SDKWeb extends Component {
    setHeader(){
        onEmbed('activity_6078954050', compData => {
            let { id, tag, type, field } = compData

            return (
                <div>
                    
                </div>
            )
        })
    }
    render(){
        const singoton = () => <MTLSDKWeb data={JSONData} />
        this.setHeader();
        this.setAddress();

        return singoton
    }
}
