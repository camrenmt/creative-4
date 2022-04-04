"use strict";(self["webpackChunklast_creativity"]=self["webpackChunklast_creativity"]||[]).push([[38],{38:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about",staticStyle:{"margin-bottom":"18vh"}},[s("nav",[s("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),s("router-link",{attrs:{to:"/leaderboard"}},[t._v("Rankings")]),t._v(" | "),s("router-link",{attrs:{to:"/contribute"}},[t._v("Contribute")])],1),s("br"),s("h1",[t._v("Contribute A Riddle")]),s("br"),s("div",[s("div",{staticClass:"d-flex justify-content-center align-items-center w-75 mx-auto my-3"},[s("div",[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticStyle:{width:"48vw"},attrs:{placeholder:"Enter your Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),s("div",{staticClass:"d-flex justify-content-center align-items-center w-75 mx-auto my-3"},[s("div",[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.riddle,expression:"riddle"}],staticStyle:{width:"47.5vw"},attrs:{placeholder:"Enter a Riddle"},domProps:{value:t.riddle},on:{input:function(e){e.target.composing||(t.riddle=e.target.value)}}})])]),s("div",{staticClass:"d-flex justify-content-center align-items-center w-75 mx-auto my-3"},[s("div",[t._m(2),s("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticStyle:{width:"46.5vw"},attrs:{placeholder:"Enter the Answer"},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])]),s("div",{staticClass:"d-flex justify-content-center align-items-center w-75 mx-auto my-3"},[s("button",{on:{click:t.submitQuestion}},[t._v("Submit")])])]),s("br"),s("br"),t._m(3),t._l(t.questions,(function(e,n){return s("div",{key:e.id,staticClass:"container border-top mb-4"},[s("div",{staticClass:"row p-2",class:{"light-blue":n%2!==0}},[s("div",{staticClass:"d-flex col-1 align-items-center justify-content-center"},[s("h5",[t._v(t._s(e.contributor))])]),s("div",{staticClass:"d-flex col-8 align-items-center justify-content-center"},[s("span",[t._v(t._s(e.question))])]),s("div",{staticClass:"d-flex col align-items-center justify-content-center"},[s("span",[t._v(t._s(e.times_answered)+" ")])])])])}))],2)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"mx-1",staticStyle:{"font-size":"1.2em"}},[s("strong",[t._v("Name")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"mx-1",staticStyle:{"font-size":"1.2em"}},[s("strong",[t._v("Riddle")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"mx-1",staticStyle:{"font-size":"1.2em"}},[s("strong",[t._v("Answer")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row p-2"},[s("div",{staticClass:"d-flex col-1 align-items-center justify-content-center"},[s("h5",[t._v("Contributor")])]),s("div",{staticClass:"d-flex col-8 align-items-center justify-content-center"},[s("h5",[t._v("Riddle")])]),s("div",{staticClass:"d-flex col align-items-center justify-content-center"},[s("h5",[t._v("# Answered")])])])])}],a=s(669),r=s.n(a),l={name:"ContributionView",data(){return{questions:[],count:1,riddle:"",answer:"",name:""}},created(){this.getQuestions()},methods:{async getQuestions(){try{let t=await r().get("/api/questions");return this.questions=t.data,!0}catch(t){console.log(t)}},async submitQuestion(){try{await r().post("/api/question/",{contributor:this.name,question:this.riddle,answer:this.answer,times_answered:0}),this.getQuestions()}catch(t){console.log(t)}}}},o=l,c=s(1),u=(0,c.Z)(o,n,i,!1,null,null,null),d=u.exports}}]);
//# sourceMappingURL=38.ea495c50.js.map