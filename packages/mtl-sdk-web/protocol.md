## 通讯协议


关键字	名称	 说明
endpoint	终端类型	记录关于终端的信息，主要是显示屏信息和操作系统信息
structure	布局	
components	组件	组件的元数据信息
data	组件的数据信息	组件数据信息
linkage	关联信息	提供压缩的参考数据
checkcode	校验码	检查数据是否被修改过
reload	是否加载	是否需要全局刷新
status	状态码	SUCCESS 加载成功，ERROR 失败




endpoint(终端类型)
"endpoint": {
 "screen": "pc",
 "os": "iOS",
 "version": "2.0" }



关键字	名称	 说明
screen	设备屏幕类型	大屏（tv）、普通显示屏（pc）、手机屏（mobile）、平板屏（pad）
os	操作系统类型	iOS、Android、Web、Window
version	协议的版本	后续的描述内容适配的接口版本。不支持的版本可能无法解析






structure（布局）
"structure":{

"type": "absolutely",
 "components": [{
 "width": 240,
 "height": 160,
 "top": 20,
 "left": 40,
 "cId": "0d94d82d-1194-44a9-b01f-3daf7f52cb06",
 "dsId": "0d94d82d-1194-44a9-b01f-3daf7f52cb06"
 }]
}

structure
关键字	名称	 说明
type	布局类型	绝对布局（absolutely），表格布局（table），流式布局（linear）
components	组件位置信息	组件所在的位置，不同的位置有不同的表述方式





components Absolutely Layout（绝对布局的组件信息）
关键字	名称	 说明
cId	组件 ID	关联到组件列表的 Id
dsId	数据源 ID	关联数据源列表的 ID
width	组件宽度 	
height	组件高度	
left

组件左上角距离左边框的距离	
top	组件左上角距离顶部的距离	


data（数据）
"data": {
 "id": "7f418e20-01dd-4500-a272-3a3f68c2bd9f",
 "fields": {
 "code": "001",
 "name": "xxx",
 "address": [{
 "type": "company",
 "info": "bj"
 },
 {
 "type": "home",
 "info": "cq"
 }
 ]
 }
}

data
关键字	名称	 说明
id	唯一标识	
fields	数据字段 	
每个字段的数据结构不作强约束。由于组件负责解析和处理。

推荐使用树形结构储存，最终数据为叶子结点，可以是唯一数据，也可以是数组结构 



checkcode
对 Components 信息生成 md5码，再用公钥加密后传递给服务器。服务验证客户端的有效性和数据是否被修改过了。

linkage
"linkage":{　　　　　　　　　
 "compress": true,
 "queryParams": "^^$$Z",　　　
"submitParams": "^^$$Z"
}



