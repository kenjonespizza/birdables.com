import{S as te,i as se,s as ae,U as ne,k as H,w as O,e as b,t as G,O as oe,d as r,m as T,x as L,c as _,a as w,h as W,b as E,g as q,y as U,H as g,j as re,q as z,o as F,B as J}from"../../chunks/vendor-0ab40093.js";import{b as ie}from"../../chunks/paths-396f020f.js";import{s as m}from"../../chunks/info-aa335e44.js";import{P as le}from"../../chunks/Posts-b29380ec.js";import{P as ge}from"../../chunks/PortableText-d4b9bcd4.js";import{B as me}from"../../chunks/Breadcrumb-07bc02bd.js";import{t as V}from"../../chunks/utils-a9485558.js";import"../../chunks/sanity-image-url-39c25909.js";import"../../chunks/Link-b1be6883.js";import"../../chunks/ExternalLink-8266f08b.js";function fe(t){let n,o,i,u,f,l,p,I,c,s,B,K,v,M,y,Q,R,P,A,S,k,j,$,D;return document.title=n=t[4].pageInfo.name,i=new ne({props:{title:`${t[4].pageInfo.name}`,description:`${V(t[4].content)}`,keywords:`Blog, ${m.name}`,openGraph:{title:`${t[4].pageInfo.name}`,description:V(t[4].content),url:`${m.address}/blog`,type:"website",images:[{url:`${m.address}/images/opengraph/index.webp`,width:1200,height:627,alt:`${t[4].pageInfo.name}`}]},twitter:{site:`@${m.twitterHandle}`,title:`${t[4].pageInfo.name}`,description:V(t[4].content),image:`${m.address}/images/opengraph/index.webp`,imageAlt:`${t[4].pageInfo.name}!`},jsonLd:{logo:`${m.address}/images/logo.svg`,"@context":"http://schema.org","@type":"WebSite",name:`${t[4].pageInfo.name}`,url:`${m.address}/blog`}}}),p=new me({props:{current:"Blog"}}),P=new ge({props:{content:t[4].content,class:"mt-4 prose-xl text-gray-500"}}),$=new le({props:{posts:t[0],categories:t[5],topics:t[6],count:t[3],currentPage:t[1],perPage:t[2]}}),{c(){o=H(),O(i.$$.fragment),u=H(),f=b("section"),l=b("div"),O(p.$$.fragment),I=H(),c=b("div"),s=b("div"),B=b("h2"),K=G("Birdables Blog "),v=b("span"),M=G("("),y=G(t[3]),Q=G(" posts)"),R=H(),O(P.$$.fragment),A=H(),S=b("div"),k=b("section"),j=b("div"),O($.$$.fragment),this.h()},l(e){oe('[data-svelte="svelte-gjogii"]',document.head).forEach(r),o=T(e),L(i.$$.fragment,e),u=T(e),f=_(e,"SECTION",{class:!0});var h=w(f);l=_(h,"DIV",{class:!0});var x=w(l);L(p.$$.fragment,x),I=T(x),c=_(x,"DIV",{class:!0});var d=w(c);s=_(d,"DIV",{class:!0});var C=w(s);B=_(C,"H2",{class:!0});var X=w(B);K=W(X,"Birdables Blog "),v=_(X,"SPAN",{class:!0});var N=w(v);M=W(N,"("),y=W(N,t[3]),Q=W(N," posts)"),N.forEach(r),X.forEach(r),R=T(C),L(P.$$.fragment,C),C.forEach(r),d.forEach(r),x.forEach(r),h.forEach(r),A=T(e),S=_(e,"DIV",{class:!0});var Y=w(S);k=_(Y,"SECTION",{});var Z=w(k);j=_(Z,"DIV",{class:!0});var ee=w(j);L($.$$.fragment,ee),ee.forEach(r),Z.forEach(r),Y.forEach(r),this.h()},h(){E(v,"class","tracking-tight italic text-gray-300 text-4xl"),E(B,"class","text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tighter lg:text-6xl"),E(s,"class","max-w-3xl pt-8"),E(c,"class","md:flex md:justify-between items-end"),E(l,"class","max-w-7xl mx-auto pt-10 pb-12 px-4 sm:px-6 md:px-8"),E(f,"class","bg-gray-blue"),E(j,"class","max-w-7xl mx-auto pt-10 pb-12 px-4 sm:px-6 md:px-8"),E(S,"class","bg-white")},m(e,a){q(e,o,a),U(i,e,a),q(e,u,a),q(e,f,a),g(f,l),U(p,l,null),g(l,I),g(l,c),g(c,s),g(s,B),g(B,K),g(B,v),g(v,M),g(v,y),g(v,Q),g(s,R),U(P,s,null),q(e,A,a),q(e,S,a),g(S,k),g(k,j),U($,j,null),D=!0},p(e,[a]){(!D||a&16)&&n!==(n=e[4].pageInfo.name)&&(document.title=n);const h={};a&16&&(h.title=`${e[4].pageInfo.name}`),a&16&&(h.description=`${V(e[4].content)}`),a&16&&(h.openGraph={title:`${e[4].pageInfo.name}`,description:V(e[4].content),url:`${m.address}/blog`,type:"website",images:[{url:`${m.address}/images/opengraph/index.webp`,width:1200,height:627,alt:`${e[4].pageInfo.name}`}]}),a&16&&(h.twitter={site:`@${m.twitterHandle}`,title:`${e[4].pageInfo.name}`,description:V(e[4].content),image:`${m.address}/images/opengraph/index.webp`,imageAlt:`${e[4].pageInfo.name}!`}),a&16&&(h.jsonLd={logo:`${m.address}/images/logo.svg`,"@context":"http://schema.org","@type":"WebSite",name:`${e[4].pageInfo.name}`,url:`${m.address}/blog`}),i.$set(h),(!D||a&8)&&re(y,e[3]);const x={};a&16&&(x.content=e[4].content),P.$set(x);const d={};a&1&&(d.posts=e[0]),a&32&&(d.categories=e[5]),a&64&&(d.topics=e[6]),a&8&&(d.count=e[3]),a&2&&(d.currentPage=e[1]),a&4&&(d.perPage=e[2]),$.$set(d)},i(e){D||(z(i.$$.fragment,e),z(p.$$.fragment,e),z(P.$$.fragment,e),z($.$$.fragment,e),D=!0)},o(e){F(i.$$.fragment,e),F(p.$$.fragment,e),F(P.$$.fragment,e),F($.$$.fragment,e),D=!1},d(e){e&&r(o),J(i,e),e&&r(u),e&&r(f),J(p),J(P),e&&r(A),e&&r(S),J($)}}}async function $e({fetch:t}){const n=`${ie}/api/blog/all`,o=await t(n),{posts:i,currentPage:u,perPage:f,count:l,blogInfo:p,categories:I,topics:c}=await o.json();return o?{props:{posts:i,currentPage:u,perPage:f,count:l,blogInfo:p,categories:I,topics:c}}:{status:o.status,error:new Error().message}}function pe(t,n,o){let{posts:i}=n,{currentPage:u}=n,{perPage:f}=n,{count:l}=n,{blogInfo:p}=n,{categories:I}=n,{topics:c}=n;return t.$$set=s=>{"posts"in s&&o(0,i=s.posts),"currentPage"in s&&o(1,u=s.currentPage),"perPage"in s&&o(2,f=s.perPage),"count"in s&&o(3,l=s.count),"blogInfo"in s&&o(4,p=s.blogInfo),"categories"in s&&o(5,I=s.categories),"topics"in s&&o(6,c=s.topics)},[i,u,f,l,p,I,c]}class Ee extends te{constructor(n){super();se(this,n,pe,fe,ae,{posts:0,currentPage:1,perPage:2,count:3,blogInfo:4,categories:5,topics:6})}}export{Ee as default,$e as load};
