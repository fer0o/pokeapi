(this.webpackJsonppokeapi=this.webpackJsonppokeapi||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(8),s=n.n(a),o=(n(14),n(9)),i=n(2),u=n.n(i),l=n(3),p=n(4),j=(n(16),c.a.createContext({favoritePokemons:[],updateFavoritePokemons:function(e){return null}})),d=j.Provider,b=j,v=n(0),h=c.a.useContext,f=function(){var e=h(b).favoritePokemons;console.log(e);return Object(v.jsxs)("nav",{children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png",alt:"pokeapi-logo",className:"navbar-image"})}),Object(v.jsxs)("div",{children:[" \u2764\ufe0f ",e.length]})]})},x=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="https://pokeapi.co/api/v2/pokemon/".concat(t),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,r,c,a,s=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:25,n=s.length>1&&void 0!==s[1]?s[1]:0,e.prev=2,r="https://pokeapi.co/api/v2/pokemon?limit=".concat(t,"&offset=").concat(n),e.next=6,fetch(r);case 6:return c=e.sent,e.next=9,c.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(2);case 15:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),k=c.a.useState,g=function(e){var t=e.onSearch,n=k(" "),r=Object(p.a)(n,2),c=r[0],a=r[1],s=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(c);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"searchbar-container",children:[Object(v.jsx)("div",{className:"searchbar",children:Object(v.jsx)("input",{placeholder:"Buscar Pokemon...",onChange:function(e){a(e.target.value),0===e.target.value.length&&t(null)}})}),Object(v.jsx)("div",{className:"searchbar-btn",children:Object(v.jsx)("button",{onClick:s,children:"Buscar"})})]})},P=function(e){var t=e.onLeftClick,n=e.onRightClick,r=e.page,c=e.totalPages;return Object(v.jsxs)("div",{className:"pagination",children:[Object(v.jsx)("button",{onClick:t,children:Object(v.jsx)("div",{children:"\u25c0"})}),Object(v.jsxs)("div",{children:[r," de ",c," "]}),Object(v.jsx)("button",{onClick:n,children:Object(v.jsx)("div",{children:"\u25b6"})})]})},N=function(e){var t=e.pokemon,n=Object(r.useContext)(b),c=n.favoritePokemons,a=n.updateFavoritePokemons,s=c.includes(t.name)?"\ud83d\udc97":" \ud83d\udda4 ";return Object(v.jsxs)("div",{className:"pokemon-card",children:[Object(v.jsx)("div",{className:"pokemon-img-container",children:Object(v.jsx)("img",{src:t.sprites.front_default,alt:t.name,className:"pokemon-img"})}),Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsxs)("div",{className:"card-top",children:[Object(v.jsx)("h3",{children:t.name}),Object(v.jsxs)("div",{children:["#",t.id]})]}),Object(v.jsxs)("div",{className:"card-bottom",children:[Object(v.jsx)("div",{className:"pokemon-type",children:t.types.map((function(e,t){return Object(v.jsxs)("div",{className:"pokemon-type-text",children:[" ",e.type.name," "]},t)}))}),Object(v.jsx)("button",{onClick:function(e){e.preventDefault(),a(t.name)},children:Object(v.jsxs)("div",{className:"favorite",children:[" ",s," "]})})]})]})]})},w=function(e){var t=e.pokemons,n=e.page,r=e.setPage,c=e.total,a=e.loading;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("h1",{children:"Pokedex"}),Object(v.jsx)(P,{page:n+1,totalPages:c,onLeftClick:function(){var e=Math.max(n-1,0);r(e)},onRightClick:function(){var e=Math.min(n+1,c);r(e)}})]}),a?Object(v.jsx)("div",{children:"Cargando Pokemones.."}):Object(v.jsx)("div",{className:"pokedex-grid",children:t.map((function(e,t){return Object(v.jsx)(N,{pokemon:e},e.name)}))})]})},C=c.a.useState,y=c.a.useEffect;function F(){var e=C([]),t=Object(p.a)(e,2),n=t[0],r=t[1],c=C(0),a=Object(p.a)(c,2),s=a[0],i=a[1],j=C(0),b=Object(p.a)(j,2),h=b[0],k=b[1],P=C(!0),N=Object(p.a)(P,2),F=N[0],S=N[1],B=C([]),L=Object(p.a)(B,2),M=L[0],I=L[1],A=C(!1),D=Object(p.a)(A,2),E=D[0],J=D[1],R=C(!1),T=Object(p.a)(R,2),_=T[0],q=T[1],z=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,m(25,25*s);case 4:return t=e.sent,n=t.results.map(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=8,Promise.all(n);case 8:c=e.sent,r(c),S(!1),k(Math.ceil(t.count/25)),J(!1),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();y((function(){_||z()}),[s]),y((function(){z()}),[s]);var G=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",z());case 2:return S(!0),J(!1),q(!0),e.next=7,x(t);case 7:if(n=e.sent){e.next=14;break}return J(!0),S(!1),e.abrupt("return");case 14:r([n]),i(0),k(1);case 17:S(!1),q(!1);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(d,{value:{favoritePokemons:M,updateFavoritePokemons:function(e){var t=Object(o.a)(M),n=M.indexOf(e);n>=0?t.splice(n,1):t.push(e),I(t)}},children:Object(v.jsxs)("div",{children:[Object(v.jsx)(f,{}),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(g,{onSearch:G}),E?Object(v.jsx)("div",{children:"No se encontro el pokemon que buscabas \ud83d\ude1e "}):Object(v.jsx)(w,{pokemons:n,loading:F,page:s,setPage:i,total:h})]})]})})}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(F,{})}),document.getElementById("root")),S()}},[[18,1,2]]]);
//# sourceMappingURL=main.89d10734.chunk.js.map