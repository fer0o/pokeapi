(this.webpackJsonppokeapi=this.webpackJsonppokeapi||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),s=n.n(a),o=(n(14),n(9)),i=n(2),u=n.n(i),l=n(3),j=n(4),p=(n(16),r.a.createContext({favoritePokemons:[],updateFavoritePokemons:function(e){return null}})),d=p.Provider,v=p,b=n(0),h=r.a.useContext,f=function(){var e=h(v).favoritePokemons;console.log(e);return Object(b.jsxs)("nav",{children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png",alt:"pokeapi-logo",className:"navbar-image"})}),Object(b.jsxs)("div",{children:[" \u2764\ufe0f ",e.length]})]})},x=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="https://pokeapi.co/api/v2/pokemon/".concat(t),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,c,r,a,s=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:25,n=s.length>1&&void 0!==s[1]?s[1]:0,e.prev=2,c="https://pokeapi.co/api/v2/pokemon?limit=".concat(t,"&offset=").concat(n),e.next=6,fetch(c);case 6:return r=e.sent,e.next=9,r.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(2);case 15:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),k=r.a.useState,g=function(){var e=k(" "),t=Object(j.a)(e,2),n=t[0],c=t[1],r=k(),a=Object(j.a)(r,2),s=(a[0],a[1]),o=function(){var e=Object(l.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(n);case 2:c=e.sent,s(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"searchbar-container",children:[Object(b.jsx)("div",{className:"searchbar",children:Object(b.jsx)("input",{placeholder:"Buscar Pokemon...",onChange:function(e){c(e.target.value)}})}),Object(b.jsx)("div",{className:"searchbar-btn",children:Object(b.jsx)("button",{onClick:o,children:"Buscar"})})]})},P=function(e){var t=e.onLeftClick,n=e.onRightClick,c=e.page,r=e.totalPages;return Object(b.jsxs)("div",{className:"pagination",children:[Object(b.jsx)("button",{onClick:t,children:Object(b.jsx)("div",{children:"\u25c0"})}),Object(b.jsxs)("div",{children:[c," de ",r," "]}),Object(b.jsx)("button",{onClick:n,children:Object(b.jsx)("div",{children:"\u25b6"})})]})},N=function(e){var t=e.pokemon,n=Object(c.useContext)(v),r=n.favoritePokemons,a=n.updateFavoritePokemons,s=r.includes(t.name)?"\ud83d\udc97":" \ud83d\udda4 ";return Object(b.jsxs)("div",{className:"pokemon-card",children:[Object(b.jsx)("div",{className:"pokemon-img-container",children:Object(b.jsx)("img",{src:t.sprites.front_default,alt:t.name,className:"pokemon-img"})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("div",{className:"card-top",children:[Object(b.jsx)("h3",{children:t.name}),Object(b.jsxs)("div",{children:["#",t.id]})]}),Object(b.jsxs)("div",{className:"card-bottom",children:[Object(b.jsx)("div",{className:"pokemon-type",children:t.types.map((function(e,t){return Object(b.jsxs)("div",{className:"pokemon-type-text",children:[" ",e.type.name," "]},t)}))}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault(),a(t.name)},children:Object(b.jsxs)("div",{className:"favorite",children:[" ",s," "]})})]})]})]})},C=function(e){var t=e.pokemons,n=e.page,c=e.setPage,r=e.total,a=e.loading;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h1",{children:"Pokedex"}),Object(b.jsx)(P,{page:n+1,totalPages:r,onLeftClick:function(){var e=Math.max(n-1,0);c(e)},onRightClick:function(){var e=Math.min(n+1,r);c(e)}})]}),a?Object(b.jsx)("div",{children:"Cargando Pokemones.."}):Object(b.jsx)("div",{className:"pokedex-grid",children:t.map((function(e,t){return Object(b.jsx)(N,{pokemon:e},e.name)}))})]})},w=r.a.useState,y=r.a.useEffect;function F(){var e=w([]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=w(0),a=Object(j.a)(r,2),s=a[0],i=a[1],p=w(0),v=Object(j.a)(p,2),h=v[0],x=v[1],k=w(!0),P=Object(j.a)(k,2),N=P[0],F=P[1],B=w([]),L=Object(j.a)(B,2),M=L[0],S=L[1],I=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(!0),e.next=4,m(25,25*s);case 4:return t=e.sent,n=t.results.map(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=8,Promise.all(n);case 8:r=e.sent,c(r),F(!1),x(Math.ceil(t.count/25)),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();y((function(){I()}),[s]);return Object(b.jsx)(d,{value:{favoritePokemons:M,updateFavoritePokemons:function(e){var t=Object(o.a)(M),n=M.indexOf(e);n>=0?t.splice(n,1):t.push(e),S(t)}},children:Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{}),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(g,{}),Object(b.jsx)(C,{pokemons:n,loading:N,page:s,setPage:i,total:h})]})]})})}var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),B()}},[[18,1,2]]]);
//# sourceMappingURL=main.80136ac3.chunk.js.map