(this.webpackJsonppokeapi=this.webpackJsonppokeapi||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(6),s=n.n(a),i=(n(11),n(1)),o=n.n(i),u=n(3),p=n(4),j=(n(13),n(0)),l=function(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png",alt:"pokeapi-logo",className:"navbar-image"})}),Object(j.jsx)("div",{children:" \u2764 "})]})},d=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="https://pokeapi.co/api/v2/pokemon/".concat(t),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r,c,a,s=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:10,n=s.length>1&&void 0!==s[1]?s[1]:0,e.prev=2,r="https://pokeapi.co/api/v2/pokemon?limit=".concat(t,"&offset=").concat(n),e.next=6,fetch(r);case 6:return c=e.sent,e.next=9,c.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(2);case 15:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),b=c.a.useState,f=function(){var e=b(" "),t=Object(p.a)(e,2),n=t[0],r=t[1],c=b(),a=Object(p.a)(c,2),s=(a[0],a[1]),i=function(){var e=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(n);case 2:r=e.sent,s(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"searchbar-container",children:[Object(j.jsx)("div",{className:"searchbar",children:Object(j.jsx)("input",{placeholder:"Buscar Pokemon...",onChange:function(e){r(e.target.value)}})}),Object(j.jsx)("div",{className:"searchbar-btn",children:Object(j.jsx)("button",{onClick:i,children:"Buscar"})})]})},m=function(e){var t=e.pokemon;return console.log(t),Object(j.jsxs)("div",{className:"pokemon-card",children:[Object(j.jsx)("div",{className:"pokemon-img-container",children:Object(j.jsx)("img",{src:t.sprites.front_default,alt:t.name,className:"pokemon-img"})}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("div",{className:"card-top",children:[Object(j.jsx)("h3",{children:t.name}),Object(j.jsxs)("div",{children:["#",t.id]})]}),Object(j.jsxs)("div",{className:"card-bottom",children:[Object(j.jsx)("div",{className:"pokemon-type",children:t.types.map((function(e,t){return Object(j.jsxs)("div",{className:"pokemon-type-text",children:[" ",e.type.name," "]},t)}))}),Object(j.jsx)("div",{className:"favorite",children:" \ud83d\udc97 "})]})]})]})},x=function(e){var t=e.pokemons;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{children:"Pokedex"}),Object(j.jsx)("div",{children:"Pagination"})]}),Object(j.jsx)("div",{className:"pokedex-grid",children:t.map((function(e,t){return Object(j.jsx)(m,{pokemon:e},e.name)}))})]})},O=c.a.useState,k=c.a.useEffect;function g(){var e=O([]),t=Object(p.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:return t=e.sent,console.log(t.results),n=t.results.map(function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=8,Promise.all(n);case 8:c=e.sent,r(c),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return k((function(){c()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{}),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{}),Object(j.jsx)(x,{pokemons:n})]})]})}var N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),N()}},[[15,1,2]]]);
//# sourceMappingURL=main.63dd30eb.chunk.js.map