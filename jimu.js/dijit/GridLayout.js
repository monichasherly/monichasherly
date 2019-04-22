// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dijit/_WidgetBase dojo/dom-geometry dojo/dom-class dojo/Evented dojo/debounce".split(" "),function(m,c,g,n,p,l,q,r){return m([n,q],{baseClass:"jimu-dijit-gridlayout",declaredClass:"jimu.dijit.GridLayout",container:null,layoutDefinition:null,components:null,editable:!1,_layout:null,_coordinates:null,_isCreatingLayout:null,postCreate:function(){this.inherited(arguments);this._isCreatingLayout=!1;this._createLayout(this.layoutDefinition)},restoreLayout:function(a){a=
a||this.layoutDefinition;this._createLayout(a)},destroy:function(){g.forEach(this.components,function(a){a.dijit.destroy()});this._layout.destroy();this.inherited(arguments)},getLayoutDefinition:function(){return this._layout.toConfig().content},resize:function(){var a=p.getMarginBox(this.container);this._layout.updateSize(a.w,a.h)},getComponentSize:function(a){return(a=this._layout.root.contentItems[0].getItemsById(a))&&0<a.length?(a=a[0].container,{w:a.width,h:a.height}):{w:0,h:0}},getSize:function(){return{w:this._layout.width,
h:this._layout.height}},setVisible:function(a,f){var b=this._layout.root.contentItems[0].getItemsById(a);b&&0<b.length&&!1===f?this._hideComponent(b[0]):b&&0!==b.length||!0!==f||this._showComponent(a)},highlightItem:function(a){(a=this._layout.root.contentItems[0].getItemsById(a))&&0<a.length&&a[0].highlight()},unhighlightItem:function(a){(a=this._layout.root.contentItems[0].getItemsById(a))&&0<a.length&&a[0].unhighlight()},_createLayout:function(a){if(!this._isCreatingLayout){this._coordinates={};
this._isCreatingLayout=!0;var f={settings:{hasHeaders:!1,resizeEnabled:this.editable,reorderEnabled:this.editable,selectionEnabled:this.editable,highlightEnabled:this.editable},dimensions:{borderWidth:1,dragProxyWidth:0,dragProxyHeight:0},content:a},b=this._layout;require(["libs/goldenlayout/goldenlayout"],c.hitch(this,function(a){this._layout=new a(f,this.container);this._layout.registerComponent("jimu grid",c.hitch(this,function(a,b){var d;a.parent.config.id=b.id;g.some(this.components,function(e){if(e.id===
b.id)return d=e.dijit,a.getElement().html(e.dijit.domNode),!0},this);a.on("resize",r(c.hitch(this,function(){0<a.width&&0<a.height&&d&&"function"===typeof d.resize&&d.resize(a.width,a.height)}),200));a.on("select",c.hitch(this,function(){this.editable&&a.parent.select();this.emit("mask-click",a.parent.config.id)}))}));this._layout.on("initialised",c.hitch(this,function(){this._resetCoordinate();this.emit("initialised");this._isCreatingLayout=!1;b&&b.destroy()}));this._layout.on("stateChanged",c.hitch(this,
function(){this._resetCoordinate()}));this._layout.init();this.editable||l.add(this._layout.root.childElementContainer[0],"viewonly");l.add(this._layout.root.childElementContainer[0],"jimu-dijit-gridlayout");setTimeout(c.hitch(this,this.resize),100)}))}},_hideComponent:function(a){a.parent&&a.parent.removeChild(a,!0)},_showComponent:function(a){var f,b,d,c,e,h,k;g.some(this.components,function(b){if(b.id===a)return f=b,!0},this);f&&(c={id:a,type:"component",componentName:"jimu grid",componentState:{id:a}},
b=this._coordinates[a],e=this._layout.root,b?(b[0].type!==e.contentItems[0].type&&(h=e.contentItems[0],e.replaceChild(h,{type:b[0].type,content:[]}),e.contentItems[0].addChild(h)),d=e,g.forEach(b,function(a){k=a.index<=d.contentItems.length?a.index:d.contentItems.length;"component"===a.type?d.addChild(c,k):("stack"!==a.type&&d.contentItems[a.index].type===a.type||d.addChild({type:a.type,content:[]},k),d=d.contentItems[k])},this)):("stack"===e.contentItems[0].type&&(h=e.contentItems[0],e.replaceChild(h,
{type:"column",content:[]}),e.contentItems[0].addChild(h)),e.contentItems[0].addChild(c)))},_resetCoordinate:function(){var a=this._layout.root.getItemsByType("component"),c=function(a,d){var b=a.parent;b&&(g.some(b.contentItems,function(b,c){if(b===a)return d.push({type:b.type,index:c}),!0}),c(b,d))};g.forEach(a,function(a){var b=[];c(a,b);this._coordinates[a.config.id]=b.reverse()},this)}})});