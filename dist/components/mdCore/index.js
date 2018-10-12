/*!
* Vue Material v0.8.1-laxy.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})("undefined"!=typeof self?self:this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=446)})({0:function(e,t){e.exports=function(e,t,n,r,i){var o,f=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,f=e.default);var s="function"==typeof f?f.options:f;t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),r&&(s._scopeId=r);var u;if(i?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},s._ssrRegister=u):n&&(u=n),u){var c=s.functional,d=c?s.render:s.beforeCreate;c?s.render=function(e,t){return u.call(t),d(e,t)}:s.beforeCreate=d?[].concat(d,u):[u]}return{esModule:o,exports:f,options:s}}},10:function(e,t,n){var r=n(8),i=n(17);e.exports=n(4)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},13:function(e,t,n){var r=n(6);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},14:function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},15:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},16:function(e,t,n){var r=n(3),i=n(2),o=n(30),f=n(10),a=n(5),s=function(e,t,n){var u,c,d,l=e&s.F,p=e&s.G,h=e&s.S,m=e&s.P,b=e&s.B,A=e&s.W,v=p?i:i[t]||(i[t]={}),g=v.prototype,y=p?r:h?r[t]:(r[t]||{}).prototype;p&&(n=t);for(u in n)(c=!l&&y&&void 0!==y[u])&&a(v,u)||(d=c?y[u]:n[u],v[u]=p&&"function"!=typeof y[u]?n[u]:b&&c?o(d,r):A&&y[u]==d?(function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t})(d):m&&"function"==typeof d?o(Function.call,d):d,m&&((v.virtual||(v.virtual={}))[u]=d,e&s.R&&g&&!g[u]&&f(g,u,d)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},17:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},18:function(e,t,n){var r=n(23)("keys"),i=n(21);e.exports=function(e){return r[e]||(r[e]=i(e))}},19:function(e,t,n){var r=n(31),i=n(24);e.exports=Object.keys||function(e){return r(e,i)}},2:function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},20:function(e,t){e.exports=!0},21:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},22:function(e,t,n){var r=n(14);e.exports=function(e){return Object(r(e))}},23:function(e,t,n){var r=n(2),i=n(3),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(20)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},24:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},25:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},26:function(e,t,n){var r=n(25);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},27:function(e,t,n){var r=n(6),i=n(3).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},28:function(e,t,n){var r=n(6);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},29:function(e,t,n){var r=n(15),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},3:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},30:function(e,t,n){var r=n(36);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},31:function(e,t,n){var r=n(5),i=n(9),o=n(34)(!1),f=n(18)("IE_PROTO");e.exports=function(e,t){var n,a=i(e),s=0,u=[];for(n in a)n!=f&&r(a,n)&&u.push(n);for(;t.length>s;)r(a,n=t[s++])&&(~o(u,n)||u.push(n));return u}},32:function(e,t,n){e.exports=!n(4)&&!n(7)((function(){return 7!=Object.defineProperty(n(27)("div"),"a",{get:function(){return 7}}).a}))},34:function(e,t,n){var r=n(9),i=n(29),o=n(35);e.exports=function(e){return function(t,n,f){var a,s=r(t),u=i(s.length),c=o(f,u);if(e&&n!=n){for(;u>c;)if((a=s[c++])!=a)return!0}else for(;u>c;c++)if((e||c in s)&&s[c]===n)return e||c||0;return!e&&-1}}},35:function(e,t,n){var r=n(15),i=Math.max,o=Math.min;e.exports=function(e,t){return e=r(e),e<0?i(e+t,0):o(e,t)}},36:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},39:function(e,t,n){e.exports={default:n(45),__esModule:!0}},4:function(e,t,n){e.exports=!n(7)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},446:function(e,t,n){e.exports=n(80)},45:function(e,t,n){n(46),e.exports=n(2).Object.keys},46:function(e,t,n){var r=n(22),i=n(19);n(47)("keys",(function(){return function(e){return i(r(e))}}))},47:function(e,t,n){var r=n(16),i=n(2),o=n(7);e.exports=function(e,t){var n=(i.Object||{})[e]||Object[e],f={};f[e]=t(n),r(r.S+r.F*o((function(){n(1)})),"Object",f)}},5:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},6:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},7:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},8:function(e,t,n){var r=n(13),i=n(32),o=n(28),f=Object.defineProperty;t.f=n(4)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return f(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},80:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if(i.installed)return void console.warn("Vue Material is already installed.");i.installed=!0,e.use(f.default),e.use(s.default),e.material.styles.push(c.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=n(81),f=r(o),a=n(87),s=r(a),u=n(92),c=r(u);n(93),e.exports=t.default},81:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){console.warn("The theme '"+e+"' doesn't exists. You need to register it first in order to use.")}function o(e,t,n,r){m.createNewStyleElement&&(e=x(e,t,n),e=e.replace(/THEME_NAME/g,r),(0,m.createNewStyleElement)(e,r))}function f(e){e.material=new e({data:{currentTheme:null,inkRipple:!0,prefix:"md-theme-",styles:[],themes:{default:v}},watch:{styles:function(){this.refreshInjectedStyles()}},methods:{registerPalette:function(e,t){c.default[e]=t},useTheme:function(e){if(!(e in y)){var t=this.themes[e];return t?(o(this.styles.join("\n"),t,e,this.prefix+e),y[e]=!0):i(e)}},refreshInjectedStyles:function(){var e=this,t=this.styles.join("\n"),n=this.prefix;(0,s.default)(y).forEach((function(r){var i=e.themes[r];o(t,i,r,n+r)}))},registerTheme:function(e,t){var n=this;"string"==typeof e?this.themes[e]=t:(0,s.default)(e).forEach((function(t){return n.themes[t]=e[t]}))},setCurrentTheme:function(e){if(e!==this.currentTheme){var t=this.prefix;this.useTheme(e),m.changeHtmlMetaColor&&(0,m.changeHtmlMetaColor)(g[e],t+e,t+this.currentTheme),this.currentTheme=e}}},created:function(){this.setCurrentTheme("default")}}),e.component("md-theme",h.default),e.prototype.$material=e.material}Object.defineProperty(t,"__esModule",{value:!0});var a=n(39),s=r(a);t.default=f;var u=n(82),c=r(u),d=n(83),l=r(d),p=n(84),h=r(p),m=n(86),b=["primary","accent","background","warn","hue-1","hue-2","hue-3"],A=new RegExp("("+b.join("|").toUpperCase()+")-(COLOR|CONTRAST)-?(A?\\d*)-?(\\d*\\.?\\d+)?","g"),v={primary:"indigo",accent:"pink",background:"white",warn:"deep-orange"},g={},y={},x=function(e,t,n){return e.replace(A,(function(e,r,i,o,f){var a=void 0,s=0==+o?500:o;if(r=r.toLowerCase(),t[r]?"string"==typeof t[r]?a=c.default[t[r]]:(a=c.default[t[r].color]||c.default[v[r]],s=0==+o?t[r].hue:o):a=c.default[v[r]],"COLOR"===i){var u=c.default[t[r]];return s||u||("accent"===r?s="A200":"background"===r&&(s=50)),"primary"===r&&(g[n]=a[s]),f?(0,l.default)(a[s],f):a[s]}var d=a.darkText.indexOf(s)>=0;return t[r]&&"string"!=typeof t[r]&&t[r].textColor&&("black"===t[r].textColor?d=!0:"white"===t[r].textColor&&(d=!1)),d?f?(0,l.default)("#000",f):"rgba(0, 0, 0, .87)":f?(0,l.default)("#fff",f):"rgba(255, 255, 255, .87)"}))};e.exports=t.default},82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",darkText:[50,100,200,300,"A100"]},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",darkText:[50,100,200,"A100"]},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",darkText:[50,100,200,"A100"]},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",darkText:[50,100,200,"A100"]},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",darkText:[50,100,200,"A100"]},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",darkText:[50,100,200,300,400,"A100"]},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",darkText:[50,100,200,300,400,500,"A100","A200","A300"]},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",darkText:[50,100,200,300,400,500,600,"A100","A200","A300","A400"]},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",darkText:[50,100,200,300,400,"A100","A200","A300","A400"]},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",darkText:[50,100,200,300,400,500,"A100","A200","A300","A400"]},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",darkText:[50,100,200,300,400,500,600,"A100","A200","A300","A400"]},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",darkText:[50,100,200,300,400,500,600,700,800,"A100","A200","A300","A400"]},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",darkText:[50,100,200,300,400,500,600,700,800,900,"A100","A200","A300","A400"]},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",darkText:[50,100,200,300,400,500,600,700,800,900,"A100","A200","A300","A400"]},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",darkText:[50,100,200,300,400,500,600,700,"A100","A200","A300","A400"]},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",darkText:[50,100,200,300,400,"A100","A200"]},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",darkText:[50,100,200,"A100","A200","A300","A400"]},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#fff",A200:"#000000",A400:"#303030",A700:"#616161",darkText:[50,100,200,300,400,500,"A100"]},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",darkText:[50,100,200,300,"A100","A200","A300","A400"]},white:{50:"#fff",100:"#fff",200:"#fff",300:"#fff",400:"#fff",500:"#fff",600:"#fff",700:"#fff",800:"#fff",900:"#fff",A100:"#fff",A200:"#fff",A400:"#fff",A700:"#fff",darkText:[50,100,200,300,400,500,600,700,800,900,"A100","A200","A300","A400"]},black:{50:"#000",100:"#000",200:"#000",300:"#000",400:"#000",500:"#000",600:"#000",700:"#000",800:"#000",900:"#000",A100:"#000",A200:"#000",A400:"#000",A700:"#000",darkText:[]}},e.exports=t.default},83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n="",r="",i="",o=e.toString().match(/^#?(([0-9a-zA-Z]{3}){1,3})$/);if(!o)throw new Error("Invalid color"+e);if(e=o[1],6===e.length)n=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),i=parseInt(e.substring(4,6),16);else if(3===e.length){var f=e.substring(0,1),a=e.substring(1,2),s=e.substring(2,3);n=parseInt(f+f,16),r=parseInt(a+a,16),i=parseInt(s+s,16)}return t?(t>1&&(t/=100),"rgba("+n+", "+r+", "+i+", "+t+")"):"rgb("+n+", "+r+", "+i+")"},e.exports=t.default},84:function(e,t,n){var r=n(0)(n(85),null,null,null,null);e.exports=r.exports},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-theme",props:{mdTag:String,mdName:{type:String,default:"default"}},render:function(e){return this.mdTag||this.$slots.default.length>1?e(this.mdTag||"div",{staticClass:this.$material.prefix+this.mdName},this.$slots.default):this.$slots.default[0]},watch:{mdName:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdName;e&&this.$material.useTheme(e)}},e.exports=t.default},86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.changeHtmlMetaColor=void 0,t.createNewStyleElement=void 0;"server"!==Object({NODE_ENV:"development"}).VUE_ENV&&(t.changeHtmlMetaColor=function(e,t,n){var r=document.querySelector('meta[name="theme-color"]');r?r.setAttribute("content",e):(r=document.createElement("meta"),r.setAttribute("name","theme-color"),r.setAttribute("content",e),document.head.appendChild(r)),document.body.classList.remove(n),document.body.classList.add(t)},t.createNewStyleElement=function(e,t){var n=document.head,r=n.querySelector("#"+t);if(r)r.textContent=e;else{var i=document.createElement("style");i.type="text/css",i.id=t,i.textContent=e,n.appendChild(i)}})},87:function(e,t,n){"use strict";function r(e){e.component("md-ink-ripple",o.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(88),o=(function(e){return e&&e.__esModule?e:{default:e}})(i);e.exports=t.default},88:function(e,t,n){function r(e){n(89)}var i=n(0)(n(90),n(91),r,null,null);e.exports=i.exports},89:function(e,t){},9:function(e,t,n){var r=n(26),i=n(14);e.exports=function(e){return r(i(e))}},90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){"start"===t?(e.addEventListener("mousedown",n),e.addEventListener("touchstart",n)):(e.addEventListener("mouseup",n),e.addEventListener("touchend",n))},i=function(e,t,n){"start"===t?(e.removeEventListener("mousedown",n),e.removeEventListener("touchstart",n)):(e.removeEventListener("mouseup",n),e.removeEventListener("touchend",n))};t.default={name:"md-ink-ripple",props:{mdDisabled:Boolean},data:function(){return{mounted:!1,rippleElement:null,parentElement:null,parentDimensions:{width:null,height:null,top:null,left:null},awaitingComplete:!1,hasCompleted:!1,fadeOut:!1,active:!1}},computed:{classes:function(){return{"md-fadeout":this.fadeOut,"md-active":this.active}},styles:function(){return{width:this.parentDimensions.width,height:this.parentDimensions.height,top:this.parentDimensions.top,left:this.parentDimensions.left}},disabled:function(){return this.mdDisabled||!this.$material.inkRipple}},watch:{disabled:function(e){e?this.destroy():this.init()}},methods:{checkAvailablePositions:function(e){return["relative","absolute","fixed"].indexOf(getComputedStyle(e).position)>-1},getClosestPositionedParent:function(e){var t=e&&e.parentNode;return!(!t||"body"===t.tagName.toLowerCase())&&(this.checkAvailablePositions(e)?e:this.getClosestPositionedParent(t))},getParentSize:function(){var e=this.parentElement;return Math.round(Math.max(e.offsetWidth,e.offsetHeight))+"px"},getClickPosition:function(e){if(this.$refs.ripple){var t=this.parentElement.getBoundingClientRect(),n=e.pageY,r=e.pageX;return"touchstart"===e.type&&(n=e.changedTouches[0].pageY,r=e.changedTouches[0].pageX),{top:n-t.top-this.$refs.ripple.offsetHeight/2-document.body.scrollTop+"px",left:r-t.left-this.$refs.ripple.offsetWidth/2-document.body.scrollLeft+"px"}}return!1},setDimensions:function(){var e=this.getParentSize();this.parentDimensions.width=e,this.parentDimensions.height=e},setPositions:function(e){var t=this.getClickPosition(e);t&&(this.parentDimensions.top=t.top,this.parentDimensions.left=t.left)},clearState:function(){this.active=!1,this.fadeOut=!1,this.hasCompleted=!1,this.setDimensions(),window.clearTimeout(this.awaitingComplete),i(document.body,"end",this.endRipple)},startRipple:function(e){var t=this;"touchstart"===e.type?this.previous.push("touch"):this.previous.push("mouse"),this.previous=this.previous.splice(this.previous.length-2,this.previous.length),this.previous.length>=2&&"touch"===this.previous[1]&&"mouse"===this.previous[0]||(this.clearState(),this.awaitingComplete=window.setTimeout((function(){t.hasCompleted=!0}),400),r(document.body,"end",this.endRipple),this.$nextTick((function(){t.setPositions(e),t.active=!0})))},endRipple:function(){var e=this;this.hasCompleted?this.fadeOut=!0:this.awaitingComplete=window.setTimeout((function(){e.fadeOut=!0}),200),i(document.body,"end",this.endRipple)},registerTriggerEvent:function(){r(this.parentElement,"start",this.startRipple)},unregisterTriggerEvent:function(){this.parentElement&&i(this.parentElement,"start",this.startRipple)},init:function(){this.rippleElement=this.$el,this.parentElement=this.getClosestPositionedParent(this.$el.parentNode),this.previous=["mouse"],this.parentElement?(this.rippleElement.parentNode.removeChild(this.rippleElement),this.parentElement.querySelectorAll(".md-ink-ripple").length>0?this.$destroy():(this.parentElement.appendChild(this.rippleElement),this.registerTriggerEvent(),this.setDimensions())):this.$destroy()},destroy:function(){this.rippleElement&&this.rippleElement.parentNode&&(this.unregisterTriggerEvent(),this.rippleElement.parentNode.removeChild(this.rippleElement))}},mounted:function(){var e=this;window.setTimeout((function(){e.disabled?e.destroy():e.init(),e.$nextTick((function(){e.mounted=!0}))}),100)},beforeDestroy:function(){this.destroy()}},e.exports=t.default},91:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.mounted||!e.disabled?n("div",{staticClass:"md-ink-ripple"},[n("div",{ref:"ripple",staticClass:"md-ripple",class:e.classes,style:e.styles})]):e._e()},staticRenderFns:[]}},92:function(e,t){e.exports=".THEME_NAME :not(input):not(textarea)::selection{background:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME a:not(.md-button){color:ACCENT-COLOR}.THEME_NAME a:not(.md-button):hover{color:ACCENT-COLOR-800}body.THEME_NAME{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST-0.87}.THEME_NAME .md-caption,.THEME_NAME .md-display-1,.THEME_NAME .md-display-2,.THEME_NAME .md-display-3,.THEME_NAME .md-display-4{color:BACKGROUND-CONTRAST-0.57}.THEME_NAME code:not(.hljs){background-color:ACCENT-COLOR-A100-0.2;color:ACCENT-COLOR-800}\n"},93:function(e,t){}})}));