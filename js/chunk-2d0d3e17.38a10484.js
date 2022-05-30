(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3e17"],{"5f3c":function(n,e){n.exports="# 构建和发布\n\n\n\n## 构建\n\n当项目开发完毕，只需要运行一行命令就可以打包你的应用：\n\n```bash\n$ yarn build\nor\n$ npm run build\n```\n\n由于 Ant Design Pro 使用的工具 [Vue-cli3](https://cli.vuejs.org/) 已经将复杂的流程封装完毕，构建打包文件只需要一个命令 `yarn build` 或 `npm run build`，构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，通常是 `*.js`、`*.css`、`index.html` 等静态文件，也包括了项目根的 `public/` 下的所有文件。\n\n如果需要自定义构建，比如指定 `dist` 目录等，可以通过 `/vue.config.js` 进行配置，详情参看：[Vue-cli3 配置](https://cli.vuejs.org/guide/)。\n\n### 前端路由与服务端的结合\n\nAnt Design Pro 使用的 `Vue-Router` 支持两种路由方式：`browserHistory` 和 `hashHistory` 可以参考文档 [Vue-Router URL 模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html)。\n可以在 `src/router/index.js` 中进行配置选择用哪个方式：\n\n```javascript\nimport Vue from 'vue'\nimport Router from 'vue-router'\nimport { constantRouterMap } from '@/config/router.config'\n\nVue.use(Router)\n\nexport default new Router({\n  mode: 'history', // 默认是 history 可以改为 hash\n  base: process.env.BASE_URL,\n  scrollBehavior: () => ({ y: 0 }),\n  routes: constantRouterMap\n})\n```\n\n`hashHistory` 使用如 `https://cdn.com/#/users/123` 这样的 URL，取井号后面的字符作为路径。`browserHistory` 则直接使用 `https://cdn.com/users/123` 这样的 URL。使用 `hashHistory` 时浏览器访问到的始终都是根目录下 `index.html`。使用 `browserHistory` 则需要服务器做好处理 URL 的准备，处理应用启动最初的 `/` 这样的请求应该没问题，但当用户来回跳转并在 `/users/123` 刷新时，服务器就会收到来自 `/users/123` 的请求，这时你需要配置服务器能处理这个 URL 返回正确的 `index.html`。如果你能控制服务端，我们推荐使用 `browserHistory`。\n\n### 使用 nginx \n\nnginx 作为最流行的 web 容器之一，配置和使用相当简单，只要简单的配置就能拥有高性能和高可用。推荐使用 nginx 托管。示例配置如下：\n\n```nginx\nserver {\n    listen 80;\n    # gzip config\n    gzip on;\n    gzip_min_length 1k;\n    gzip_comp_level 9;\n    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;\n    gzip_vary on;\n    gzip_disable \"MSIE [1-6]\\.\";\n\n    root /usr/share/nginx/html;\n\n    location / {\n        # 用于配合 browserHistory 使用\n        try_files $uri $uri/ /index.html;\n\n        # 如果有资源，建议使用 https + http2，配合按需加载可以获得更好的体验 \n        # rewrite ^/(.*)$ https://preview.pro.loacg.com/$1 permanent;\n\n    }\n    location /api {\n        proxy_pass https://preview.pro.loacg.com;\n        proxy_set_header   X-Forwarded-Proto $scheme;\n        proxy_set_header   Host              $http_host;\n        proxy_set_header   X-Real-IP         $remote_addr;\n    }\n}\nserver {\n  # 如果有资源，建议使用 https + http2，配合按需加载可以获得更好的体验 \n  listen 443 ssl http2 default_server;\n\n  # 证书的公私钥\n  ssl_certificate /path/to/public.crt;\n  ssl_certificate_key /path/to/private.key;\n\n  location / {\n        # 用于配合 browserHistory 使用\n        try_files $uri $uri/ /index.html;\n\n  }\n  location /api {\n      proxy_pass https://preview.pro.loacg.com;\n      proxy_set_header   X-Forwarded-Proto $scheme;\n      proxy_set_header   Host              $http_host;\n      proxy_set_header   X-Real-IP         $remote_addr;\n  }\n}\n```\n\n### 使用 spring boot\n\nSpring Boot 是使用最多的 java 框架，只需要简单的几步就可以与 Ant Design Pro 进行整合。\n首先运行 build \n```$ yarn build```  or  ``` $ npm run build ```\n然后将编译之后的文件复制到 spring boot 项目的 `/src/main/resources/static` 目录下。\n重新启动项目，访问 `http://localhost:8080/` 就可以看到效果。\n为了方便做整合，最好使用 `hash` 路由。如果你想使用 `browserHistory` ，你需要创建一个 `controller` ，并添加如下代码：\n\n```java\n@RequestMapping(\"/api/**\")\npublic ApiResult api(HttpServletRequest request, HttpServletResponse response){\n    return apiProxy.proxy(request, reponse);\n}\n\n@RequestMapping(value=\"/**\", method=HTTPMethod.GET)\npublic String index(){\n    return \"index\"\n}\n```\n\n> 注意 pro 并没有提供 java 的 api 接口实现，如果只是为了预览 demo，可以使用反向代理到 `https://preview.pro.loacg.com`。\n\n### 使用 express\n\n[express](http://expressjs.com/) 的例子\n```\napp.use(express.static(path.join(__dirname, 'build')));\n\napp.get('/*', function (req, res) {\n  res.sendFile(path.join(__dirname, 'build', 'index.html'));\n});\n```\n\n### 使用 egg\n\n[egg](https://eggjs.org/) 的例子\n```\n// controller\nexports.index = function* () {\n  yield this.render('App.jsx', {\n    context: {\n      user: this.session.user,\n    },\n  });\n};\n\n// router\napp.get('home', '/*', 'home.index');\n```\n\n关于路由更多可以参看 [Vue-Router 文档](https://router.vuejs.org/zh/) 。\n"}}]);