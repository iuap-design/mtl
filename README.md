# mtl-framework 多端开发框架


[![npm version](https://img.shields.io/npm/v/mtl.svg)](https://www.npmjs.com/package/mtl)
[![Build Status](https://img.shields.io/travis/iuap-design/mtl/master.svg)](https://travis-ci.org/iuap-design/mtl)
[![Coverage Status](https://coveralls.io/repos/github/iuap-design/mtl/badge.svg?branch=master)](https://coveralls.io/github/iuap-design/mtl?branch=master)
[![NPM downloads](http://img.shields.io/npm/dm/mtl.svg?style=flat)](https://npmjs.org/package/mtl)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/iuap-design/mtl.svg)](http://isitmaintained.com/project/iuap-design/mtl "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/iuap-design/mtl.svg)](http://isitmaintained.com/project/iuap-design/mtl "Percentage of issues still open")

基于 `React Native` 的移动 `App` 开发框架

## 环境准备

> 以在 Mac 上开发为例。

- 全局 Node.js 环境
- 确保电脑安装了 XCode 开发工具
  - XCode 配置：Mac OSX下打开Xcode编辑器的Menu -> Preferences -> Locations，然后配置命令行工具选择Xcode。

## 下载和安装

1. Install the react-native-cli
  ```
  npm install -g react-native-cli
  ```
2. `npm install`
3. `npm run ios` 

## 技术栈

1. 基础框架/类库：React Native 、React；
2. 应用导航方案：react-navigation；
3. 应用状态管理：redux、react-redux；
4. 数据管理：Immutable.js、redux-immutable；
5. 持久化方案：redux-persist、AsyncStorage、redux-persist-immutable（Immutable化状态树的持久化）；
6. 异步方案：redux-saga（网络请求，异步读取本地数据等）；
7. 测试：jest；
8. 调试工具：reactotron

## 项目结构说明

```
src - App项目React Native部分目录
├── api - 应用网络请求相关配置
├── app.js  - React Native部分入口js文件
├── components  - 可复用纯UI组件，也可作elements
├── config  - 应用全局配置
├── constants - 应用全局变量
├── containers  - 容器组件
├── helpers - 全局工具／辅助方法
├── middlewares - 中间件
├── redux - redux目录
├── routes  - 应用导航路由配置
├── sagas - 应用异步任务管理sagas目录
├── screens - 应用组件屏目录，通常是展示型组件
└── services  - 应用内服务模块目录，如应用状态持久化及恢复服务
```