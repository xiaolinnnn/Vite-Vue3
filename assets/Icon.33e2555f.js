import{g,a as m,h as b,i as R}from"./Button.009a11c3.js";import{v as C,d as t,k as S,t as y,h as M}from"./index.e7bda045.js";function $(e,o,r){var i=-1,n=e.length;o<0&&(o=-o>n?0:n+o),r=r>n?n:r,r<0&&(r+=n),n=o>r?0:r-o>>>0,o>>>=0;for(var a=Array(n);++i<n;)a[i]=e[i+o];return a}function k(e,o,r){var i=e.length;return r=r===void 0?i:r,!o&&r>=i?e:$(e,o,r)}var A="\\ud800-\\udfff",x="\\u0300-\\u036f",F="\\ufe20-\\ufe2f",w="\\u20d0-\\u20ff",j=x+F+w,B="\\ufe0e\\ufe0f",H="\\u200d",I=RegExp("["+H+A+j+B+"]");function f(e){return I.test(e)}function P(e){return e.split("")}var l="\\ud800-\\udfff",O="\\u0300-\\u036f",U="\\ufe20-\\ufe2f",J="\\u20d0-\\u20ff",N=O+U+J,T="\\ufe0e\\ufe0f",V="["+l+"]",s="["+N+"]",u="\\ud83c[\\udffb-\\udfff]",Z="(?:"+s+"|"+u+")",d="[^"+l+"]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",q="\\u200d",h=Z+"?",p="["+T+"]?",D="(?:"+q+"(?:"+[d,c,v].join("|")+")"+p+h+")*",E=p+h+D,L="(?:"+[d+s+"?",s,c,v,V].join("|")+")",W=RegExp(u+"(?="+u+")|"+L+E,"g");function _(e){return e.match(W)||[]}function z(e){return f(e)?_(e):P(e)}function K(e){return function(o){o=C(o);var r=f(o)?z(o):void 0,i=r?r[0]:o.charAt(0),n=r?k(r,1).join(""):o.slice(1);return i[e]()+n}}var G=K("toUpperCase"),Q=G;function re(e,o){return t({name:Q(e),setup(){var r;const i=(r=S(g,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var n;const a=(n=i==null?void 0:i.value)===null||n===void 0?void 0:n[e];return a?a():o}}})}var X=m("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[b("svg",`
 height: 1em;
 width: 1em;
 `)]),oe=t({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){R("-base-icon",X,y(e,"clsPrefix"))},render(){return M("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});export{oe as N,re as r};
