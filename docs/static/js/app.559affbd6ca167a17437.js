webpackJsonp([1],{"6HIx":function(e,t){},"7mOl":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view",{attrs:{name:"apptitle"}}),this._v(" "),t("router-view",{attrs:{name:"todolist"}})],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},i,!1,function(e){n("7mOl")},null,null).exports,r=n("/ocq"),l={name:"apptitle",data:function(){return{msg:["todo list","Hello World","basic MVC","componment","webpack"],current_message:"app",current_msg_num:0,helptext:"I will do a simple called todolist, just easy practice anyway..."}},methods:{item_change:function(){var e=this.current_msg_num%this.msg.length;this.current_message=this.msg[e],this.current_msg_num+=1}},mounted:function(){var e=this;setInterval(function(){e.item_change()},1500)}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v("\n        A VueJS app which with "),t("span",{staticClass:"ani"},[this._v(this._s(this.current_message))]),this._v("!\n    ")])])},staticRenderFns:[]};var c=n("VU/8")(l,d,!1,function(e){n("j2EI")},"data-v-b44b7cde",null).exports,o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"todolist"},[n("p",[e._v(" This is an small app. I will do a simple "+e._s(e.helptext)+", just easy practice anyway...")]),e._v(" "),n("div",{staticClass:"app"},[n("form",{on:{submit:function(t){t.preventDefault(),e.sent_text(t)}}},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.panding_text,expression:"panding_text"}],attrs:{name:"panding_text",type:"text",placeholder:"Just type something"},domProps:{value:e.panding_text},on:{input:function(t){t.target.composing||(e.panding_text=t.target.value)}}})]),e._v(" "),n("input",{attrs:{type:"submit",value:"Sent"}})]),e._v(" "),n("ul",e._l(e.list_array,function(t,a){return n("li",{key:t.id},[n("label",{class:{pand_del:e.bind_label_class(a)}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.panding_delete_index,expression:"panding_delete_index"}],attrs:{type:"checkbox"},domProps:{value:a,checked:Array.isArray(e.panding_delete_index)?e._i(e.panding_delete_index,a)>-1:e.panding_delete_index},on:{change:function(t){var n=e.panding_delete_index,i=t.target,s=!!i.checked;if(Array.isArray(n)){var r=a,l=e._i(n,r);i.checked?l<0&&(e.panding_delete_index=n.concat([r])):l>-1&&(e.panding_delete_index=n.slice(0,l).concat(n.slice(l+1)))}else e.panding_delete_index=s}}}),e._v(" "),n("span",[e._v(" "+e._s(t)+" ")])])])})),e._v(" "),n("button",{on:{click:function(t){e.refresh_array()}}},[e._v("\n            Clear\n        ")])])])},staticRenderFns:[]};var p=n("VU/8")({name:"intro",data:function(){return{helptext:"thing",panding_text:"Example Text",list_array:["foobar"],panding_delete_index:[]}},methods:{sent_text:function(){this.list_array.push(this.panding_text)},bind_label_class:function(e){return this.panding_delete_index.includes(e)},refresh_array:function(){var e=this,t=[];this.list_array.forEach(function(n,a){e.panding_delete_index.includes(a)||t.push(n)}),this.list_array=t,this.panding_delete_index=[]}}},o,!1,function(e){n("6HIx")},null,null).exports;a.a.use(r.a);var _=new r.a({routes:[{path:"/",name:"apptitle",components:{default:c,apptitle:c,todolist:p}}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:_,components:{App:s},template:"<App/>"})},j2EI:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.559affbd6ca167a17437.js.map