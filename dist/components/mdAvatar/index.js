/*!
* Vue Material v0.8.1-laxy.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.VueMaterial=r():e.VueMaterial=r()})("undefined"!=typeof self?self:this,(function(){return (function(e){function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var n={};return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="/",r(r.s=447)})({0:function(e,r){e.exports=function(e,r,n,t,o){var s,a=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(s=e,a=e.default);var l="function"==typeof a?a.options:a;r&&(l.render=r.render,l.staticRenderFns=r.staticRenderFns),t&&(l._scopeId=t);var u;if(o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=u):n&&(u=n),u){var i=l.functional,m=i?l.render:l.beforeCreate;i?l.render=function(e,r){return u.call(r),m(e,r)}:l.beforeCreate=m?[].concat(m,u):[u]}return{esModule:s,exports:a,options:l}}},1:function(e,r,n){"use strict";function t(e){if(!e)return null;var r=e.mdTheme;return r||"md-theme"!==e.$options._componentTag||(r=e.mdName),r||t(e.$parent)}Object.defineProperty(r,"__esModule",{value:!0}),r.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return t(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e||"default")}},e.exports=r.default},447:function(e,r,n){e.exports=n(94)},94:function(e,r,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-avatar",a.default),e.material.styles.push(l.default)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=o;var s=n(95),a=t(s),d=n(99),l=t(d);e.exports=r.default},95:function(e,r,n){function t(e){n(96)}var o=n(0)(n(97),n(98),t,null,null);e.exports=o.exports},96:function(e,r){throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (67)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.9.3\n    at module.exports (/Users/perry/devel/vue-material/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/Users/perry/devel/vue-material/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:707:30)\n    at Module._extensions..js (internal/modules/cjs/loader.js:718:10)\n    at Object.require.extensions.(anonymous function) [as .js] (/Users/perry/devel/vue-material/node_modules/babel-register/lib/node.js:152:7)\n    at Module.load (internal/modules/cjs/loader.js:605:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:544:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:536:3)\n    at Module.require (internal/modules/cjs/loader.js:643:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at runLoaders (/Users/perry/devel/vue-material/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/perry/devel/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/perry/devel/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/Users/perry/devel/vue-material/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/Users/perry/devel/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/perry/devel/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/perry/devel/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/perry/devel/vue-material/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/perry/devel/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/perry/devel/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:165:10)")},97:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(t);r.default={name:"md-avatar",mixins:[o.default]},e.exports=r.default},98:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",{staticClass:"md-avatar",class:[e.themeClass]},[e._t("default")],2)},staticRenderFns:[]}},99:function(e,r){throw new Error("Module build failed: Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (67)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.9.3\n    at module.exports (/Users/perry/devel/vue-material/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/Users/perry/devel/vue-material/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:707:30)\n    at Module._extensions..js (internal/modules/cjs/loader.js:718:10)\n    at Object.require.extensions.(anonymous function) [as .js] (/Users/perry/devel/vue-material/node_modules/babel-register/lib/node.js:152:7)\n    at Module.load (internal/modules/cjs/loader.js:605:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:544:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:536:3)\n    at Module.require (internal/modules/cjs/loader.js:643:17)\n    at require (internal/modules/cjs/helpers.js:22:18)")}})}));