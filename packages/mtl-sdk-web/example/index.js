import React, { Component } from 'react'
import { render } from 'react-dom'

import SDKApp from './SDKApp'
import localStore from 'tinper-storage/lib/localStore';
import sessionStore from 'tinper-storage/lib/sessionStore'

// 使用
console.log(localStore);

class App extends Component {
    render(){
        return (
            <div style={{
                border: "1px solid #ccc",
                minHeight: "300px",
                width: "100%",
                margin: "20px 10px"
            }}>
                <SDKApp />
            </div>
        )
    }
}

render(<App />, document.getElementById('content'))
