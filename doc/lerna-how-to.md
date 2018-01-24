# 如何使用 lerna 管理 mtl 的各个模块

- 1.安装 lerna
```
$ npm install lerna -g
```
- 2.新建模块
```
$ cd packages/
$ npm init
$ touch README.md src/index.js .npmignore
```
- 3.lerna 的基本使用
```
# 安装依赖
$ lerna bootstrap
# 发布和更新 package
# lerna publish
```

