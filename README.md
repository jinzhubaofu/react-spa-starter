# react spa starter

## setup

1. `git clone` or download zip
2. cd react-spa-starter
3. npm install
4. npm start
5. open http://localhost:8080

## 目录结构

```
├── README.md                    // 使用指南
├── asset
│   ├── inf-manifest.json        // dll manifest 配置
│   └── inf.js                   // 开发时使用的 dll
├── index.html
├── output                       // 编译后用于生产环境的代码存放在这里
├── package.json
├── src                          // 源代码目录
│   ├── common                   // 公共模块
│   │   └── middleware           // 中间件
│   │       ├── async.js         // 异步 action creator 中间件
│   │       └── logger.js        // 日志中件件
│   ├── index.js                 // 主入口
│   ├── index.styl               // 样式主入口
│   ├── routes.js                // 主路由
│   └── todo                     // todo example
│       ├── Page.js              // todo 页面主入口
│       ├── View.js              // todo 视图
│       ├── actionTypes.js       // 所有的 action 类型常量定义
│       ├── actions.js           // 所有的 action creator
│       ├── component            // todo 组件
│       │   ├── PublishBox.js    // 发布框
│       │   ├── Todo.js          // 单条 todo
│       │   └── TodoList.js      // todo 列表
│       ├── index.styl           // todo 的样式入口
│       ├── reducer.js           // reducer
│       ├── routes.js            // todo 的路由配置
│       └── selector.js          // selector
└── tools                        // 工具
    ├── dll.json                 // 有一些依赖没有主模块，比如 melon 和 numen；在这里可以将此类依赖转化为明确的子模块
    ├── webpack.common.js        // webpack 通用配置
    ├── webpack.dev.js           // webpack 开发配置，包括 dev server
    ├── webpack.inf.config.js    // webpack dll 配置
    └── webpack.prod.js          // webpack 发布配置
```

## 新建一个页面

1. 新建一个目录 `example` ，`example` 的推荐目录结构为

    * example
        * reducer
        * actions
        * actionTypes
        * index.styl
        * selector
        * components
        * ExamplePage.js
        * ExampleView.js
        * resource.js

2. 修改 `src/routes.js` ，添加一个路由信息

## 开发指南

请参考 [redux](http://redux.js.org/docs/introduction/) 以及 [ei](https://github.com/jinzhubaofu/ei#efe-isomorphic-framework)


## 脚本

1. 开发 `npm start`
2. 构建 `npm run build`

    > 由于 ei 采用了异步加载模块的方案，所以在 webpack 构建时会警告 ei/lib/App 有依赖是表达式，无视即可。

3. 代码检查 `npm run lint`

    > 目前对 git commit 添加了 precommit 的 hook，必须通过 fecs 检测才可以 commit

4. 构建 dll manifest `npm run build-manifest`
