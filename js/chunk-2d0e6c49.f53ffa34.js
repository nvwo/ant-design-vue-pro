(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6c49"],{"99c6":function(n,e){n.exports="# 和服务端进行交互\n\nAnt Design Pro 是一套基于 Vue 技术栈的单页面应用，我们提供的是前端代码和 `mock` 模拟数据的开发模式，\n通过 API 的形式和任何技术栈的服务端应用一起工作。下面将简单介绍和服务端交互的基本写法。\n\n\n## 前端请求流程\n\n在 Ant Design Pro 中，一个完整的前端 UI 交互到服务端处理流程是这样的：\n\n1. UI 组件交互操作；\n2. 调用统一管理的 api service 请求函数；\n3. 使用封装的 request.js 发送请求；\n4. 获取服务端返回；\n5. 更新 data。\n\n\n从上面的流程可以看出，为了方便管理维护，统一的请求处理都放在 `@/src/api` 文件夹中，并且一般按照 model 纬度进行拆分文件，如：\n\n```\napi/\n  user.js\n  permission.js\n  goods.js\n  ...\n```\n\n\n其中，`@/src/utils/request.js` 是基于 [axios](https://github.com/axios/axios) 的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。具体可以参看 [request.js](https://github.com/sendya/ant-design-pro-vue/blob/master/src/utils/request.js)。 它封装了全局 request 拦截器、response 拦截器、统一的错误处理、baseURL 设置等。\n\n例如在 api 中的一个请求用户信息的例子：\n\n```js\n// api/user.js\nimport { axios } from '@/utils/request'\n\nconst api = {\n    info: '/user',\n    list: '/users'\n}\n\n// 根据用户 id 获取用户信息\nexport function getUser (id) {\n    return axios({\n        url: `${api.user}/${id}`,\n        method: 'get'\n    })\n}\n\n// 增加用户\nexport function addUser (parameter) {\n    return axios({\n        url: api.user,\n        method: 'post',\n        data: parameter\n    })\n}\n\n// 更新用户 // or (id, parameter)\nexport function updateUser (parameter) {\n    return axios({\n        url: `${api.user}/${parameter.id}`, // or `${api.user}/${id}`\n        method: 'put',\n        data: parameter\n    })\n}\n\n// 删除用户\nexport function deleteUser (id) {\n    return axios({\n        url: `${api.user}/${id}`,\n        method: 'delete',\n        data: parameter\n    })\n}\n\n// 获取用户列表 parameter: { pageSize: 10, pageNo: 1 }\nexport function getUsers (parameter) {\n    return axios({\n        url: api.list,\n        method: 'get',\n        params: parameter\n    })\n}\n```\n\n```vue\n<template>\n\t<div>\n\t\t<a-button @click=\"queryUser\"></a-button>\n\t\t\n\t\t<a-table :dataSource=\"list\">\n\t\t</a-table>\n\t</div>\n</template>\n\n<script>\nimport { getUser, getUsers } from '@/api/user'\n\nexport default {\n    data () {\n        return {\n        \tid: 0,\n        \tqueryParam: {\n                pageSize: 10,\n                pageNo: 1,\n                username: ''\n        \t},\n        \tinfo: {},\n            list: []\n        }\n    },\n    methods: {\n        queryUser () {\n        \tconst { $message } = this\n            getUser(this.id).then(res => {\n                this.info = res.data\n            }).catch(err => {\n                $message.error(`load user err: ${err.message}`)\n            })\n        },\n        queryUsers () {\n            getUsers(this.queryParam).then(res => {\n                this.list = res\n            })\n        }\n    }\n}\n<\/script>\n```\n\n## Mock \n\n- 有关项目默认使用的 `mockjs` 默认情况下在 `production` 是不生效的，所以直接不经过任何修改就编译出来，是无法看到效果的。\n- Mock 在 `main.js` 中经行引入，你可以查看该文件的源代码，并找到 `import './mock'` 这样的代码。（去除它 可完整的将项目中的 mock 拦截去除）\n- 如果想与 preview 一样，在生产环境也能使用 mock，则需要修改 `src/mock/index.js` 中的环境判断，这一些内容则需要自己理解并修改了。\n"}}]);