/**
 * @desc [React Native代码入口文件]
 * @flow
 */

import './config/ReactotronConfig';
import DebugConfig from './config/DebugConfig';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import createStore from './redux';

// create our store
const store = createStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App