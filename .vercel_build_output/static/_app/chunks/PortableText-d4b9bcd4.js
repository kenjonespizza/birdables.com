import{S as c,i as f,s as u,w as m,x as _,y as p,q as h,o as d,B as $,t as b,h as x,g,j as k,d as o,a8 as T,e as P,c as w,a as L,b as i}from"./vendor-0ab40093.js";import{L as q}from"./Link-b1be6883.js";function v(r){let t;return{c(){t=b(r[0])},l(e){t=x(e,r[0])},m(e,n){g(e,t,n)},p(e,n){n&1&&k(t,e[0])},d(e){e&&o(t)}}}function y(r){let t,e;return t=new q({props:{class:"",href:r[1],$$slots:{default:[v]},$$scope:{ctx:r}}}),{c(){m(t.$$.fragment)},l(n){_(t.$$.fragment,n)},m(n,a){p(t,n,a),e=!0},p(n,[a]){const s={};a&2&&(s.href=n[1]),a&9&&(s.$$scope={dirty:a,ctx:n}),t.$set(s)},i(n){e||(h(t.$$.fragment,n),e=!0)},o(n){d(t.$$.fragment,n),e=!1},d(n){$(t,n)}}}function S(r,t,e){let n,a,{portableText:s}=t;return r.$$set=l=>{"portableText"in l&&e(2,s=l.portableText)},r.$$.update=()=>{r.$$.dirty&4&&e(1,n=s.mark.link.link.url),r.$$.dirty&4&&e(0,a=s.span.text)},[a,n,s]}class j extends c{constructor(t){super();f(this,t,S,y,u,{portableText:2})}}function z(r){let t,e,n;return e=new T({props:{blocks:r[1],serializers:{marks:{link:j}}}}),{c(){t=P("div"),m(e.$$.fragment),this.h()},l(a){t=w(a,"DIV",{class:!0});var s=L(t);_(e.$$.fragment,s),s.forEach(o),this.h()},h(){i(t,"class",r[0])},m(a,s){g(a,t,s),p(e,t,null),n=!0},p(a,[s]){const l={};s&2&&(l.blocks=a[1]),e.$set(l),(!n||s&1)&&i(t,"class",a[0])},i(a){n||(h(e.$$.fragment,a),n=!0)},o(a){d(e.$$.fragment,a),n=!1},d(a){a&&o(t),$(e)}}}function B(r,t,e){let{class:n}=t,{content:a=[]}=t;return r.$$set=s=>{"class"in s&&e(0,n=s.class),"content"in s&&e(1,a=s.content)},[n,a]}class E extends c{constructor(t){super();f(this,t,B,z,u,{class:0,content:1})}}export{E as P};
