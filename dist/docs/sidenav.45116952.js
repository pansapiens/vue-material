webpackJsonp([6],{853:function(e,t,l){function a(e){l(946)}var o=l(1)(l(948),l(949),a,"data-v-223f266a",null);e.exports=o.exports},946:function(e,t,l){var a=l(947);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),l(827)("1cc07017",a,!0,{})},947:function(e,t,l){t=e.exports=l(826)(),t.push([e.i,".phone-viewport p[data-v-223f266a]{padding:8px 16px}",""])},948:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()},toggleRightSidenav:function(){this.$refs.rightSidenav.toggle()},closeRightSidenav:function(){this.$refs.rightSidenav.close()},open:function(e){console.log("Opened: "+e)},close:function(e){console.log("Closed: "+e)}}},e.exports=t.default},949:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("page-content",{attrs:{"page-title":"Components - Sidenav"}},[l("docs-component",[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[e._v("The sidenav spans the height of the screen, with everything behind it visible but darkened by a backdrop.")])]),e._v(" "),l("div",{attrs:{slot:"api"},slot:"api"},[l("api-table",{attrs:{name:"md-sidenav"}},[l("md-table",{attrs:{slot:"properties"},slot:"properties"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Type")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("md-swipeable")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Enable the swipe functionality. "),l("br"),e._v("Default: "),l("code",[e._v("false")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-swipe-threshold")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Number")])]),e._v(" "),l("md-table-cell",[e._v("Set the initial threshold for the swipe when it's closed. "),l("br"),e._v("Default: "),l("code",[e._v("15")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-swipe-distance")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Number")])]),e._v(" "),l("md-table-cell",[e._v("Set the swipe distance needed to open/close the sidenav. "),l("br"),e._v("Default: "),l("code",[e._v("100")])])],1)],1)],1),e._v(" "),l("md-table",{attrs:{slot:"classes"},slot:"classes"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("md-left")]),e._v(" "),l("md-table-cell",[e._v("Display the sidenav on the left of parent")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-right")]),e._v(" "),l("md-table-cell",[e._v("Display the sidenav on the right of parent")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-fixed")]),e._v(" "),l("md-table-cell",[e._v("Apply position fixed")])],1)],1)],1),e._v(" "),l("md-table",{attrs:{slot:"events"},slot:"events"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Value")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("open")]),e._v(" "),l("md-table-cell",[e._v("None")]),e._v(" "),l("md-table-cell",[e._v("Triggered when the sidenav starts to open.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("close")]),e._v(" "),l("md-table-cell",[e._v("None")]),e._v(" "),l("md-table-cell",[e._v("Triggered when the sidenav starts to close.")])],1)],1)],1),e._v(" "),l("md-table",{attrs:{slot:"methods"},slot:"methods"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("open")]),e._v(" "),l("md-table-cell",[e._v("Open the sidenav.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("close")]),e._v(" "),l("md-table-cell",[e._v("Close the sidenav.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("toggle")]),e._v(" "),l("md-table-cell",[e._v("Toggle the sidenav.")])],1)],1)],1)],1)],1),e._v(" "),l("div",{attrs:{slot:"example"},slot:"example"},[l("example-box",{attrs:{"card-title":"Default"}},[l("div",{attrs:{slot:"demo"},slot:"demo"},[l("div",{staticClass:"phone-viewport"},[l("md-toolbar",[l("md-button",{staticClass:"md-icon-button",on:{click:e.toggleLeftSidenav}},[l("md-icon",[e._v("menu")])],1),e._v(" "),l("h2",{staticClass:"md-title"},[e._v("My App")])],1),e._v(" "),l("div",[l("md-button",{staticClass:"md-raised md-accent",on:{click:e.toggleRightSidenav}},[e._v("Toggle right")]),e._v(" "),l("p",[e._v("Open console to see the events")])],1),e._v(" "),l("md-sidenav",{ref:"leftSidenav",staticClass:"md-left",attrs:{"md-swipeable":""},on:{open:function(t){e.open("Left")},close:function(t){e.close("Left")}}},[l("md-toolbar",{staticClass:"md-large"},[l("div",{staticClass:"md-toolbar-container"},[l("h3",{staticClass:"md-title"},[e._v("Sidenav content")])])]),e._v(" "),l("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!")])],1),e._v(" "),l("md-sidenav",{ref:"rightSidenav",staticClass:"md-right",on:{open:function(t){e.open("Right")},close:function(t){e.close("Right")}}},[l("md-toolbar",[l("div",{staticClass:"md-toolbar-container"},[l("h3",{staticClass:"md-title"},[e._v("Sidenav content")])])]),e._v(" "),l("md-button",{staticClass:"md-raised md-accent",on:{click:e.closeRightSidenav}},[e._v("Close")])],1)],1)]),e._v(" "),l("div",{attrs:{slot:"code"},slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <div class="phone-viewport">\n              <md-toolbar>\n                <md-button class="md-icon-button" @click="toggleLeftSidenav">\n                  <md-icon>menu</md-icon>\n                </md-button>\n\n                <h2 class="md-title">My App</h2>\n              </md-toolbar>\n\n              <div>\n                <md-button class="md-raised md-accent" @click="toggleRightSidenav">Toggle right</md-button>\n                <p>Open console to see the events</p>\n              </div>\n\n              <md-sidenav class="md-left" ref="leftSidenav" @open="open(\'Left\')" @close="close(\'Left\')">\n                <md-toolbar class="md-large">\n                  <div class="md-toolbar-container">\n                    <h3 class="md-title">Sidenav content</h3>\n                  </div>\n                </md-toolbar>\n\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>\n              </md-sidenav>\n\n              <md-sidenav class="md-right" ref="rightSidenav" @open="open(\'Right\')" @close="close(\'Right\')">\n                <md-toolbar>\n                  <div class="md-toolbar-container">\n                    <h3 class="md-title">Sidenav content</h3>\n                  </div>\n                </md-toolbar>\n\n                <md-button class="md-raised md-accent" @click="closeRightSidenav">Close</md-button>\n              </md-sidenav>\n            </div>\n          ')]),e._v(" "),l("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              methods: {\n                toggleLeftSidenav() {\n                  this.$refs.leftSidenav.toggle();\n                },\n                toggleRightSidenav() {\n                  this.$refs.rightSidenav.toggle();\n                },\n                closeRightSidenav() {\n                  this.$refs.rightSidenav.close();\n                },\n                open(ref) {\n                  console.log('Opened: ' + ref);\n                },\n                close(ref) {\n                  console.log('Closed: ' + ref);\n                }\n              }\n            };\n          ")])],1)])],1)])],1)},staticRenderFns:[]}}});