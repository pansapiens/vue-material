/*!
* Vue Material v0.8.1-laxy.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,l){"object"==typeof exports&&"object"==typeof module?module.exports=l():"function"==typeof define&&define.amd?define([],l):"object"==typeof exports?exports.VueMaterial=l():e.VueMaterial=l()})("undefined"!=typeof self?self:this,(function(){return (function(e){function l(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,l),a.l=!0,a.exports}var r={};return l.m=e,l.c=r,l.d=function(e,r,n){l.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},l.p="/",l(l.s=461)})({0:function(e,l){e.exports=function(e,l,r,n,a){var d,t=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(d=e,t=e.default);var o="function"==typeof t?t.options:t;l&&(o.render=l.render,o.staticRenderFns=l.staticRenderFns),n&&(o._scopeId=n);var i;if(a?(i=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},o._ssrRegister=i):r&&(i=r),i){var m=o.functional,u=m?o.render:o.beforeCreate;m?o.render=function(e,l){return i.call(l),u(e,l)}:o.beforeCreate=u?[].concat(u,i):[i]}return{esModule:d,exports:t,options:o}}},242:function(e,l,r){"use strict";function n(e){e.component("md-layout",d.default)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=n;var a=r(243),d=(function(e){return e&&e.__esModule?e:{default:e}})(a);e.exports=l.default},243:function(e,l,r){function n(e){r(244)}var a=r(0)(r(245),null,n,null,null);e.exports=a.exports},244:function(e,l){throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (67)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.9.3\n    at module.exports (/Users/perry/devel/vue-material/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/Users/perry/devel/vue-material/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:707:30)\n    at Module._extensions..js (internal/modules/cjs/loader.js:718:10)\n    at Object.require.extensions.(anonymous function) [as .js] (/Users/perry/devel/vue-material/node_modules/babel-register/lib/node.js:152:7)\n    at Module.load (internal/modules/cjs/loader.js:605:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:544:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:536:3)\n    at Module.require (internal/modules/cjs/loader.js:643:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at runLoaders (/Users/perry/devel/vue-material/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/perry/devel/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/perry/devel/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/Users/perry/devel/vue-material/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/Users/perry/devel/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/perry/devel/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/perry/devel/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/perry/devel/vue-material/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/perry/devel/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/perry/devel/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:165:10)")},245:function(e,l,r){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default={name:"md-layout",props:{mdTag:{type:String,default:"div"},mdRow:Boolean,mdRowXsmall:Boolean,mdRowSmall:Boolean,mdRowMedium:Boolean,mdRowLarge:Boolean,mdRowXlarge:Boolean,mdColumn:Boolean,mdColumnXsmall:Boolean,mdColumnSmall:Boolean,mdColumnMedium:Boolean,mdColumnLarge:Boolean,mdColumnXlarge:Boolean,mdHideXsmall:Boolean,mdHideSmall:Boolean,mdHideMedium:Boolean,mdHideLarge:Boolean,mdHideXlarge:Boolean,mdHideXsmallAndUp:Boolean,mdHideSmallAndUp:Boolean,mdHideMediumAndUp:Boolean,mdHideLargeAndUp:Boolean,mdHideXlargeAndUp:Boolean,mdGutter:[String,Number,Boolean],mdAlign:String,mdAlignXsmall:String,mdAlignSmall:String,mdAlignMedium:String,mdAlignLarge:String,mdAlignXlarge:String,mdVerticalAlign:String,mdVerticalAlignXsmall:String,mdVerticalAlignSmall:String,mdVerticalAlignMedium:String,mdVerticalAlignLarge:String,mdVerticalAlignXlarge:String,mdFlex:[String,Number,Boolean],mdFlexXsmall:[String,Number,Boolean],mdFlexSmall:[String,Number,Boolean],mdFlexMedium:[String,Number,Boolean],mdFlexLarge:[String,Number,Boolean],mdFlexXlarge:[String,Number,Boolean],mdFlexOffset:[String,Number,Boolean],mdFlexOffsetXsmall:[String,Number,Boolean],mdFlexOffsetSmall:[String,Number,Boolean],mdFlexOffsetMedium:[String,Number,Boolean],mdFlexOffsetLarge:[String,Number,Boolean],mdFlexOffsetXlarge:[String,Number,Boolean]},computed:{classes:function(){var e={"md-row":this.mdRow,"md-row-xsmall":this.mdRowXsmall,"md-row-small":this.mdRowSmall,"md-row-medium":this.mdRowMedium,"md-row-large":this.mdRowLarge,"md-row-xlarge":this.mdRowXlarge,"md-column":this.mdColumn,"md-column-xsmall":this.mdColumnXsmall,"md-column-small":this.mdColumnSmall,"md-column-medium":this.mdColumnMedium,"md-column-large":this.mdColumnLarge,"md-column-xlarge":this.mdColumnXlarge,"md-hide-xsmall":this.mdHideXsmall,"md-hide-small":this.mdHideSmall,"md-hide-medium":this.mdHideMedium,"md-hide-large":this.mdHideLarge,"md-hide-xlarge":this.mdHideXlarge,"md-hide-xsmall-and-up":this.mdHideXsmallAndUp,"md-hide-small-and-up":this.mdHideSmallAndUp,"md-hide-medium-and-up":this.mdHideMediumAndUp,"md-hide-large-and-up":this.mdHideLargeAndUp,"md-hide-xlarge-and-up":this.mdHideXlargeAndUp};return this.mdGutter&&("boolean"==typeof this.mdGutter?e["md-gutter"]=!0:this.mdGutter&&(e["md-gutter-"+this.mdGutter]=!0)),this.generatePropClasses("md-flex","","mdFlex",e),this.generatePropClasses("md-flex","xsmall","mdFlexXsmall",e),this.generatePropClasses("md-flex","small","mdFlexSmall",e),this.generatePropClasses("md-flex","medium","mdFlexMedium",e),this.generatePropClasses("md-flex","large","mdFlexLarge",e),this.generatePropClasses("md-flex","xlarge","mdFlexXlarge",e),this.generatePropClasses("md-flex-offset","","mdFlexOffset",e),this.generatePropClasses("md-flex-offset","xsmall","mdFlexOffsetXsmall",e),this.generatePropClasses("md-flex-offset","small","mdFlexOffsetSmall",e),this.generatePropClasses("md-flex-offset","medium","mdFlexOffsetMedium",e),this.generatePropClasses("md-flex-offset","large","mdFlexOffsetLarge",e),this.generatePropClasses("md-flex-offset","xlarge","mdFlexOffsetXlarge",e),this.generatePropClasses("md-align","","mdAlign",e),this.generatePropClasses("md-align","xsmall","mdAlignXsmall",e),this.generatePropClasses("md-align","small","mdAlignSmall",e),this.generatePropClasses("md-align","medium","mdAlignMedium",e),this.generatePropClasses("md-align","large","mdAlignLarge",e),this.generatePropClasses("md-align","xlarge","mdAlignXlarge",e),this.generatePropClasses("md-vertical-align","","mdVerticalAlign",e),this.generatePropClasses("md-vertical-align","xsmall","mdVerticalAlignXsmall",e),this.generatePropClasses("md-vertical-align","small","mdVerticalAlignSmall",e),this.generatePropClasses("md-vertical-align","medium","mdVerticalAlignMedium",e),this.generatePropClasses("md-vertical-align","large","mdVerticalAlignLarge",e),this.generatePropClasses("md-vertical-align","xlarge","mdVerticalAlignXlarge",e),e}},methods:{generatePropClasses:function(e,l,r,n){l&&(l="-"+l),this[r]&&("boolean"==typeof this[r]?this[r]?n[e+l]=!0:n[e+l+"-none"]=!0:n[e+l+"-"+this[r]]=!0)}},render:function(e){return e(this.mdTag,{staticClass:"md-layout",class:this.classes},this.$slots.default)}},e.exports=l.default},461:function(e,l,r){e.exports=r(242)}})}));