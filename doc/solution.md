## 第三方资源

社区内较为优秀的一些开源贡献者提供的工具或者包，如下：

### 导航的实现 react-navigation

react-navigation 是 FaceBook 官方推荐使用的导航组件库，据称有着原生般的性能体验效果。使用起来也确实方便，在笔者进行开发的这段时间，react-navigation 的官方文档也进行了更新。官方文档还算详细，还有其他很多功能等待发掘。

### 图标 react-native-vector-icons

第三方的图标库，使用起来比较方便，项目中使用了 Ionicons 的风格。

### 全局状态管理 react-redux & redux

使用了 react-redux 进行全局状态管理，主要涉及到登录后token, 用户信息以及文章列表的存储。相关需要登录才能使用的模块也需要获取到全局状态中的token，进行相应的判断。

### html 转 view react-native-htmlview

涉及到 web 端 html 在 React Native 上的复用问题，因为两端在 布局、组件以及样式上的机制差异，html 完全的转换 view 不是很现实，但是在一定范围内实现转换还是可以的。react-native-htmlview 是目前做的较为优秀的，不过在笔者的使用过程中发现了一些问题，最终还是clone了其代码，又在本地修改才解决的，下文会详细解释。

### 持久化存储 react-native-storage

用于登录的token的持久化存储，每次启动 App 后，如果之前曾经登录不必重复登录。其不仅支持 React Native， 也提供了浏览器端的支持。

### ActionSheet, 用于 webview 中的更多弹出面板 react-native-actionsheet

目前 app 中的链接均采用 app 内部的 webview 进行显示，显示的过程中添加了progress 进度条，并添加了刷新以及在浏览器中打开功能。

### 二维码扫描组件, 基于 react-native-camera 的封装

基于 react-native-camera 封装的二维码扫码组件，思路借鉴了 react-native-qrcode的实现方法。

### WebView 中的进度条显示 react-native-progress

一个更加友好的展示，在网页请求的过程中添加了顶部进度条

