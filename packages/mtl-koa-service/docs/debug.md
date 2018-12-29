

## Node 调试方式

### node 以前自带的 debugger 模块

```
$ node debug app.js
```

### 使用 node-inspector 调试

```
$ npm install -g node-inspector

```

开启服务
```
$ node-inspector
# 或者
# node-debug app.js
```

### 使用 vscode IDE

node-inspector虽好，项目已大特别慢，这方面vsc做了不少优化。

主要配置项目中.vscode 目录下的 launch.json 文件：

```
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch via NPM",
            "runtimeExecutable": "npm",
            "runtimeArgs": [
                "run-script",
                "debug"
            ],
            "port": 9229
        },
        {
            "type": "node",
            "request": "launch",
            "name": "调试node服务",
            "program": "${workspaceFolder}/app.js"
        }
    ]
}
```
然后点击左侧爬虫一样的图标：

### Chrome DevTools与Node.js Debugger结合

看完前面几个方面后只想说，前面在座几位都是辣鸡。

如何使用 Chrome 调试？

1、执行 `node --inspect app.js`，然后，浏览器中访问：http://localhost:3000/
2、





