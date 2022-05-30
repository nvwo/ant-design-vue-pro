(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b28dc"],{2536:function(e,n){e.exports="# New Page\n\nThis \"page\" refers to a module that is configured with a route and can be directly accessed through a link. To create a new page, usually only a simple configuration is required on the scaffold.\n\n## 1. Add vue files\n\nCreate new `vue` files under `src/views`. If there are multiple related pages, you can create a new folder to place related files.\n\n![New Page](/assets/new_page1.png)\n\nThe style file uses [Less](https://less.bootcss.com/) by default. If you want, you can introduce the [antd style file](https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less) in `style` tag of `vue` file:\n\n![Introduce style files](/assets/new_page2.png)\n\n```css\n@import '~ant-design-vue/lib/style/themes/default.less';\n```\n\nThis makes it easy to get antd style variables and use them in your files, which helps maintain page consistency and facilitates custom themes.\n\n## 2. Add files into menus and routes\n\nPlease refer to  [Router&Nav](https://pro.loacg.com/docs/router-and-nav). After adding it，access `http://localhost:8080/new` and you will see the new page.\n\n![The New Page](/assets/new_page3.png)\n\n\n\n## 3. Add new model\n\nAfter the layout and routing are configured, go back to the newly created `newPage.vue` and you can start writing the business code! If you need to use the data flow in [vuex](https://vuex.vuejs.org), you also need to create the corresponding model in `src/store/model`.\n"}}]);