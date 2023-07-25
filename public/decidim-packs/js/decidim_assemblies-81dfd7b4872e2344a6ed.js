(function(){var __webpack_modules__={85664:function(e,r,t){var n={"./decidim/assemblies/decidim_assemblies.svg":96373};function a(e){var r=i(e);return t(r)}function i(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=85664},35897:function(e,r,t){"use strict";t(38134),t(79731);t(85664)},38134:function(){$((function(){$(".show-more").on("click",(function(){$(this).hide(),$(".show-more-panel").removeClass("hide"),$(".hide-more").show()})),$(".hide-more").on("click",(function(){$(this).hide(),$(".show-more-panel").addClass("hide"),$(".show-more").show()}))}))},79731:function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var d3_selection__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(94017),d3_selection__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(25109),d3_selection__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(19628),d3_array__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(80091),d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(71939),d3_force__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3641),d3_drag__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(27014),d3_fetch__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(25119),renderOrgCharts=function renderOrgCharts(){var $orgChartContainer=$(".js-orgchart"),$btnReset=$(".js-reset-orgchart"),dataDepicted=null,fake=!1,orgchart={},renderChartCollapsibleNetwork=function renderChartCollapsibleNetwork(params){var attrs={id:"id".concat(Math.floor(1e6*Math.random())),svgWidth:960,svgHeight:600,marginTop:0,marginBottom:5,marginRight:0,marginLeft:30,container:"body",distance:150,hiddenChildLevel:1,hoverOpacity:.2,maxTextDisplayZoomLevel:1,lineStrokeWidth:1.5,fakeRoot:!1,nodeGutter:{x:16,y:8},childrenIndicatorRadius:15,fakeBorderWidth:32,data:null},attrKeys=Object.keys(attrs),updateData,_collapse,_expand,filter;attrKeys.forEach((function(e){params&&params[e]&&(attrs[e]=params[e])}));var _hierarchy={},main=function main(_selection){_selection.each((function scope(){var calc={};calc.chartLeftMargin=attrs.marginLeft,calc.chartTopMargin=attrs.marginTop,calc.chartWidth=attrs.svgWidth-attrs.marginRight-calc.chartLeftMargin,calc.chartHeight=attrs.svgHeight-attrs.marginBottom-calc.chartTopMargin,_hierarchy.root=(0,d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__.ZP)(attrs.data.root);var behaviors={};behaviors.drag=(0,d3_drag__WEBPACK_IMPORTED_MODULE_3__.Z)().on("start",dragstarted).on("drag",dragged).on("end",dragended);var layouts={};layouts.radial=radial();var force={};force.link=(0,d3_force__WEBPACK_IMPORTED_MODULE_1__.Fs)().id((function(e){return e.id})),force.charge=(0,d3_force__WEBPACK_IMPORTED_MODULE_1__.q5)().strength(-240),force.center=(0,d3_force__WEBPACK_IMPORTED_MODULE_1__.wq)(calc.chartWidth/2,calc.chartHeight/2),force.collide=(0,d3_force__WEBPACK_IMPORTED_MODULE_1__.Hh)().radius((function(e){var r=(e.bbox||{}).width+2*attrs.nodeGutter.x,t=(e.bbox||{}).height+2*attrs.nodeGutter.y;return 1.5*(Math.sqrt(Math.pow(r,2)+Math.pow(t,2))/2)})),force.x=(0,d3_force__WEBPACK_IMPORTED_MODULE_1__.RU)().strength(.5).x((function(e){return!e.children&&e.depth>2&&e.parent&&(e=e.parent),projectCircle(e.proportion,(e.depth-1)*attrs.distance)[0]})),force.y=(0,d3_force__WEBPACK_IMPORTED_MODULE_1__.Mr)().strength(.5).y((function(e){return!e.children&&e.depth>2&&e.parent&&(e=e.parent),projectCircle(e.proportion,(e.depth-1)*attrs.distance)[1]})),force.simulation=(0,d3_force__WEBPACK_IMPORTED_MODULE_1__.A4)().force("link",force.link).force("charge",force.charge).force("center",force.center).force("collide",force.collide).force("x",force.x).force("y",force.y);var arr=flatten(_hierarchy.root);arr.forEach((function(e){attrs.fakeRoot&&1===e.depth&&(e.hidden=!0),e.depth>attrs.hiddenChildLevel&&(e._children=e.children,e.children=null)}));var container=(0,d3_selection__WEBPACK_IMPORTED_MODULE_4__.Z)(this),svg=patternify(container,{tag:"svg",selector:"svg-chart-container"}).attr("width",attrs.svgWidth).attr("height",attrs.svgHeight),chart=patternify(svg,{tag:"g",selector:"chart"}).attr("transform","translate(".concat(calc.chartLeftMargin,",").concat(calc.chartTopMargin,")")),linksWrapper=patternify(chart,{tag:"g",selector:"links-wrapper"}),nodesWrapper=patternify(chart,{tag:"g",selector:"nodes-wrapper"}),links,nodes;function update(e){e?$btnReset.removeClass("invisible"):$btnReset.addClass("invisible"),layouts.radial(_hierarchy.root);var r=flatten(_hierarchy.root,!0).orderBy((function(e){return e.depth})).filter((function(e){return!e.hidden})),t=_hierarchy.root.links().filter((function(e){return!e.source.hidden})).filter((function(e){return!e.target.hidden}));r.forEach((function(r){e&&e.id===(r.parent&&r.parent.id)&&(r.x=r.parent.x,r.y=r.parent.y)})),(links=linksWrapper.selectAll(".link").data(t,(function(e){return e.target.id}))).exit().remove(),links=links.enter().append("line").attr("class","link").merge(links),(nodes=nodesWrapper.selectAll(".node").data(r,(function(e){return e.id}))).exit().remove();var n=nodes.enter().append("g").attr("class","node");n.on("click",nodeClick).on("mouseenter",nodeMouseEnter).on("mouseleave",nodeMouseLeave).call(behaviors.drag),n.append("rect").attr("class","as-card").attr("rx",4).attr("ry",4),n.append("text").attr("class","as-text").text((function(e){return e.data.name})),n.selectAll("text").each((function(e){e.bbox=this.getBBox()})),n.selectAll("rect").attr("x",(function(e){return e.bbox.x-attrs.nodeGutter.x})).attr("y",(function(e){return e.bbox.y-attrs.nodeGutter.y})).attr("width",(function(e){return e.bbox.width+2*attrs.nodeGutter.x})).attr("height",(function(e){return e.bbox.height+2*attrs.nodeGutter.y})),n.append("circle").filter((function(e){return Boolean(e.children)||Boolean(e._children)})).attr("class","as-circle").attr("r",attrs.childrenIndicatorRadius).attr("cx",(function(e){return e.bbox.x+e.bbox.width+attrs.nodeGutter.x})).attr("cy",(function(e){return e.bbox.y+e.bbox.height+attrs.nodeGutter.y})),n.append("text").filter((function(e){return Boolean(e.children)||Boolean(e._children)})).attr("class","as-text").attr("dx",(function(e){return e.bbox.x+e.bbox.width+attrs.nodeGutter.x})).attr("dy",attrs.childrenIndicatorRadius+3).text((function(e){return(0,d3_array__WEBPACK_IMPORTED_MODULE_0__.Fp)([(e.children||{}).length,(e._children||{}).length])})),nodes=n.merge(nodes),force.simulation.nodes(r).on("tick",ticked),force.simulation.force("link").links(links).id((function(e){return e.id})).distance(2*attrs.distance).strength(2)}function ticked(){var e=attrs.fakeBorderWidth,r=function(r){return Math.max(Math.min(calc.chartWidth-e,r),e)},t=function(r){return Math.max(Math.min(calc.chartHeight-e,r),e)};links.attr("x1",(function(e){return r(e.source.x)})).attr("y1",(function(e){return t(e.source.y)})).attr("x2",(function(e){return r(e.target.x)})).attr("y2",(function(e){return t(e.target.y)})),svg.selectAll(".node").attr("transform",(function(e){return"translate(".concat(r(e.x),",").concat(t(e.y),")")}))}function dragstarted(){nodes.each((function(e){e.fx=null,e.fy=null}))}function dragged(e){e.fx=d3_selection__WEBPACK_IMPORTED_MODULE_5__.B.x,e.fy=d3_selection__WEBPACK_IMPORTED_MODULE_5__.B.y}function dragended(){}function nodeMouseEnter(e){var r=_hierarchy.root.links().filter((function(r){return r.source.id===e.id||r.target.id===e.id})),t=r.map((function(e){return e.source.id})).concat(r.map((function(e){return e.target.id})));nodesWrapper.selectAll(".node").filter((function(e){return-1===t.indexOf(e.id)})).attr("opacity",attrs.hoverOpacity),linksWrapper.selectAll(".link").attr("opacity",attrs.hoverOpacity),linksWrapper.selectAll(".link").filter((function(r){return r.source.id===e.id||r.target.id===e.id})).attr("opacity",1)}function nodeMouseLeave(){nodesWrapper.selectAll(".node").attr("opacity",1),linksWrapper.selectAll(".link").attr("opacity",1)}function nodeClick(e){nodes.each((function(e){e.fx=null,e.fy=null})),e.children?_collapse(e):e._children&&_expand(e),freeNodes()}function freeNodes(){(0,d3_selection__WEBPACK_IMPORTED_MODULE_6__.Z)(".node").each((function(e){e.fx=null,e.fy=null}))}function projectCircle(e,r){var t=r||0,n=2*e*Math.PI;return[Math.sin(n)*t,-Math.cos(n)*t]}function flatten(e,r){var t=[],n=0;return function e(a,i){a.children&&a.children.forEach((function(r){e(r,i+1)})),a.id?++n:a.id=++n,a.depth=i,r&&(a.cluster||(a.cluster={x:a.x,y:a.y})),t.push(a)}(e,1),t}function debug(){if(attrs.isDebug){var stringified=String(scope),groupVariables=stringified.match(/var\s+([\w])+\s*=\s*{\s*}/gi).map((function(e){return e.match(/\s+\w*/gi).filter((function(e){return e.trim()}))})).map((function(e){return e[0].trim()}));groupVariables.forEach((function(v){main["P_".concat(v)]=eval(v)}))}}update(),updateData=function(){main.run()},_collapse=function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.children&&(r&&e.children.forEach((function(e){return _collapse(e,!0)})),e._children=e.children,e.children=null),update(e),force.simulation.restart(),force.simulation.alphaTarget(.15)},_expand=function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e._children&&(r&&e._children.forEach((function(e){return _expand(e,!0)})),e.children=e._children,e._children=null),update(e),force.simulation.restart(),force.simulation.alphaTarget(.15)},debug()}))};function patternify(e,r){var t=r.selector,n=r.tag,a=r.data||[t],i=e.selectAll(".".concat(t)).data(a);return i.exit().remove(),(i=i.enter().append(n).merge(i)).attr("class",t),i}function radial(){return function(e){!function e(r,t,n){r.proportion=(n+t)/2,r.x||(r.parent?r.x=r.parent.x:r.x=0);r.y||(r.parent?r.y=r.parent.y:r.y=0);if(r.children){var a=(n-t)/r.children.length;r.children.forEach((function(r,n){var i=t+a*n;e(r,i,i+a)}))}}(e,0,1)}}return Array.prototype.orderBy=function(e){return this.sort((function(r,t){var n=e(r),a=e(t);return"string"===typeof n||n instanceof String?n.localeCompare(a):n-a})),this},Object.keys(attrs).forEach((function(key){return main[key]=function(_){var string="attrs['".concat(key,"'] = _");return arguments.length?(eval(string),main):eval(" attrs['".concat(key,"'];"))}})),main.attrs=attrs,main.debug=function(e){return attrs.isDebug=e,e&&(window.charts||(window.charts=[]),window.charts.push(main)),main},main.data=function(e){return arguments.length?(attrs.data=e,"function"===typeof updateData&&updateData(),main):attrs.data},main.run=function(){return(0,d3_selection__WEBPACK_IMPORTED_MODULE_6__.Z)(attrs.container).call(main),main},main.filter=function(e){return arguments.length?(attrs.filterParams=e,"function"===typeof filter&&filter(),main):attrs.filterParams},main.reset=function(){return _hierarchy.root.children.forEach((function(e){return _collapse(e,!0)})),main.run(),main},main};$orgChartContainer.each((function(e,r){var t=$(r),n=t.width(),a=n/(16/9);(0,d3_fetch__WEBPACK_IMPORTED_MODULE_7__.Z)(t.data("url")).then((function(e){e instanceof Array?(fake=!0,dataDepicted={name:null,children:e}):dataDepicted=e,orgchart=renderChartCollapsibleNetwork().svgHeight(a).svgWidth(n).fakeRoot(fake).container("#".concat(r.id)).data({root:dataDepicted}).debug(!0).run()}))})),$btnReset.click((function(){orgchart.reset()}))};$((function(){renderOrgCharts(),$(document).on("change.zf.tabs",(function(){renderOrgCharts()}))}))},96373:function(e,r,t){"use strict";e.exports=t.p+"media/images/decidim_assemblies-d9571d0b2d158eb891c8.svg"}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=function(e,r,t,n){if(!r){var a=1/0;for(_=0;_<deferred.length;_++){r=deferred[_][0],t=deferred[_][1],n=deferred[_][2];for(var i=!0,c=0;c<r.length;c++)(!1&n||a>=n)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](r[c])}))?r.splice(c--,1):(i=!1,n<a&&(a=n));if(i){deferred.splice(_--,1);var o=t();void 0!==o&&(e=o)}}return e}n=n||0;for(var _=deferred.length;_>0&&deferred[_-1][2]>n;_--)deferred[_]=deferred[_-1];deferred[_]=[r,t,n]},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,{a:r}),r},__webpack_require__.d=function(e,r){for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="/decidim-packs/",function(){var e={9141:0};__webpack_require__.O.j=function(r){return 0===e[r]};var r=function(r,t){var n,a,i=t[0],c=t[1],o=t[2],_=0;if(i.some((function(r){return 0!==e[r]}))){for(n in c)__webpack_require__.o(c,n)&&(__webpack_require__.m[n]=c[n]);if(o)var d=o(__webpack_require__)}for(r&&r(t);_<i.length;_++)a=i[_],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return __webpack_require__.O(d)},t=self.webpackChunkdecidim_application=self.webpackChunkdecidim_application||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var __webpack_exports__=__webpack_require__.O(void 0,[6690,9679],(function(){return __webpack_require__(35897)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=decidim_assemblies-81dfd7b4872e2344a6ed.js.map