(self["webpackChunklast_creativity"]=self["webpackChunklast_creativity"]||[]).push([[706],{8706:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return v}});var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about",staticStyle:{"margin-bottom":"18vh"}},[e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),e("router-link",{attrs:{to:"/leaderboard"}},[t._v("Rankings")]),t._v(" | "),e("router-link",{attrs:{to:"/contribute"}},[t._v("Contribute")])],1),e("br"),e("br"),e("h1",[t._v("Rankings")]),e("br"),e("br"),t._m(0),t._l(t.rankings,(function(n,r){return e("div",{key:n.id,staticClass:"container border-top"},[e("div",{staticClass:"row p-2",class:{"light-blue":r%2!==0}},[e("div",{staticClass:"d-flex col-1 align-items-center justify-content-center"},[e("h3",[t._v(t._s(r+1))])]),e("div",{staticClass:"d-flex col-5 align-items-center justify-content-center"},[e("h4",[t._v(t._s(n.name))])]),e("div",{staticClass:"d-flex col align-items-center justify-content-center"},[e("span",[t._v(t._s(n.time/1e3)+" seconds ")])]),e("div",{staticClass:"d-flex col align-items-center justify-content-center"},[e("span",[t._v(t._s(n.date)+" ")])])])])}))],2)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"row p-2"},[e("div",{staticClass:"d-flex col-1 align-items-center justify-content-center"},[e("h3",[t._v("Rank")])]),e("div",{staticClass:"d-flex col-5 align-items-center justify-content-center"},[e("h3",[t._v("Name")])]),e("div",{staticClass:"d-flex col align-items-center justify-content-center"},[e("h3",[t._v("Time")])]),e("div",{staticClass:"d-flex col align-items-center justify-content-center"},[e("h3",[t._v("Date")])])])])}],s=e(6198),a=(e(5666),e(2707),e(9669)),c=e.n(a),o={name:"RankingsView",data:function(){return{rankings:[],count:1}},created:function(){this.getRankings()},methods:{getRankings:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("/api/rankings");case 3:return e=n.sent,t.rankings=e.data.sort((function(t,n){return t.time-n.time})),n.abrupt("return",!0);case 8:n.prev=8,n.t0=n["catch"](0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},nextCount:function(){var t=this.count;return this.count+=1,t}}},u=o,l=e(1001),f=(0,l.Z)(u,r,i,!1,null,null,null),v=f.exports},9341:function(t,n,e){"use strict";var r=e(7293);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){return 1},1)}))}},1589:function(t,n,e){var r=e(7854),i=e(1400),s=e(6244),a=e(6135),c=r.Array,o=Math.max;t.exports=function(t,n,e){for(var r=s(t),u=i(n,r),l=i(void 0===e?r:e,r),f=c(o(l-u,0)),v=0;u<l;u++,v++)a(f,v,t[u]);return f.length=v,f}},4362:function(t,n,e){var r=e(1589),i=Math.floor,s=function(t,n){var e=t.length,o=i(e/2);return e<8?a(t,n):c(t,s(r(t,0,o),n),s(r(t,o),n),n)},a=function(t,n){var e,r,i=t.length,s=1;while(s<i){r=s,e=t[s];while(r&&n(t[r-1],e)>0)t[r]=t[--r];r!==s++&&(t[r]=e)}return t},c=function(t,n,e,r){var i=n.length,s=e.length,a=0,c=0;while(a<i||c<s)t[a+c]=a<i&&c<s?r(n[a],e[c])<=0?n[a++]:e[c++]:a<i?n[a++]:e[c++];return t};t.exports=s},8886:function(t,n,e){var r=e(8113),i=r.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},256:function(t,n,e){var r=e(8113);t.exports=/MSIE|Trident/.test(r)},8008:function(t,n,e){var r=e(8113),i=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},2707:function(t,n,e){"use strict";var r=e(2109),i=e(1702),s=e(9662),a=e(7908),c=e(6244),o=e(1340),u=e(7293),l=e(4362),f=e(9341),v=e(8886),d=e(256),h=e(7392),g=e(8008),m=[],p=i(m.sort),_=i(m.push),k=u((function(){m.sort(void 0)})),x=u((function(){m.sort(null)})),C=f("sort"),b=!u((function(){if(h)return h<70;if(!(v&&v>3)){if(d)return!0;if(g)return g<603;var t,n,e,r,i="";for(t=65;t<76;t++){switch(n=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)m.push({k:n+r,v:e})}for(m.sort((function(t,n){return n.v-t.v})),r=0;r<m.length;r++)n=m[r].k.charAt(0),i.charAt(i.length-1)!==n&&(i+=n);return"DGBEFHACIJK"!==i}})),w=k||!x||!C||!b,y=function(t){return function(n,e){return void 0===e?-1:void 0===n?1:void 0!==t?+t(n,e)||0:o(n)>o(e)?1:-1}};r({target:"Array",proto:!0,forced:w},{sort:function(t){void 0!==t&&s(t);var n=a(this);if(b)return void 0===t?p(n):p(n,t);var e,r,i=[],o=c(n);for(r=0;r<o;r++)r in n&&_(i,n[r]);l(i,y(t)),e=i.length,r=0;while(r<e)n[r]=i[r++];while(r<o)delete n[r++];return n}})}}]);
//# sourceMappingURL=706-legacy.e59acd73.js.map