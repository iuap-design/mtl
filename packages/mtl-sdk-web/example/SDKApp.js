import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'

// 示例 start
import MTLSDKWeb from './MTLSDKWeb';
const JSONData = require('./api.json');

export default class SDKWeb extends Component {
    render(){
        return (
            <MTLSDKWeb data={JSONData} />
        )
    }
}
