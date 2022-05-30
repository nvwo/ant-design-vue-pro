(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20975d"],{a8c3:function(n,t){n.exports='# 操作权限\n\n指令权限，通过比对现有权限与准入权限，决定相关元素的展示（常用于按钮权限控制）。\n\n\n## 用法\n\n- 在需要控制 action 级别权限的组件上使用 v-action:[method] , 如下：\n\n```html\n\x3c!-- 当前登陆用户必须有当前路由权限，并且必须有当前路由 permission 权限下的 [method] Action 操作权限 --\x3e\n<i-button v-action:add >添加用户</a-button>\n<a-button v-action:delete>删除用户</a-button>\n<a v-action:edit @click="edit(record)">修改</a>\n```\n\n- 当前用户没有权限时，组件上使用了该指令则会被隐藏\n- 当后台权限跟 pro 提供的模式不同时，只需要针对这里的权限过滤进行修改即可\n'}}]);