"use strict";(self["webpackChunklast_creativity"]=self["webpackChunklast_creativity"]||[]).push([[38],{5038:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about",staticStyle:{"margin-bottom":"18vh"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/leaderboard"}},[t._v("Rankings")]),t._v(" | "),n("router-link",{attrs:{to:"/contribute"}},[t._v("Contribute")])],1),n("br"),n("h1",[t._v("Contribute A Riddle")]),n("br"),n("div",[n("div",{staticClass:"d-flex justify-content-center align-items-center w-75 mx-auto my-3"},[n("div",[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticStyle:{width:"48vw"},attrs:{placeholder:"Enter your Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),n("div",{staticClass:"d-flex justify-content-center align-items-center w-75 mx-auto my-3"},[n("div",[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.riddle,expression:"riddle"}],staticStyle:{width:"47.5vw"},attrs:{placeholder:"Enter a Riddle"},domProps:{value:t.riddle},on:{input:function(e){e.target.composing||(t.riddle=e.target.value)}}})])]),n("div",{staticClass:"d-flex justify-content-center align-items-center w-75 mx-auto my-3"},[n("div",[t._m(2),n("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticStyle:{width:"46.5vw"},attrs:{placeholder:"Enter the Answer"},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])]),n("div",{staticClass:"d-flex justify-content-center align-items-center w-75 mx-auto my-3"},[n("button",{on:{click:t.submitQuestion}},[t._v("Submit")])])]),n("br"),n("br"),t._m(3),t._l(t.questions,(function(e,s){return n("div",{key:e.id,staticClass:"container border-top mb-4"},[n("div",{staticClass:"row p-2",class:{"light-blue":s%2!==0}},[n("div",{staticClass:"d-flex col-1 align-items-center justify-content-center"},[n("h5",[t._v(t._s(e.contributor))])]),n("div",{staticClass:"d-flex col-8 align-items-center justify-content-center"},[n("span",[t._v(t._s(e.question))])]),n("div",{staticClass:"d-flex col align-items-center justify-content-center"},[n("span",[t._v(t._s(e.times_answered)+" ")])])])])}))],2)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mx-1",staticStyle:{"font-size":"1.2em"}},[n("strong",[t._v("Name")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mx-1",staticStyle:{"font-size":"1.2em"}},[n("strong",[t._v("Riddle")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mx-1",staticStyle:{"font-size":"1.2em"}},[n("strong",[t._v("Answer")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row p-2"},[n("div",{staticClass:"d-flex col-1 align-items-center justify-content-center"},[n("h5",[t._v("Contributor")])]),n("div",{staticClass:"d-flex col-8 align-items-center justify-content-center"},[n("h5",[t._v("Riddle")])]),n("div",{staticClass:"d-flex col align-items-center justify-content-center"},[n("h5",[t._v("# Answered")])])])])}],r=n(6198),a=(n(8309),n(5666),n(9669)),c=n.n(a),o={name:"ContributionView",data:function(){return{questions:[],count:1,riddle:"",answer:"",name:""}},created:function(){this.getQuestions()},methods:{getQuestions:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("/api/questions");case 3:return n=e.sent,t.questions=n.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},submitQuestion:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().post("/api/question/",{contributor:t.name,question:t.riddle,answer:t.answer,times_answered:0});case 3:t.getQuestions(),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}},l=o,u=n(1001),d=(0,u.Z)(l,s,i,!1,null,null,null),m=d.exports}}]);
//# sourceMappingURL=38-legacy.0dad8074.js.map