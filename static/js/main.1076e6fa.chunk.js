(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var r=e(8),c=e.n(r),o=e(4),a=e(9),u=e(1),s=e.n(u),i=e(2),d=(e(15),e(0)),f=function(t){var n=t.goods;return Object(d.jsx)("ul",{children:n.map((function(t){return Object(d.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})},b=e(7);function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var p=function(){return l().then((function(t){return Object(b.a)(t).sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}))},j=function(){return l().then((function(t){return Object(b.a)(t).filter((function(t){return"red"===t.color}))}))},h=function(){var t=Object(i.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1],c=function(){var t=Object(o.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,n();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c(l));case 1:case"end":return t.stop()}}),t)}))),children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c(p));case 1:case"end":return t.stop()}}),t)}))),children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c(j));case 1:case"end":return t.stop()}}),t)}))),children:"Load red goods"}),Object(d.jsx)(f,{goods:e})]})};c.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1076e6fa.chunk.js.map