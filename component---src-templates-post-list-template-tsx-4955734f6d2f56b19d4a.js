"use strict";(self.webpackChunk_0jo_blog=self.webpackChunk_0jo_blog||[]).push([[703],{2049:function(e,t,r){var n=r(6283),a=r(5893);t.Z=e=>{let{variant:t="horizon",children:r}=e;return(0,a.jsx)(o,{variant:t,children:r})};const o=n.ZP.div`
    width: 100%;
    display: flex;
    flex-direction: ${e=>{let{variant:t}=e;return"vertical"===t?"column":"row"}};

    > * {
        flex: 1;
    }
`},3623:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(5511),a=r(2049),o=r(2226),i=r(1883);var s=()=>({onNext:(e,t)=>{e&&(0,i.navigate)(`/posts/list/${t+1}`)},onPrev:(e,t)=>{e&&1!==t&&(0,i.navigate)("/posts/list/"+(t-1))}}),l=r(9907);const c=(0,l.Z)("div",{target:"e59hhaf1"})({name:"1066lcq",styles:"display:flex;justify-content:space-between;align-items:center"}),u=(0,l.Z)("button",{target:"e59hhaf0"})("width:30px;height:30px;border:1px solid #ddd;border-radius:50%;opacity:",(e=>{let{isActive:t}=e;return t?1:0}),";cursor:pointer;margin:0 5px;display:flex;justify-content:center;align-items:center;&:hover{background-color:rgb(0, 198, 142);color:white;}");var d=r(231),h=r(5893);var v=e=>{let{currentPage:t,pageCount:r,hasNextPage:n,hasPreviousPage:a}=e;const{onNext:o,onPrev:i}=s();return(0,h.jsxs)(c,{children:[(0,h.jsx)(u,{isActive:a,onClick:()=>i(a,t),children:(0,h.jsx)(d.x_l,{})}),(0,h.jsxs)("span",{children:[t," / ",r]}),(0,h.jsx)(u,{isActive:n,onClick:()=>o(n,t),children:(0,h.jsx)(d.Z1Y,{})})]})};var p=e=>{let{data:{allMarkdownRemark:{edges:t,pageInfo:r}}}=e;return(0,h.jsx)(o.Z,{children:(0,h.jsxs)(n.pW,{children:[(0,h.jsx)(a.Z,{posts:t}),(0,h.jsx)("div",{children:(0,h.jsx)(v,{currentPage:r.currentPage,pageCount:r.pageCount,hasNextPage:r.hasNextPage,hasPreviousPage:r.hasPreviousPage})})]})})}},4405:function(e,t,r){r.d(t,{w_:function(){return c}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var r,a=e.attr,o=e.size,l=e.title,c=s(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}}}]);
//# sourceMappingURL=component---src-templates-post-list-template-tsx-4955734f6d2f56b19d4a.js.map