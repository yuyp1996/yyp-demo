webpackJsonp([1],{"+vNB":function(e,t){},"/5p1":function(e,t){},"0QBd":function(e,t){},AbOV:function(e,t){},BtZU:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("kV13"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=i("C7Lr")({name:"App"},s,!1,function(e){i("TcRM")},null,null).exports,o=i("4WWC"),l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-box"},[i("ol",e._l(e.content,function(t,n){return i("li",{key:n},[i("h3",{staticClass:"demo-title1"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"demo-box"},[i("div",{staticClass:"demo-code"},[t.css?i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("CSS代码：")]),e._v(" "),i("pre",[e._v("                "),i("code",{domProps:{innerHTML:e._s(t.css)}}),e._v("\n            ")])]):e._e(),e._v(" "),t.htmlText?i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("HTML代码：")]),e._v(" "),i("pre",[e._v("                "),i("code",{domProps:{innerHTML:e._s(t.htmlText)}}),e._v("\n            ")])]):e._e(),e._v(" "),t.js?i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("JS代码：")]),e._v(" "),i("pre",[e._v("                "),i("code",{domProps:{innerHTML:e._s(t.js)}}),e._v("\n            ")])]):e._e()]),e._v(" "),i("div",{staticClass:"demo-result",domProps:{innerHTML:e._s(t.html)}})])])}),0)])},staticRenderFns:[]};var r=i("C7Lr")({name:"mask-demo",data:function(){return{content:[{name:"png遮罩",html:'<img class="g-mask-bg1" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />',css:".g-mask-bg1{\n    width: 250px; height: 187.5px;\n    -webkit-mask-image: url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');\n    mask-image: url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');\n}"},{name:"svg遮罩",html:'<img class="g-mask-bg2" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />',css:".g-mask-bg1{\n    width: 250px; height: 187.5px;\n    -webkit-mask-image: url('../assets/imgs/star.svg');\n    mask-image: url('../assets/imgs/star.svg');\n}"},{name:"svg 自带mask遮罩(只有Firefox下有效)",html:'<img class="g-mask-bg3" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />\n<svg>\n  <defs>\n    <mask id="mask" maskContentUnits="objectBoundingBox">\n      <circle cx=".5" cy=".5" r=".5" fill="white"/>\n      <polyline points=".375 .25,0.65625 .5,.375 .75" fill="white" stroke="black" stroke-width="0.0625"/>\n    </mask>\n  </defs>\n</svg>',css:".g-mask-bg3{\n    width: 250px; height: 187.5px;\n    -webkit-mask-image: url(#mask);\n    mask-image: url(#mask);\n}"},{name:"svg 自带mask遮罩（所有浏览器以及IE9）",html:'<svg width="250" height="186">\n    <image xlink:href="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" class="g-mask-bg4" width="250" height="186"></image>\n</svg>',css:".g-mask-bg4{\n    width: 250px; height: 187.5px;\n    -webkit-mask-image: url(#mask);\n    mask-image: url(#mask);\n    mask: url(#mask);\n}"},{name:"image-set()功能符",html:'<img class="g-mask-bg5" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />',css:".g-mask-bg5{\n    width: 250px; height: 187.5px;\n    -webkit-mask-image: -webkit-image-set(url('../assets/imgs/star.svg') 1px,url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799') 2px);\n    mask-image: image-set(url('../assets/imgs/star.svg') 1px,url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799') 2px);\n}"},{name:"cross-fade()功能符",html:'<img class="g-mask-bg6" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />',css:".g-mask-bg6 {\n    width: 250px; height: 187.5px;\n    -webkit-mask-image: -webkit-cross-fade(url('../assets/imgs/star.svg'), url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799'), 50%);\n    mask-image: cross-fade(url('../assets/imgs/star.svg'), url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799'), 50%);\n}"},{name:"element()功能符资源(只有Firefox下有效)",html:'<h4 id="title">马萨卡马萨卡马萨卡</h4>\n<img class="g-mask-bg7" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />',css:"#title {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.g-mask-bg7 {\n  width: 250px; height: 187.5px;\n  -webkit-mask-image: -webkit-element(#title);\n  mask-image: -moz-element(#title);\n  mask-image: element(#title);\n}"},{name:"<gradient>渐变作为遮罩图片",html:'<img class="g-mask-bg8" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />',css:".g-mask-bg8 {\n    width: 250px; height: 187.5px;\n    -webkit-mask-image: repeating-radial-gradient(rgba(0,0,0,0) 4px, rgba(0,0,0,1) 10px, rgba(0,0,0,1) 12px);\n    mask-image: repeating-radial-gradient(rgba(0,0,0,0) 4px, rgba(0,0,0,1) 10px, rgba(0,0,0,1) 12px);\n}"}]}},created:function(){this.content.forEach(function(e){e.htmlText=e.html.replace(/</g,"&lt;").replace(/>/g,"&gt;")})}},l,!1,function(e){i("+vNB")},null,null).exports,c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-box"},[i("ol",[i("li",[i("h3",{staticClass:"demo-title1"}),e._v(" "),i("div",{staticClass:"demo-box"},[i("div",{staticClass:"demo-code"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("CSS代码：")]),e._v(" "),e._m(0)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("HTML代码：")]),e._v(" "),e._m(1)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("JS代码：")]),e._v(" "),e._m(2)])]),e._v(" "),i("div",{staticClass:"demo-result"},[i("img",{staticClass:"mask-image",style:{"mask-clip":e.maskClip,webkitMaskClip:e.maskClip},attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651"}}),e._v(" "),i("p",[e._v("请选择mask-clip："),i("select",{directives:[{name:"model",rawName:"v-model",value:e.maskClip,expression:"maskClip"}],attrs:{id:"maskClip"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.maskClip=t.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"content-box"}},[e._v("content-box")]),e._v(" "),i("option",{attrs:{value:"padding-box"}},[e._v("padding-box")]),e._v(" "),i("option",{attrs:{value:"border-box",selected:""}},[e._v("border-box")]),e._v(" "),i("option",{attrs:{value:"fill-box"}},[e._v("fill-box")]),e._v(" "),i("option",{attrs:{value:"stroke-box"}},[e._v("stroke-box")]),e._v(" "),i("option",{attrs:{value:"view-box"}},[e._v("view-box")]),e._v(" "),i("option",{attrs:{value:"no-clip"}},[e._v("no-clip")])])])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\n.mask-image {\n    width: 250px; height: 187.5px;\n    -webkit-mask-image: url('../../assets/imgs/star.svg');\n    mask-image: url('../../assets/imgs/star.svg');\n    border: 20px solid #34538b;\n    padding: 20px;\n    margin: 20px;\n}\n                  ")]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v('\n<img src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" class="mask-image">\n\n<p>请选择mask-clip：<select id="maskClip">\n    <option value="content-box">content-box</option>\n    <option value="padding-box">padding-box</option>\n    <option value="border-box" selected>border-box</option>\n    <option value="fill-box">fill-box</option>\n    <option value="stroke-box">stroke-box</option>\n    <option value="view-box">view-box</option>\n    <option value="no-clip">no-clip</option>\n</select></p>\n                  ')]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\nvar eleSel = document.getElementById('maskClip');\nvar eleImg = document.querySelector('.mask-image');\nif (eleSel && eleImg) {\n    eleSel.addEventListener('change', function () {\n        eleImg.style.webkitMaskClip = this.value;\n        eleImg.style.maskClip = this.value;\n    });\n}\n                  ")]),this._v("\n              ")])}]};var v=i("C7Lr")({name:"mask-clip-demo",data:function(){return{maskClip:"border-box"}},created:function(){}},c,!1,function(e){i("xwBm")},"data-v-ba397afc",null).exports,h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-box"},[i("ol",[i("li",[i("h3",{staticClass:"demo-title1"}),e._v(" "),i("div",{staticClass:"demo-box"},[i("div",{staticClass:"demo-code"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("CSS代码：")]),e._v(" "),e._m(0)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("HTML代码：")]),e._v(" "),e._m(1)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("JS代码：")]),e._v(" "),e._m(2)])]),e._v(" "),i("div",{staticClass:"demo-result"},[i("img",{staticClass:"mask-image",style:{"mask-origin":e.maskOrigin,webkitMaskOrigin:e.maskOrigin},attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651"}}),e._v(" "),i("p",[e._v("请选择mask-origin："),i("select",{directives:[{name:"model",rawName:"v-model",value:e.maskOrigin,expression:"maskOrigin"}],attrs:{id:"maskOrigin"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.maskOrigin=t.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"content-box"}},[e._v("content-box")]),e._v(" "),i("option",{attrs:{value:"padding-box"}},[e._v("padding-box")]),e._v(" "),i("option",{attrs:{value:"border-box",selected:""}},[e._v("border-box")]),e._v(" "),i("option",{attrs:{value:"fill-box"}},[e._v("fill-box")]),e._v(" "),i("option",{attrs:{value:"stroke-box"}},[e._v("stroke-box")]),e._v(" "),i("option",{attrs:{value:"view-box"}},[e._v("view-box")])])])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\n.mask-image {\n    width: 250px; height: 187.5px;\n    -webkit-mask-image: url('../assets/imgs/star.svg');\n    mask-image: url('../assets/imgs/star.svg');\n    border: 20px solid #34538b;\n    padding: 20px;\n    margin: 20px;\n}\n                  ")]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v('\n<img src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" class="mask-image">\n\n<p>请选择mask-origin：<select id="maskOrigin">\n    <option value="content-box">content-box</option>\n    <option value="padding-box">padding-box</option>\n    <option value="border-box" selected>border-box</option>\n    <option value="fill-box">fill-box</option>\n    <option value="stroke-box">stroke-box</option>\n    <option value="view-box">view-box</option>\n    <option value="no-clip">no-clip</option>\n</select></p>\n                  ')]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\nvar eleSel = document.getElementById('maskOrigin');\nvar eleImg = document.querySelector('.mask-image');\nif (eleSel && eleImg) {\n    eleSel.addEventListener('change', function () {\n        eleImg.style.webkitMaskOrigin = this.value;\n        eleImg.style.maskOrigin = this.value;\n    });\n}\n                  ")]),this._v("\n              ")])}]};var m=i("C7Lr")({name:"mask-clip-demo",data:function(){return{maskOrigin:"border-box"}},created:function(){}},h,!1,function(e){i("0QBd")},"data-v-5ec1e088",null).exports,p={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-box"},[i("ol",[i("li",[i("h3",{staticClass:"demo-title1"}),e._v(" "),i("div",{staticClass:"demo-box"},[i("div",{staticClass:"demo-code"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("CSS代码：")]),e._v(" "),e._m(0)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("HTML代码：")]),e._v(" "),e._m(1)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("JS代码：")]),e._v(" "),e._m(2)])]),e._v(" "),i("div",{staticClass:"demo-result"},[i("img",{staticClass:"mask-image",style:{"mask-size":e.maskSize,webkitMaskSize:e.maskSize},attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651"}}),e._v(" "),i("p",[e._v("请选择mask-size："),i("select",{directives:[{name:"model",rawName:"v-model",value:e.maskSize,expression:"maskSize"}],attrs:{id:"maskSize"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.maskSize=t.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"cover"}},[e._v("cover")]),e._v(" "),i("option",{attrs:{value:"contain"}},[e._v("contain")]),e._v(" "),i("option",{attrs:{value:"auto",selected:""}},[e._v("auto")])])])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\n.mask-image {\n    width: 250px;\n    height: 187.5px;\n    -webkit-mask-image: url('../../assets/imgs/star.svg');\n    mask-image: url('../../assets/imgs/star.svg');\n    margin: 20px;\n}\n                  ")]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v('\n<img src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" class="mask-image">\n\n<p>请选择mask-size：<select id="maskSize">\n    <option value="cover">cover</option>\n    <option value="contain">contain</option>\n    <option value="auto" selected>auto</option>\n</select></p>\n                  ')]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\nvar eleSel = document.getElementById('maskSize');\nvar eleImg = document.querySelector('.mask-image');\nif (eleSel && eleImg) {\n    eleSel.addEventListener('change', function () {\n        eleImg.style.webkitMaskSize = this.value;\n        eleImg.style.maskSize = this.value;\n    });\n}\n                  ")]),this._v("\n              ")])}]};var d=i("C7Lr")({name:"mask-size-demo",data:function(){return{maskSize:"auto"}},created:function(){}},p,!1,function(e){i("qq4P")},"data-v-772d7c15",null).exports,u={name:"mask-clip-demo",data:function(){return{isChrome:!0,maskComposite:"source-over"}},created:function(){navigator.userAgent.indexOf("Firefox")>-1&&(this.isChrome=!1,this.maskComposite="intersect")}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-box"},[i("ol",[i("li",[i("h3",{staticClass:"demo-title1"}),e._v(" "),i("div",{staticClass:"demo-box"},[i("div",{staticClass:"demo-code"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("CSS代码：")]),e._v(" "),e._m(0)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("HTML代码：")]),e._v(" "),e._m(1)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("JS代码：")]),e._v(" "),e._m(2)])]),e._v(" "),i("div",{staticClass:"demo-result"},[i("img",{staticClass:"mask-image",style:{maskComposite:e.maskComposite,webkitMaskComposite:e.maskComposite},attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651"}}),e._v(" "),i("p",[e._v("请选择mask-origin：\n              "),e.isChrome?i("select",{directives:[{name:"model",rawName:"v-model",value:e.maskComposite,expression:"maskComposite"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.maskComposite=t.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"source-over",selected:""}},[e._v("source-over")]),e._v(" "),i("option",{attrs:{value:"source-in"}},[e._v("source-in")]),e._v(" "),i("option",{attrs:{value:"source-out"}},[e._v("source-out")]),e._v(" "),i("option",{attrs:{value:"source-atop"}},[e._v("source-atop")]),e._v(" "),i("option",{attrs:{value:"destination-over"}},[e._v("destination-over")]),e._v(" "),i("option",{attrs:{value:"destination-in"}},[e._v("destination-in")]),e._v(" "),i("option",{attrs:{value:"destination-out"}},[e._v("destination-out")]),e._v(" "),i("option",{attrs:{value:"destination-atop"}},[e._v("destination-atop")]),e._v(" "),i("option",{attrs:{value:"plus-lighter"}},[e._v("plus-lighter")]),e._v(" "),i("option",{attrs:{value:"copy"}},[e._v("copy")]),e._v(" "),i("option",{attrs:{value:"clear"}},[e._v("clear")]),e._v(" "),i("option",{attrs:{value:"xor"}},[e._v("xor")])]):i("select",{directives:[{name:"model",rawName:"v-model",value:e.maskComposite,expression:"maskComposite"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.maskComposite=t.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"add"}},[e._v("add")]),e._v(" "),i("option",{attrs:{value:"subtract"}},[e._v("subtract")]),e._v(" "),i("option",{attrs:{value:"intersect",selected:""}},[e._v("intersect")]),e._v(" "),i("option",{attrs:{value:"exclude"}},[e._v("exclude")])])])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\n.mask-image {\n    width: 250px; height: 187.5px;\n    -webkit-mask-image: url('../../assets/imgs/star.svg'), url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');\n    mask-image: url('../../assets/imgs/star.svg'), url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');\n}\n                  ")]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v('\n<img src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" class="mask-image">\n\n<p>请选择mask-composite：<select id="maskOrigin">\n    <option value="source-over" selected>source-over</option>\n    <option value="source-in">source-in</option>\n    <option value="source-out">source-out</option>\n    <option value="source-atop">source-atop</option>\n    <option value="destination-over">destination-over</option>\n    <option value="destination-in">destination-in</option>\n    <option value="destination-out">destination-out</option>\n    <option value="destination-atop">destination-atop</option>\n    <option value="plus-lighter">plus-lighter</option>\n    <option value="copy">copy</option>\n    <option value="clear">clear</option>\n    <option value="xor">xor</option>\n</select></p>\n或者：\n<select id="maskComposite">\n  <option value="add">add</option>\n  <option value="subtract">subtract</option>\n  <option value="intersect" selected>intersect</option>\n  <option value="exclude">exclude</option>\n</select></p>\n                  ')]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\nvar eleSel = document.getElementById('maskComposite');\nvar eleImg = document.querySelector('.mask-image');\nif (eleSel && eleImg) {\n    eleSel.addEventListener('change', function () {\n        eleImg.style.webkitMaskComposite = this.value;\n        eleImg.style.maskComposite = this.value;\n    });\n}\n                  ")]),this._v("\n              ")])}]};var _=i("C7Lr")(u,g,!1,function(e){i("BtZU")},"data-v-77f87474",null).exports,f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-box"},[i("ol",[i("li",[i("h3",{staticClass:"demo-title1"}),e._v(" "),i("div",{staticClass:"demo-box"},[i("div",{staticClass:"demo-code"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("CSS代码：")]),e._v(" "),e._m(0)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("HTML代码：")]),e._v(" "),i("pre",[e._v("                  "),i("code",{domProps:{innerHTML:e._s(e.html)}}),e._v("\n              ")])])]),e._v(" "),i("div",{staticClass:"demo-result"},[i("div",{staticClass:"nth-child"},[e._l(5,function(t){return e.isDeleteSpan?e._e():i("span",[e._v("\n                我是第"+e._s(t)+"个span元素\n              ")])}),e._v(" "),e._l(5,function(t){return i("p",[e._v("\n                我是第"+e._s(t)+"个p元素\n              ")])})],2),e._v(" "),i("button",{on:{click:function(t){e.isDeleteSpan=!e.isDeleteSpan}}},[e._v(e._s(e.isDeleteSpan?"显示":"隐藏")+"span元素")])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\n.nth-child {\n  p,span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n  span {\n    display: block;\n  }\n  p:nth-child(2) {\n    background: #000;\n  }\n}\n                  ")]),this._v("\n              ")])}]};var b=i("C7Lr")({name:"nth-childEle-demo",data:function(){return{html:'<div class="nth-child">\n  <span v-for="item in 5">\n    我是第{{item}}个span元素\n  </span>\n  <p v-for="item in 5">\n    我是第{{item}}个p元素\n  </p>\n</div>\n<button @click="isDeleteSpan = !isDeleteSpan">{{isDeleteSpan?\'显示\':\'隐藏\'}}span元素</button>',isDeleteSpan:!1}},created:function(){this.html=this.html.replace(/</g,"&lt;").replace(/>/g,"&gt;")}},f,!1,function(e){i("AbOV")},"data-v-222bac4b",null).exports,x={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-box"},[i("ol",[i("li",[i("h3",{staticClass:"demo-title1"}),e._v(" "),i("div",{staticClass:"demo-box"},[i("div",{staticClass:"demo-code"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("CSS代码：")]),e._v(" "),e._m(0)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("HTML代码：")]),e._v(" "),i("pre",[e._v("                  "),i("code",{domProps:{innerHTML:e._s(e.html)}}),e._v("\n              ")])])]),e._v(" "),i("div",{staticClass:"demo-result"},[i("div",{staticClass:"nth-child"},[e._l(5,function(t){return e.isDeleteSpan?e._e():i("span",{class:{"child-item":!e.isDelSpanClass}},[e._v("\n                我是第"+e._s(t)+"个span元素\n              ")])}),e._v(" "),e._l(5,function(t){return i("p",{staticClass:"child-item"},[e._v("\n                我是第"+e._s(t)+"个p元素\n              ")])})],2),e._v(" "),i("button",{on:{click:function(t){e.isDeleteSpan=!e.isDeleteSpan}}},[e._v(e._s(e.isDeleteSpan?"显示":"隐藏")+"span元素")]),e._v(" "),i("button",{on:{click:function(t){e.isDelSpanClass=!e.isDelSpanClass}}},[e._v(e._s(e.isDelSpanClass?"添加":"删除")+"span元素的class")])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\n.nth-child {\n  p,span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n  span {\n    display: block;\n  }\n  .child-item:nth-child(2) {\n    background: #000;\n  }\n}\n                  ")]),this._v("\n              ")])}]};var k=i("C7Lr")({name:"nth-childEle-demo",data:function(){return{html:'<div class="nth-child">\n  <span :class="{\'child-item\': !isDelSpanClass}" v-for="item in 5" v-if="!isDeleteSpan">\n    我是第{{item}}个span元素\n  </span>\n  <p class="child-item" v-for="item in 5">\n    我是第{{item}}个p元素\n  </p>\n</div>\n<button @click="isDeleteSpan = !isDeleteSpan">{{isDeleteSpan?\'显示\':\'隐藏\'}}span元素</button>\n<button @click="isDelSpanClass = !isDelSpanClass">{{isDelSpanClass?\'添加\':\'删除\'}}span元素的class</button>',isDeleteSpan:!1,isDelSpanClass:!1}},created:function(){this.html=this.html.replace(/</g,"&lt;").replace(/>/g,"&gt;")}},x,!1,function(e){i("o0ty")},"data-v-dd90e99c",null).exports,C={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-box"},[i("ol",[i("li",[i("h3",{staticClass:"demo-title1"}),e._v(" "),i("div",{staticClass:"demo-box"},[i("div",{staticClass:"demo-code"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("CSS代码：")]),e._v(" "),e._m(0)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("HTML代码：")]),e._v(" "),i("pre",[e._v("                  "),i("code",{domProps:{innerHTML:e._s(e.html)}}),e._v("\n              ")])])]),e._v(" "),i("div",{staticClass:"demo-result"},[i("div",{staticClass:"nth-type"},[i("p",[e._v("\n                我是第1个p元素\n              ")]),e._v(" "),e._l(5,function(t){return e.isDeleteSpan?e._e():i("span",[e._v("\n                我是第"+e._s(t)+"个span元素\n              ")])}),e._v(" "),e._l(5,function(t){return i("p",[e._v("\n                我是第"+e._s(t+1)+"个p元素\n              ")])})],2),e._v(" "),i("button",{on:{click:function(t){e.isDeleteSpan=!e.isDeleteSpan}}},[e._v(e._s(e.isDeleteSpan?"显示":"隐藏")+"span元素")])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\n.nth-type {\n  p,span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n  span {\n    display: block;\n  }\n  p:nth-of-type(2) {\n    background: #000;\n  }\n}\n                  ")]),this._v("\n              ")])}]};var w=i("C7Lr")({name:"nth-childEle-demo",data:function(){return{html:'<div class="nth-type">\n  <p>\n    我是第1个p元素\n  </p>\n  <span v-for="item in 5" v-if="!isDeleteSpan">\n    我是第{{item}}个span元素\n  </span>\n  <p v-for="item in 5">\n    我是第{{item+1}}个p元素\n  </p>\n</div>\n<button @click="isDeleteSpan = !isDeleteSpan">{{isDeleteSpan?\'显示\':\'隐藏\'}}span元素</button>',isDeleteSpan:!1}},created:function(){this.html=this.html.replace(/</g,"&lt;").replace(/>/g,"&gt;")}},C,!1,function(e){i("gU1i")},"data-v-3729e5fc",null).exports,S={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-box"},[i("ol",[i("li",[i("h3",{staticClass:"demo-title1"}),e._v(" "),i("div",{staticClass:"demo-box"},[i("div",{staticClass:"demo-code"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("CSS代码：")]),e._v(" "),e._m(0)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("HTML代码：")]),e._v(" "),i("pre",[e._v("                  "),i("code",{domProps:{innerHTML:e._s(e.html)}}),e._v("\n              ")])])]),e._v(" "),i("div",{staticClass:"demo-result"},[i("div",{staticClass:"nth-type"},[i("p",[e._v("\n                我是第1个p元素\n              ")]),e._v(" "),e._l(5,function(t){return e.isDeleteSpan?e._e():i("span",{class:{"type-item":!e.isDelSpanClass}},[e._v("\n                我是第"+e._s(t)+"个span元素\n              ")])}),e._v(" "),e._l(5,function(t){return i("p",{staticClass:"type-item"},[e._v("\n                我是第"+e._s(t+1)+"个p元素\n              ")])})],2),e._v(" "),i("button",{on:{click:function(t){e.isDeleteSpan=!e.isDeleteSpan}}},[e._v(e._s(e.isDeleteSpan?"显示":"隐藏")+"span元素")]),e._v(" "),i("button",{on:{click:function(t){e.isDelSpanClass=!e.isDelSpanClass}}},[e._v(e._s(e.isDelSpanClass?"添加":"删除")+"span元素的class")])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\n.nth-type {\n  p,span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n  span {\n    display: block;\n  }\n  .type-item:nth-of-type(2) {\n    background: #000;\n  }\n}\n                  ")]),this._v("\n              ")])}]};var y=i("C7Lr")({name:"nth-childEle-demo",data:function(){return{html:'<div class="nth-type">\n  <p>\n    我是第1个p元素\n  </p>\n  <span :class="{\'type-item\': !isDelSpanClass}" v-for="item in 5" v-if="!isDeleteSpan">\n    我是第{{item}}个span元素\n  </span>\n  <p class="type-item" v-for="item in 5">\n    我是第{{item+1}}个p元素\n  </p>\n</div>\n<button @click="isDeleteSpan = !isDeleteSpan">{{isDeleteSpan?\'显示\':\'隐藏\'}}span元素</button>\n<button @click="isDelSpanClass = !isDelSpanClass">{{isDelSpanClass?\'添加\':\'删除\'}}span元素的class</button>',isDeleteSpan:!1,isDelSpanClass:!1}},created:function(){this.html=this.html.replace(/</g,"&lt;").replace(/>/g,"&gt;")}},S,!1,function(e){i("WWzg")},"data-v-40bf86fc",null).exports,E={name:"adaptive-textarea-demo",mounted:function(){var e=document.getElementById("eleArea"),t=document.getElementById("eleSpan");e&&t&&e.addEventListener("input",function(e){t.innerText=e.target.value})}},D={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-box"},[i("ol",[i("li",[i("h3",{staticClass:"demo-title1"}),e._v(" "),i("div",{staticClass:"demo-box"},[i("div",{staticClass:"demo-code"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("CSS代码：")]),e._v(" "),e._m(0)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("HTML代码：")]),e._v(" "),e._m(1)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("JS代码：")]),e._v(" "),e._m(2)])]),e._v(" "),e._m(3)])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\n.g-table-textarea{\n    /*利用span内容自动撑起最外部div高度，textarea则高度100%自适应高度*/\n    position: relative;\n    border: 1px solid;\n    min-height: 50px;/*保持最小高度*/\n    span{\n      word-wrap:break-word;\n      word-break: break-all;\n      line-height: inherit;\n      color: #666;\n      display:block;\n      font-size: inherit;\n    }\n    textarea{\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      font-size: inherit;\n      color: inherit;\n      line-height: inherit;\n      resize:none;\n      overflow:hidden;\n      word-break: break-all;\n    }\n}\n                  ")]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v('\n<div class="g-table-textarea">\n  <span id="eleSpan"></span>\n  <textarea id="eleArea"></textarea>\n</div>\n                  ')]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\nvar eleArea = document.getElementById('eleArea');\nvar eleSpan = document.getElementById('eleSpan');\nif (eleArea && eleSpan) {\n  eleArea.addEventListener('input', function (e) {\n    eleSpan.innerText = e.target.value;\n  });\n}\n                  ")]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"demo-result"},[t("div",{staticClass:"g-table-textarea"},[t("span",{attrs:{id:"eleSpan"}}),this._v(" "),t("textarea",{attrs:{id:"eleArea"}})])])}]};var L=i("C7Lr")(E,D,!1,function(e){i("gIJh")},"data-v-602f0906",null).exports,N={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-box"},[i("ol",[i("li",[i("h3",{staticClass:"demo-title1"}),e._v(" "),i("div",{staticClass:"demo-box"},[i("div",{staticClass:"demo-code"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("CSS代码：")]),e._v(" "),e._m(0)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("HTML代码：")]),e._v(" "),e._m(1)])]),e._v(" "),e._m(2)])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\n.blockcontent{\n  width:60px;\n  min-height:60px;\n  border:1px solid #ccc;\n  margin:100px auto;\n  padding:10px;\n}\n                  ")]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v('\n<div class="blockcontent" contenteditable="true"></div>\n                  ')]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"demo-result"},[t("div",{staticClass:"blockcontent",attrs:{contenteditable:"true"}})])}]};var $=i("C7Lr")({name:"adaptive-div-demo"},N,!1,function(e){i("NQYh")},"data-v-38b1b1f6",null).exports,T={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-box"},[i("ol",[i("li",[i("h3",{staticClass:"demo-title1"}),e._v(" "),i("div",{staticClass:"demo-box"},[i("div",{staticClass:"demo-code"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("CSS代码：")]),e._v(" "),e._m(0)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("HTML代码：")]),e._v(" "),e._m(1)])]),e._v(" "),e._m(2)])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\n.g-box{\n  height: 300px;\n  overflow-y: auto;\n}\n.auto-pos {\n  margin-top: 100px;\n  line-height: 30px;\n  position: sticky;\n  top: 20px;\n  background: #ccc;\n}\n                  ")]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v('\n<div class="g-box">\n  <div class="auto-pos">自动定位</div>\n  <div style="height: 900px"></div>\n</div>\n                  ')]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"demo-result"},[t("div",{staticClass:"g-box"},[t("div",{staticClass:"auto-pos"},[this._v("自动定位")]),this._v(" "),t("div",{staticStyle:{height:"900px",background:"url('https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651')"}})])])}]};var M=i("C7Lr")({name:"autoPos"},T,!1,function(e){i("/5p1")},"data-v-7a69554b",null).exports,z={name:"autoPos",mounted:function(){var e=document.getElementById("eleBox"),t=document.getElementById("elePos"),i=t.offsetTop;e&&t&&e.addEventListener("scroll",function(n){e.scrollTop>i-10?t.style.cssText="position:fixed;margin:0;top:"+(e.offsetTop+10)+"px;width:"+e.clientWidth+"px":t.style.cssText="position:inherit;"})}},I={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-box"},[i("ol",[i("li",[i("h3",{staticClass:"demo-title1"}),e._v(" "),i("div",{staticClass:"demo-box"},[i("div",{staticClass:"demo-code"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("CSS代码：")]),e._v(" "),e._m(0)]),e._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("h3",[e._v("HTML代码：")]),e._v(" "),e._m(1)])]),e._v(" "),e._m(2)])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v("\n.g-box{\n  height: 300px;\n  overflow-y: auto;\n}\n.auto-pos {\n  margin-top: 100px;\n  line-height: 30px;\n  position: sticky;\n  top: 20px;\n  background: #ccc;\n}\n                  ")]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[this._v("                  "),t("code",[this._v('\n<div class="g-box">\n  <div class="auto-pos">自动定位</div>\n  <div style="height: 900px"></div>\n</div>\n                  ')]),this._v("\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"demo-result"},[t("div",{staticClass:"g-box",attrs:{id:"eleBox"}},[t("div",{staticClass:"auto-pos",attrs:{id:"elePos"}},[this._v("自动定位")]),this._v(" "),t("div",{staticStyle:{height:"900px",background:"url('https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651')"}})])])}]};var B=i("C7Lr")(z,I,!1,function(e){i("WPv/")},"data-v-ebce85c0",null).exports;n.a.use(o.a);var H=new o.a({routes:[{path:"",redirect:"/maskDemo"},{path:"/maskDemo",name:"maskDemo",component:r},{path:"/maskClipDemo",name:"maskClipDemo",component:v},{path:"/maskOriginDemo",name:"maskOriginDemo",component:m},{path:"/maskSizeDemo",name:"maskSizeDemo",component:d},{path:"/maskComposite",name:"maskComposite",component:_},{path:"/nthChildEle",name:"nthChildEle",component:b},{path:"/nthChildClass",name:"nthChildClass",component:k},{path:"/nthTypeEle",name:"nthTypeEle",component:w},{path:"/nthTypeClass",name:"nthTypeClass",component:y},{path:"/adaptiveTextarea",name:"adaptiveTextarea",component:L},{path:"/adaptiveDiv",name:"adaptiveDiv",component:$},{path:"/autoPos",name:"autoPos",component:M},{path:"/autoPosJS",name:"autoPosJS",component:B}]}),j=i("ZZLV"),O=i.n(j);i("lOhf");n.a.directive("highlight",function(e){var t=e.querySelectorAll("pre code");setTimeout(function(){t.forEach(function(e){O.a.highlightBlock(e)})},200)}),n.a.config.productionTip=!1,new n.a({el:"#app",router:H,components:{App:a},template:"<App/>"})},NQYh:function(e,t){},TcRM:function(e,t){},"WPv/":function(e,t){},WWzg:function(e,t){},gIJh:function(e,t){},gU1i:function(e,t){},lOhf:function(e,t){},o0ty:function(e,t){},qq4P:function(e,t){},xwBm:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d40e9d24a7befa9bb45b.js.map