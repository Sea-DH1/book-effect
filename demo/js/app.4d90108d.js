(function(t){function e(e){for(var o,r,s=e[0],l=e[1],c=e[2],p=0,u=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);f&&f(e);while(u.length)u.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},a=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("3ebb")},"3ebb":function(t,e,n){var o=n("e31a");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("499e").default;i("5d65bd70",o,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"has-mouse":t.hasMouse},attrs:{id:"app"},on:{touchstart:function(e){t.hasMouse=!1}}},[n("vue-book-effects",{ref:"bookEffects",staticClass:"book-effects",attrs:{pages:t.pages,pagesHiRes:t.pagesHiRes,startPage:t.pageNum},on:{"flip-left-start":t.onFlipLeftStart,"flip-left-end":t.onFlipLeftEnd,"flip-right-start":t.onFlipRightStart,"flip-right-end":t.onFlipRightEnd,"zoom-start":t.onZoomStart,"zoom-end":t.onZoomEnd},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"action-bar"},[n("left-icon",{staticClass:"btn left",class:{disabled:!e.canFlipLeft},on:{click:e.flipLeft}}),n("plus-icon",{staticClass:"btn plus",class:{disabled:!e.canZoomIn},on:{click:e.zoomIn}}),n("span",{staticClass:"page-num"},[t._v(" Page "+t._s(e.page)+" of "+t._s(e.numPages)+" ")]),n("minus-icon",{staticClass:"btn minus",class:{disabled:!e.canZoomOut},on:{click:e.zoomOut}}),n("right-icon",{staticClass:"btn right",class:{disabled:!e.canFlipRight},on:{click:e.flipRight}})],1)]}}])})],1)},a=[],r=(n("fb6a"),n("cf16")),s=(n("d48d"),n("71f6")),l=n("ef7a"),c=n("cd27"),f=n("55fe"),p={name:"App",components:{VueBookEffects:r["a"],LeftIcon:s["a"],RightIcon:l["a"],PlusIcon:c["a"],MinusIcon:f["a"]},data:function(){return{pages:[],pagesHiRes:[],hasMouse:!0,pageNum:null}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){var n=t.$refs.bookEffects;if(n)return 37===e.keyCode&&n.canFlipLeft&&n.flipLeft(),39===e.keyCode&&n.canFlipRight?n.flipRight():void 0})),setTimeout((function(){t.pages=[null,"images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"],t.pagesHiRes=[null,"images-large/1.jpg","images-large/2.jpg","images-large/3.jpg","images-large/4.jpg","images-large/5.jpg","images-large/6.jpg"]}),1),window.addEventListener("hashchange",this.setPageFromHash),this.setPageFromHash()},methods:{onFlipLeftStart:function(t){return console.log("flip-left-start",t)},onFlipLeftEnd:function(t){return console.log("flip-left-end",t),window.location.hash="#"+t},onFlipRightStart:function(t){return console.log("flip-right-start",t)},onFlipRightEnd:function(t){return console.log("flip-right-end",t),window.location.hash="#"+t},onZoomStart:function(t){return console.log("zoom-start",t)},onZoomEnd:function(t){return console.log("zoom-end",t)},setPageFromHash:function(){var t=parseInt(window.location.hash.slice(1),10);if(isFinite(t))return this.pageNum=t}}},u=p,g=(n("034f"),n("2877")),d=Object(g["a"])(u,i,a,!1,null,null,null),h=d.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(h)}}).$mount("#app")},e31a:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,"body,html{margin:0;padding:0}#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;height:100vh;display:flex;flex-direction:column;align-items:center;background-color:#333;color:#ccc;overflow:hidden}a{color:inherit}.action-bar{width:100%;height:30px;padding:10px 0;display:flex;justify-content:center;align-items:center}.action-bar .btn{font-size:30px;color:#999}.action-bar .btn svg{bottom:0}.action-bar .btn:not(:first-child){margin-left:10px}.has-mouse .action-bar .btn:hover{color:#ccc;filter:drop-shadow(1px 1px 5px #000);cursor:pointer}.action-bar .btn:active{filter:none!important}.action-bar .btn.disabled{color:#666;pointer-events:none}.action-bar .page-num{font-size:12px;margin-left:10px}.book-effects .viewport{width:90vw;height:calc(100vh - 90px)}.book-effects .bounding-box{box-shadow:0 0 20px #000}.credit{font-size:12px;line-height:20px;margin:10px}",""]),t.exports=e}});