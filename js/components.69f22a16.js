(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components"],{2311:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-wrapper"},[n("a-row",[n("a-col",{staticClass:"main-menu",attrs:{xs:24,sm:24,md:24,lg:6,xl:5,xxl:4}},[n("a-affix",{attrs:{"offset-top":0}},[n("section",{staticClass:"main-menu-inner"},[n("a-menu",{staticClass:"aside-container",attrs:{mode:"inline",selectedKeys:e.selectedKeys,inlineIndent:54},on:{click:e.handleClick}},e._l(e.componentsRouterMap,(function(t){return n("a-menu-item",{key:t.url},[n("router-link",{attrs:{to:{name:"components",params:{page:t.url}}}},[n("span",[e._v(e._s(t.title))]),e.isCN?n("span",{staticClass:"chinese"},[e._v(e._s(t.cnTitle))]):e._e()])],1)})),1)],1)])],1),n("a-col",{staticClass:"main-container",attrs:{xs:24,sm:24,md:24,lg:18,xl:19,xxl:20}},[n("div",{staticClass:"markdown",domProps:{innerHTML:e._s(e.marked(e.text))}})])],1),n("a-back-top")],1)},s=[],r=(n("a481"),n("dfe4")),c=n("d73b"),i=n("0e54"),o=n.n(i),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US";return n("d931")("./".concat(e,".").concat(t,".md"))},u=new o.a.Renderer;u.heading=function(e,t){return"<h"+t+' id="'+e.replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},o.a.setOptions({renderer:u,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!0,smartLists:!0,smartypants:!0});var l={name:"Components",mixins:[r["a"]],data:function(){return{selectedKeys:[],componentsRouterMap:c["a"],marked:o.a,text:""}},computed:{isCN:function(){return"zh-CN"===this.currentLang}},created:function(){var e=this.$route.params,t=e.page||"avatar-list";this.$router.push({name:"components",params:{page:t}}),t&&""!==t&&this.updateMenu()},methods:{handleClick:function(e){this.selectedKeys=[e.key]},updateMenu:function(){var e=this,t=this.$route.params,n=this.$message;if(t.page){this.selectedKeys=[t.page];var a=d(t.page,this.currentLang);console.log("import markdown:",a),a.then((function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];e.text=n[0].default})).catch((function(e){console.log("import err",e),n.error(e.message)}))}}},watch:{$route:function(){this.updateMenu()},currentLang:function(){this.updateMenu()}}},m=l,h=n("2877"),p=Object(h["a"])(m,a,s,!1,null,null,null);t["default"]=p.exports},d931:function(e,t,n){var a={"./action-permission.zh-CN.md":["a8c3","chunk-2d20975d"],"./avatar-list.zh-CN.md":["e863","chunk-2d226366"],"./charts.zh-CN.md":["8ab0","chunk-2d0e8ded"],"./count-down.zh-CN.md":["f61e","chunk-2d22cfda"],"./description-list.zh-CN.md":["8b62","chunk-2d0e8c5c"],"./ellipsis.zh-CN.md":["c8ea","chunk-2d218087"],"./footer-toolbar.zh-CN.md":["89ec","chunk-2d0df855"],"./icon-selector.zh-CN.md":["39d2","chunk-2d0bb22a"],"./number-info.zh-CN.md":["b8fa","chunk-2d210c47"],"./result.zh-CN.md":["50e5","chunk-2d0c7941"],"./s-table.zh-CN.md":["2122","chunk-2d0b19b5"],"./trend.zh-CN.md":["2c3e","chunk-2d0bd5b9"],"./two-step-captcha.zh-CN.md":["ff70","chunk-2d23848f"]};function s(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],s=t[0];return n.e(t[1]).then((function(){return n.t(s,7)}))}s.keys=function(){return Object.keys(a)},s.id="d931",e.exports=s}}]);