webpackJsonp([3],{860:function(e,t,a){function d(e){a(966)}var l=a(1)(a(968),a(969),d,"data-v-0c7c6b68",null);e.exports=l.exports},966:function(e,t,a){var d=a(967);"string"==typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals),a(827)("790f3260",d,!0,{})},967:function(e,t,a){t=e.exports=a(826)(),t.push([e.i,".md-table+.md-table-card[data-v-0c7c6b68],.md-table-card+.md-table-card[data-v-0c7c6b68],.output[data-v-0c7c6b68]{margin-top:24px}.output .md-title[data-v-0c7c6b68]{font-size:20px}",""])},968:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{nutrition:[{dessert:"Frozen yogurt",type:"ice_cream",calories:"159",fat:"6.0",comment:"Icy"},{dessert:"Ice cream sandwich",type:"ice_cream",calories:"237",fat:"9.0",comment:"Super Tasty"},{dessert:"Eclair",type:"pastry",calories:"262",fat:"16.0",comment:""},{dessert:"Cupcake",type:"pastry",calories:"305",fat:"3.7",comment:""},{dessert:"Gingerbread",type:"other",calories:"356",fat:"16.0",comment:""}],selectedData:[],sortInput:{name:"dessert",type:"asc"},sort:{},page:{}}},methods:{onSelect:function(e){this.selectedData=e,this.$forceUpdate()},onSort:function(e){this.sort=e},onPagination:function(e){this.page=e}},mounted:function(){window.nutrition=this.nutrition}},e.exports=t.default},969:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-content",{attrs:{"page-title":"Components - Table"}},[a("docs-component",[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("Data tables display sets of raw data. They usually appear in desktop enterprise products. Data tables may be embedded on a surface, such as a card.")])]),e._v(" "),a("div",{attrs:{slot:"api"},slot:"api"},[a("api-table",{attrs:{name:"md-table"}},[a("md-table",{attrs:{slot:"properties"},slot:"properties"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Name")]),e._v(" "),a("md-table-head",[e._v("Type")]),e._v(" "),a("md-table-head",[e._v("Description")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("md-sort")]),e._v(" "),a("md-table-cell",[a("code",[e._v("String")])]),e._v(" "),a("md-table-cell",[e._v("Property name to match for sorting.")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-sort-type")]),e._v(" "),a("md-table-cell",[a("code",[e._v("String")])]),e._v(" "),a("md-table-cell",[e._v("The order to apply on the sort: "),a("br"),e._v("Accepts: "),a("code",[e._v("asc")]),e._v(" | "),a("code",[e._v("desc")])])],1)],1)],1),e._v(" "),a("md-table",{attrs:{slot:"events"},slot:"events"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Name")]),e._v(" "),a("md-table-head",[e._v("Value")]),e._v(" "),a("md-table-head",[e._v("Description")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("sort")]),e._v(" "),a("md-table-cell",[e._v("Receive the sort object. "),a("br"),e._v("Example: "),a("code",[e._v("{ name: 'calories', type: 'asc' }")])]),e._v(" "),a("md-table-cell",[e._v("Triggered when a column is sorted.")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("select")]),e._v(" "),a("md-table-cell",[e._v("Receive the all the selected rows as a "),a("code",[e._v("Object")])]),e._v(" "),a("md-table-cell",[e._v("Triggered every time a row is selected.")])],1)],1)],1)],1),e._v(" "),a("api-table",{attrs:{name:"md-table-card"}},[a("p",[e._v("Used to create tables inside cards. Optional.")]),e._v(" "),a("p",[e._v("No options available")])]),e._v(" "),a("api-table",{attrs:{name:"md-table-header"}},[a("p",[e._v("Used like a regular "),a("code",[e._v("thead")]),e._v(". Required.")]),e._v(" "),a("p",[e._v("No options available")])]),e._v(" "),a("api-table",{attrs:{name:"md-table-body"}},[a("p",[e._v("Used like a regular "),a("code",[e._v("tbody")]),e._v(". Required.")]),e._v(" "),a("p",[e._v("No options available")])]),e._v(" "),a("api-table",{attrs:{name:"md-table-row"}},[a("p",[e._v("Used like a regular "),a("code",[e._v("tr")]),e._v(". Required.")]),e._v(" "),a("md-table",{attrs:{slot:"properties"},slot:"properties"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Name")]),e._v(" "),a("md-table-head",[e._v("Type")]),e._v(" "),a("md-table-head",[e._v("Description")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("md-selection")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Boolean")])]),e._v(" "),a("md-table-cell",[e._v("Enable selection inside a particular row. Only works inside "),a("code",[e._v("md-table-body")]),e._v(". "),a("br"),e._v("Default: "),a("code",[e._v("false")])])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-auto-select")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Boolean")])]),e._v(" "),a("md-table-cell",[e._v("Click in any area of the row to select it. Only works inside "),a("code",[e._v("md-table-body")]),e._v(". "),a("br"),e._v("Default:: "),a("code",[e._v("false")])])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-item")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Object")])]),e._v(" "),a("md-table-cell",[e._v("The single item to be returned when the row is selected. Only works inside "),a("code",[e._v("md-table-body")]),e._v(".")])],1)],1)],1),e._v(" "),a("md-table",{attrs:{slot:"events"},slot:"events"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Name")]),e._v(" "),a("md-table-head",[e._v("Value")]),e._v(" "),a("md-table-head",[e._v("Description")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("onmouseover")]),e._v(" "),a("md-table-cell",[e._v("Receive the row data.")]),e._v(" "),a("md-table-cell",[e._v("Triggered when mouse hovers over row.")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("onmouseout")]),e._v(" "),a("md-table-cell",[e._v("Receive the row data.")]),e._v(" "),a("md-table-cell",[e._v("Triggered when mouse leaves the row.")])],1)],1)],1)],1),e._v(" "),a("api-table",{attrs:{name:"md-table-head"}},[a("p",[e._v("Used like a regular "),a("code",[e._v("th")]),e._v(". Required.")]),e._v(" "),a("md-table",{attrs:{slot:"properties"},slot:"properties"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Name")]),e._v(" "),a("md-table-head",[e._v("Type")]),e._v(" "),a("md-table-head",[e._v("Description")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("md-numeric")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Boolean")])]),e._v(" "),a("md-table-cell",[e._v("Align the header content to the right. "),a("br"),e._v("Default: "),a("code",[e._v("false")])])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-sort-by")]),e._v(" "),a("md-table-cell",[a("code",[e._v("String")])]),e._v(" "),a("md-table-cell",[e._v("The property name to be returned after applying the sort order on that particular column.")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-tooltip")]),e._v(" "),a("md-table-cell",[a("code",[e._v("String")])]),e._v(" "),a("md-table-cell",[e._v("Text displayed inside a tooltip to provide definitions to column headers.")])],1)],1)],1)],1),e._v(" "),a("api-table",{attrs:{name:"md-table-cell"}},[a("p",[e._v("Used like a regular "),a("code",[e._v("td")]),e._v(". Required.")]),e._v(" "),a("md-table",{attrs:{slot:"properties"},slot:"properties"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Name")]),e._v(" "),a("md-table-head",[e._v("Type")]),e._v(" "),a("md-table-head",[e._v("Description")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("md-numeric")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Boolean")])]),e._v(" "),a("md-table-cell",[e._v("Align the cell content to the right. "),a("br"),e._v("Default: "),a("code",[e._v("false")])])],1)],1)],1)],1),e._v(" "),a("api-table",{attrs:{name:"md-table-pagination"}},[a("p",[e._v("The pagination element doesn't accept any content inside.")]),e._v(" "),a("md-table",{attrs:{slot:"properties"},slot:"properties"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Name")]),e._v(" "),a("md-table-head",[e._v("Type")]),e._v(" "),a("md-table-head",[e._v("Description")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("md-size")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Number")])]),e._v(" "),a("md-table-cell",[e._v("Set the amount of rows displayed. Required. "),a("br"),e._v("Default: "),a("code",[e._v("10")])])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-page-options")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Array | Boolean")])]),e._v(" "),a("md-table-cell",[e._v("Set the values inside the page amout selector. "),a("br"),e._v("Default: "),a("code",[e._v("[10, 25, 50, 100]")]),e._v(" "),a("br"),e._v("When false this flag will hide the page selector.")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-page")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Number")])]),e._v(" "),a("md-table-cell",[e._v("Current page of the table pagination. Required. "),a("br"),e._v("Default: "),a("code",[e._v("1")])])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-total")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Number")])]),e._v(" "),a("md-table-cell",[e._v("Total of items in the collection. This will be used to calculate the amount of pages left. "),a("br"),e._v("Default: "),a("code",[e._v("Many")])])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-label")]),e._v(" "),a("md-table-cell",[a("code",[e._v("String")])]),e._v(" "),a("md-table-cell",[e._v("Text to be shown on the left of the page selector. "),a("br"),e._v("Default: "),a("code",[e._v("Rows per page")])])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-separator")]),e._v(" "),a("md-table-cell",[a("code",[e._v("String")])]),e._v(" "),a("md-table-cell",[e._v("Text to be shown on the left of the page selector. "),a("br"),e._v("Default: "),a("code",[e._v("of")])])],1)],1)],1),e._v(" "),a("md-table",{attrs:{slot:"events"},slot:"events"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Name")]),e._v(" "),a("md-table-head",[e._v("Value")]),e._v(" "),a("md-table-head",[e._v("Description")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("pagination")]),e._v(" "),a("md-table-cell",[e._v("Emits an "),a("code",[e._v("Object")]),e._v(" containing the current list size and current page.")]),e._v(" "),a("md-table-cell",[e._v("Triggered when the user selects change pages or the pagination size changes.")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("size")]),e._v(" "),a("md-table-cell",[e._v("The "),a("code",[e._v("Number")]),e._v(" of current list size.")]),e._v(" "),a("md-table-cell",[e._v("Triggered when the pagination size changes.")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("page")]),e._v(" "),a("md-table-cell",[e._v("Emits the "),a("code",[e._v("Number")]),e._v(" of current pagination page.")]),e._v(" "),a("md-table-cell",[e._v("Triggered when the pagination page changes.")])],1)],1)],1)],1),e._v(" "),a("api-table",{attrs:{name:"md-table-alternate-header"}},[a("md-table",{attrs:{slot:"properties"},slot:"properties"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Name")]),e._v(" "),a("md-table-head",[e._v("Type")]),e._v(" "),a("md-table-head",[e._v("Description")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("md-selected-label")]),e._v(" "),a("md-table-cell",[a("code",[e._v("String")])]),e._v(" "),a("md-table-cell",[e._v("The text to be shown after the amount of items selected.")])],1)],1)],1)],1)],1),e._v(" "),a("div",{attrs:{slot:"example"},slot:"example"},[a("example-box",{attrs:{"card-title":"Plain"}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("md-table",[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Dessert (100g serving)")]),e._v(" "),a("md-table-head",{attrs:{"md-numeric":""}},[e._v("Calories (g)")]),e._v(" "),a("md-table-head",{attrs:{"md-numeric":""}},[e._v("Fat (g)")]),e._v(" "),a("md-table-head",{attrs:{"md-numeric":""}},[e._v("Carbs (g)")]),e._v(" "),a("md-table-head",{attrs:{"md-numeric":""}},[e._v("Protein (g)")])],1)],1),e._v(" "),a("md-table-body",e._l(5,(function(t,d){return a("md-table-row",{key:d,attrs:{"md-item":{item:d}}},[a("md-table-cell",[e._v("Dessert Name")]),e._v(" "),e._l(4,(function(t,d){return a("md-table-cell",{key:d,attrs:{"md-numeric":""}},[e._v("10")])}))],2)})))],1)],1),e._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-table v-once>\n              <md-table-header>\n                <md-table-row>\n                  <md-table-head>Dessert (100g serving)</md-table-head>\n                  <md-table-head md-numeric>Calories (g)</md-table-head>\n                  <md-table-head md-numeric>Fat (g)</md-table-head>\n                  <md-table-head md-numeric>Carbs (g)</md-table-head>\n                  <md-table-head md-numeric>Protein (g)</md-table-head>\n                </md-table-row>\n              </md-table-header>\n\n              <md-table-body>\n                <md-table-row v-for="(row, index) in 5" :key="index">\n                  <md-table-cell>Dessert Name</md-table-cell>\n                  <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>\n                </md-table-row>\n              </md-table-body>\n            </md-table>\n          ')])],1)]),e._v(" "),a("example-box",{attrs:{"card-title":"Sort"}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("md-table",{attrs:{"md-sort":"calories"}},[a("md-table-header",[a("md-table-row",[a("md-table-head",{attrs:{"md-sort-by":"dessert"}},[e._v("Dessert (100g serving)")]),e._v(" "),a("md-table-head",{attrs:{"md-sort-by":"calories","md-numeric":"","md-tooltip":"The total amount of food energy and the given serving size"}},[e._v("Calories (g)")]),e._v(" "),a("md-table-head",{attrs:{"md-sort-by":"fat","md-numeric":""}},[e._v("Fat (g)")]),e._v(" "),a("md-table-head",{attrs:{"md-sort-by":"carbs","md-numeric":""}},[e._v("Carbs (g)")]),e._v(" "),a("md-table-head",{attrs:{"md-sort-by":"protein","md-numeric":""}},[e._v("Protein (g)")])],1)],1),e._v(" "),a("md-table-body",e._l(5,(function(t,d){return a("md-table-row",{key:d,attrs:{"md-item":{item:d}}},[a("md-table-cell",[e._v("Dessert Name")]),e._v(" "),e._l(4,(function(t,d){return a("md-table-cell",{key:d,attrs:{"md-numeric":""}},[e._v("10")])}))],2)})))],1)],1),e._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-table md-sort="calories">\n              <md-table-header>\n                <md-table-row>\n                  <md-table-head md-sort-by="dessert">Dessert (100g serving)</md-table-head>\n                  <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">Calories (g)</md-table-head>\n                  <md-table-head md-sort-by="fat" md-numeric>Fat (g)</md-table-head>\n                  <md-table-head md-sort-by="carbs" md-numeric>Carbs (g)</md-table-head>\n                  <md-table-head md-sort-by="protein" md-numeric>Protein (g)</md-table-head>\n                </md-table-row>\n              </md-table-header>\n\n              <md-table-body>\n                <md-table-row v-for="(row, index) in 5" :key="index">\n                  <md-table-cell>Dessert Name</md-table-cell>\n                  <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>\n                </md-table-row>\n              </md-table-body>\n            </md-table>\n          ')])],1)]),e._v(" "),a("example-box",{attrs:{"card-title":"Within cards with pagination"}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("md-table-card",[a("md-toolbar",[a("h1",{staticClass:"md-title"},[e._v("Nutrition")]),e._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[e._v("filter_list")])],1),e._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[e._v("search")])],1)],1),e._v(" "),a("md-table",{attrs:{"md-sort":e.sortInput.name,"md-sort-type":e.sortInput.type},on:{select:e.onSelect,sort:e.onSort}},[a("md-table-header",[a("md-table-row",[a("md-table-head",{attrs:{"md-sort-by":"dessert"}},[e._v("Dessert (100g serving)")]),e._v(" "),a("md-table-head",{attrs:{"md-sort-by":"calories","md-numeric":"","md-tooltip":"The total amount of food energy and the given serving size"}},[e._v("Calories (g)")]),e._v(" "),a("md-table-head",{attrs:{"md-sort-by":"fat","md-numeric":""}},[e._v("Fat (g)")]),e._v(" "),a("md-table-head",[a("md-icon",[e._v("message")]),e._v(" "),a("span",[e._v("Comments")])],1)],1)],1),e._v(" "),a("md-table-body",e._l(e.nutrition,(function(t,d){return a("md-table-row",{key:d,attrs:{"md-item":t,"md-auto-select":"","md-selection":""}},e._l(t,(function(t,d){return"type"!==d?a("md-table-cell",{key:d,attrs:{"md-numeric":"dessert"!==d&&"comment"!==d}},[e._v("\n                    "+e._s(t)+"\n                  ")]):e._e()})))})))],1),e._v(" "),a("md-table-pagination",{attrs:{"md-size":"5","md-total":"10","md-page":"1","md-label":"Rows","md-separator":"of","md-page-options":[5,10,25,50]},on:{pagination:e.onPagination}})],1),e._v(" "),a("div",{staticClass:"output"},[a("h2",{staticClass:"md-title"},[e._v("Selected Data")]),e._v(" "),a("pre",[e._v(e._s(e.selectedData))])]),e._v(" "),a("div",{staticClass:"output"},[a("h2",{staticClass:"md-title"},[e._v("Sort input")]),e._v(" "),a("md-input-container",[a("label",{attrs:{for:"sort-input-name"}},[e._v("Name")]),e._v(" "),a("md-select",{attrs:{name:"sort-input-name",id:"sort-input-name"},model:{value:e.sortInput.name,callback:function(t){e.$set(e.sortInput,"name",t)},expression:"sortInput.name"}},[a("md-option",{attrs:{value:""}},[e._v("None")]),e._v(" "),a("md-option",{attrs:{value:"dessert"}},[e._v("Dessert")]),e._v(" "),a("md-option",{attrs:{value:"calories"}},[e._v("Calories")]),e._v(" "),a("md-option",{attrs:{value:"fat"}},[e._v("Fat")])],1)],1),e._v(" "),a("md-input-container",[a("label",{attrs:{for:"sort-input-type"}},[e._v("Type")]),e._v(" "),a("md-select",{attrs:{name:"sort-input-type",id:"sort-input-type"},model:{value:e.sortInput.type,callback:function(t){e.$set(e.sortInput,"type",t)},expression:"sortInput.type"}},[a("md-option",{attrs:{value:"asc"}},[e._v("Ascending")]),e._v(" "),a("md-option",{attrs:{value:"desc"}},[e._v("Descending")])],1)],1)],1),e._v(" "),a("div",{staticClass:"output"},[a("h2",{staticClass:"md-title"},[e._v("Current Sort")]),e._v(" "),a("pre",[e._v(e._s(e.sort))])]),e._v(" "),a("div",{staticClass:"output"},[a("h2",{staticClass:"md-title"},[e._v("Current Pagination")]),e._v(" "),a("pre",[e._v(e._s(e.page))])])],1),e._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-table-card>\n              <md-toolbar>\n                <h1 class="md-title">Nutrition</h1>\n                <md-button class="md-icon-button">\n                  <md-icon>filter_list</md-icon>\n                </md-button>\n\n                <md-button class="md-icon-button">\n                  <md-icon>search</md-icon>\n                </md-button>\n              </md-toolbar>\n\n              <md-table md-sort="dessert" md-sort-type="desc" @select="onSelect" @sort="onSort">\n                <md-table-header>\n                  <md-table-row>\n                    <md-table-head md-sort-by="dessert">Dessert (100g serving)</md-table-head>\n                    <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">Calories (g)</md-table-head>\n                    <md-table-head md-sort-by="fat" md-numeric>Fat (g)</md-table-head>\n                    <md-table-head>\n                      <md-icon>message</md-icon>\n                      <span>Comments</span>\n                    </md-table-head>\n                  </md-table-row>\n                </md-table-header>\n\n                <md-table-body>\n                  <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-auto-select md-selection>\n                    <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="columnIndex !== \'dessert\' && columnIndex !== \'comment\'" v-if="columnIndex !== \'type\'">\n                      '+e._s("{{ column }}")+'\n                    </md-table-cell>\n                  </md-table-row>\n                </md-table-body>\n              </md-table>\n\n              <md-table-pagination\n                md-size="5"\n                md-total="10"\n                md-page="1"\n                md-label="Rows"\n                md-separator="of"\n                :md-page-options="[5, 10, 25, 50]"\n                @pagination="onPagination"></md-table-pagination>\n            </md-table-card>\n          ')]),e._v(" "),a("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                nutrition: [\n                  {\n                    dessert: 'Frozen yogurt',\n                    type: 'ice_cream',\n                    calories: '159',\n                    fat: '6.0',\n                    comment: 'Icy'\n                  },\n                  {\n                    dessert: 'Ice cream sandwich',\n                    type: 'ice_cream',\n                    calories: '237',\n                    fat: '9.0',\n                    comment: 'Super Tasty'\n                  },\n                  {\n                    dessert: 'Eclair',\n                    type: 'pastry',\n                    calories: '262',\n                    fat: '16.0',\n                    comment: ''\n                  },\n                  {\n                    dessert: 'Cupcake',\n                    type: 'pastry',\n                    calories: '305',\n                    fat: '3.7',\n                    comment: ''\n                  },\n                  {\n                    dessert: 'Gingerbread',\n                    type: 'other',\n                    calories: '356',\n                    fat: '16.0',\n                    comment: ''\n                  }\n                ],\n              })\n            }\n          ")])],1)]),e._v(" "),a("example-box",{attrs:{"card-title":"Inline menus, edit icon and alternate headers"}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("md-table-card",[a("md-toolbar",[a("h1",{staticClass:"md-title"},[e._v("Nutrition")]),e._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[e._v("filter_list")])],1),e._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[e._v("search")])],1)],1),e._v(" "),a("md-table-alternate-header",{attrs:{"md-selected-label":"selected"}},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[e._v("delete")])],1),e._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[e._v("more_vert")])],1)],1),e._v(" "),a("md-table",{attrs:{"md-sort":"calories"}},[a("md-table-header",[a("md-table-row",[a("md-table-head",{attrs:{"md-sort-by":"dessert"}},[e._v("Dessert (100g serving)")]),e._v(" "),a("md-table-head",{attrs:{"md-sort-by":"type",width:"100px"}},[e._v("Type")]),e._v(" "),a("md-table-head",{attrs:{"md-sort-by":"calories","md-numeric":"","md-tooltip":"The total amount of food energy and the given serving size"}},[e._v("Calories (g)")]),e._v(" "),a("md-table-head",{attrs:{"md-sort-by":"fat","md-numeric":""}},[e._v("Fat (g)")]),e._v(" "),a("md-table-head",[a("md-icon",[e._v("message")]),e._v(" "),a("span",[e._v("Comments")])],1)],1)],1),e._v(" "),a("md-table-body",e._l(e.nutrition,(function(t,d){return a("md-table-row",{key:d,attrs:{mdItem:t,"md-selection":""}},e._l(t,(function(t,l){return a("md-table-cell",{key:l,attrs:{"md-numeric":"dessert"!==l&&"comment"!==l&&"type"!==l}},["comment"===l?[a("span",[e._v(e._s(t))])]:e._e(),e._v(" "),"comment"===l?a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[e._v("edit")])],1):e._e(),e._v(" "),"type"===l?a("md-select",{attrs:{placeholder:"Type",name:"type"+l,id:"type"+l},model:{value:e.nutrition[d].type,callback:function(t){e.$set(e.nutrition[d],"type",t)},expression:"nutrition[rowIndex].type"}},[a("md-option",{attrs:{value:"ice_cream"}},[e._v("Ice Cream")]),e._v(" "),a("md-option",{attrs:{value:"pastry"}},[e._v("Pastry")]),e._v(" "),a("md-option",{attrs:{value:"other"}},[e._v("Other")])],1):e._e(),e._v(" "),"type"!==l&&"comment"!==l?a("span",[e._v(e._s(t))]):e._e()],2)})))})))],1)],1)],1),e._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-table-card>\n              <md-toolbar>\n                <h1 class="md-title">Nutrition</h1>\n                <md-button class="md-icon-button">\n                  <md-icon>filter_list</md-icon>\n                </md-button>\n\n                <md-button class="md-icon-button">\n                  <md-icon>search</md-icon>\n                </md-button>\n              </md-toolbar>\n\n              <md-table-alternate-header md-selected-label="selected">\n                <md-button class="md-icon-button">\n                  <md-icon>delete</md-icon>\n                </md-button>\n\n                <md-button class="md-icon-button">\n                  <md-icon>more_vert</md-icon>\n                </md-button>\n              </md-table-alternate-header>\n\n              <md-table md-sort="calories">\n                <md-table-header>\n                  <md-table-row>\n                    <md-table-head md-sort-by="dessert">Dessert (100g serving)</md-table-head>\n                    <md-table-head md-sort-by="type" width="100px">Type</md-table-head>\n                    <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">Calories (g)</md-table-head>\n                    <md-table-head md-sort-by="fat" md-numeric>Fat (g)</md-table-head>\n                    <md-table-head>\n                      <md-icon>message</md-icon>\n                      <span>Comments</span>\n                    </md-table-head>\n                  </md-table-row>\n                </md-table-header>\n\n                <md-table-body>\n                  <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-selection>\n                    <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="columnIndex !== \'dessert\' && columnIndex !== \'comment\' && columnIndex !== \'type\'">\n                      <span v-if="columnIndex === \'comment\'">'+e._s("{{ column }}")+'</span>\n\n                      <md-button class="md-icon-button" v-if="columnIndex === \'comment\'">\n                        <md-icon>edit</md-icon>\n                      </md-button>\n\n                      <md-select\n                        placeholder="Type"\n                        :name="\'type\' + columnIndex"\n                        :id="\'type\' + columnIndex"\n                        v-model="nutrition[rowIndex].type"\n                        v-if="columnIndex === \'type\'">\n                        <md-option value="ice_cream">Ice Cream</md-option>\n                        <md-option value="pastry">Pastry</md-option>\n                        <md-option value="other">Other</md-option>\n                      </md-select>\n\n                      <span v-if="columnIndex !== \'type\' && columnIndex !== \'comment\'">'+e._s("{{ column }}")+"</span>\n                    </md-table-cell>\n                  </md-table-row>\n                </md-table-body>\n              </md-table>\n            </md-table-card>\n          ")]),e._v(" "),a("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                nutrition: [\n                  {\n                    dessert: 'Frozen yogurt',\n                    type: 'ice_cream',\n                    calories: '159',\n                    fat: '6.0',\n                    comment: 'Icy'\n                  },\n                  {\n                    dessert: 'Ice cream sandwich',\n                    type: 'ice_cream',\n                    calories: '237',\n                    fat: '9.0',\n                    comment: 'Super Tasty'\n                  },\n                  {\n                    dessert: 'Eclair',\n                    type: 'pastry',\n                    calories: '262',\n                    fat: '16.0',\n                    comment: ''\n                  },\n                  {\n                    dessert: 'Cupcake',\n                    type: 'pastry',\n                    calories: '305',\n                    fat: '3.7',\n                    comment: ''\n                  },\n                  {\n                    dessert: 'Gingerbread',\n                    type: 'other',\n                    calories: '356',\n                    fat: '16.0',\n                    comment: ''\n                  }\n                ],\n              })\n            }\n          ")])],1)])],1)])],1)},staticRenderFns:[]}}});