import{s as y,f as p,a as x,g as u,h as C,c as T,B as g,d as f,j as h,i as P,x as c,L as _,E as m,y as v,H as $}from"../chunks/scheduler.c300260d.js";import{S as E,i as O}from"../chunks/index.35e2b7d2.js";function V(l){let t,e,i,a,o="Verify OTP",r,d;return{c(){t=p("div"),e=p("input"),i=x(),a=p("button"),a.textContent=o,this.h()},l(n){t=u(n,"DIV",{});var s=C(t);e=u(s,"INPUT",{type:!0,placeholder:!0}),i=T(s),a=u(s,"BUTTON",{"data-svelte-h":!0}),g(a)!=="svelte-s742x3"&&(a.textContent=o),s.forEach(f),this.h()},h(){h(e,"type","text"),h(e,"placeholder","Enter OTP")},m(n,s){P(n,t,s),c(t,e),_(e,l[0]),c(t,i),c(t,a),r||(d=[m(e,"input",l[2]),m(a,"click",l[1])],r=!0)},p(n,[s]){s&1&&e.value!==n[0]&&_(e,n[0])},i:v,o:v,d(n){n&&f(t),r=!1,$(d)}}}function b(l,t,e){let i="";const a=()=>{};function o(){i=this.value,e(0,i)}return[i,a,o]}class N extends E{constructor(t){super(),O(this,t,b,V,y,{})}}export{N as component};