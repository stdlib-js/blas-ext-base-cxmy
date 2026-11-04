"use strict";var y=function(v,u){return function(){try{return u||v((u={exports:{}}).exports,u),u.exports}catch(s){throw (u=0, s)}};};var p=y(function(J,w){
var d=require('@stdlib/strided-base-reinterpret-complex64/dist'),f=require('@stdlib/complex-float32-base-mul/dist').assign,o=5;function k(v,u,s,c,n,l,h){var i,e,a,r,x,m,q,t;if(v<=0)return n;if(i=d(u,0),e=d(n,0),a=c*2,r=h*2,x=s*2,m=l*2,s===1&&l===1){if(q=v%o,q>0)for(t=0;t<q;t++)f(i[a],i[a+1],e[r],e[r+1],e,1,r),a+=x,r+=m;if(v<o)return n;for(t=q;t<v;t+=o)f(i[a],i[a+1],e[r],e[r+1],e,1,r),f(i[a+2],i[a+3],e[r+2],e[r+3],e,1,r+2),f(i[a+4],i[a+5],e[r+4],e[r+5],e,1,r+4),f(i[a+6],i[a+7],e[r+6],e[r+7],e,1,r+6),f(i[a+8],i[a+9],e[r+8],e[r+9],e,1,r+8),a+=o*2,r+=o*2;return n}for(t=0;t<v;t++)f(i[a],i[a+1],e[r],e[r+1],e,1,r),a+=x,r+=m;return n}w.exports=k
});var g=y(function(K,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),z=p();function A(v,u,s,c,n){return z(v,u,s,R(v,s),c,n,R(v,n))}_.exports=A
});var O=y(function(L,M){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=g(),C=p();B(E,"ndarray",C);M.exports=E
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=O(),j,b=F(D(__dirname,"./native.js"));G(b)?j=H:j=b;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
