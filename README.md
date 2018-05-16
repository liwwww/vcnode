## 重构CNODE

### 说明

感谢[lzxb]前辈的 "用vue重构cnode" 项目，在项目很多地方启发了我。
感谢[cnodejs](https://cnodejs.org/)社区提供的API。
github：[https://github.com/liwwww/vcnode](https://github.com/liwwww/vcnode)

### 预览
```
地址：[http://www.wlgxh.cn](http://www.wlgxh.cn)
```

### 技术栈
```
基于vue2 + vue-router + vuex + ES6 + less + webpck 重写vue版cnode社区.
```

### 功能
- [x] 首页
- [x] 帖子详情
- [x] 收藏
- [x] 帖子编辑
- [x] 点赞
- [x] 评论，优化了评论线索关系
- [x] 个人详情
- [x] 登录
- [x] 退出
- [x] 页面缓存
- [x] 消息



### 项目目录
```
.
├─config
│  ├─ dev.env.js
│  ├─ index.js
│  └─ prod.env.js
├─src
│  ├─commons
│  │  ├─iconfont                //字体图标文件
│  │  │  └─index
│  │  ├─img                     //静态图片
│  │  └─style                   //公用样式
│  ├─components
│  │  ├─content.vue             //主页内容容器组件
│  │  ├─header.vue              //头部导航栏组件
│  │  ├─loadmore.vue            //加载更多按钮组件
│  │  ├─notify.vue              //通知消息组件
│  │  ├─release.vue             //底部导航栏组件
│  │  ├─reply.vue               //回复组件
│  │  └─topicLoading.vue        //主页等待加载组件
│  ├─config
│  │  ├─fetch.js                //简单封装fetch
│  │  └─storage.js              //简单封装LocalStorage
│  ├─filters
│  │  └─index.js                //过滤器
│  ├─page
│  │  ├─create
│  │  │  └─create.vue           //编辑帖子页面
│  │  ├─index
│  │  │  └─index.vue            //首页
│  │  ├─login
│  │  │  └─login.vue            //登陆页面
│  │  ├─message
│  │  │  └─message.vue          //消息页面
│  │  ├─topic
│  │  │  └─detail.vue           //帖子详情页面
│  │  └─user
│  │     └─user.vue             //用户页面
│  ├─router
|  |  └─index.js                //路由配置
│  ├─service
|  |  └─data.js                 //接口管理
│  ├─store
|  |  ├─index.js                //vuex
|  |  └─mutation-types.js       //vuex名称定义
├─static
├─.babelrc                      //ES6语法编译配置
├─index.html
├─package-lock.json             
├─package.json
└─README.md
.
```