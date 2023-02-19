"use strict";(self.webpackChunkclimat=self.webpackChunkclimat||[]).push([[705],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return t?o.createElement(h,l(l({ref:n},m),{},{components:t})):o.createElement(h,l({ref:n},m))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>m,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var o=t(7462),a=(t(7294),t(3905));const r={toc:[]};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-clidsl",metastring:'title="toolchain.cli"',title:'"toolchain.cli"'},"my-toolchain {\n  action \"echo 'Hello'\"\n\n  sub child-toolchain {   // <- Child name\n    action \"echo 'Child'\" // <- Child action\n  }\n}\n")))}l.isMDXComponent=!0;const i={toc:[]};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-clidsl",metastring:"title=toolchain.cli",title:"toolchain.cli"},"my-toolchain {\n\n    @aliases(ct child) // Defines one or more aliases\n    @alias(cld)          // Defines one alias\n    sub child-toolchain {\n        action \"echo 'Child'\"\n    }\n\n}\n")))}c.isMDXComponent=!0;const s={title:"Subcommands"},m=void 0,p={unversionedId:"cli-dsl-reference/subcommands",id:"cli-dsl-reference/subcommands",title:"Subcommands",description:"In a Toolchain, you can have as many nested subcommands as you want.",source:"@site/docs/cli-dsl-reference/subcommands.mdx",sourceDirName:"cli-dsl-reference",slug:"/cli-dsl-reference/subcommands",permalink:"/docs/cli-dsl-reference/subcommands",draft:!1,tags:[],version:"current",frontMatter:{title:"Subcommands"},sidebar:"cliDsl",previous:{title:"Toolchain",permalink:"/docs/cli-dsl-reference/toolchain"},next:{title:"Constants",permalink:"/docs/cli-dsl-reference/constants"}},u={},d=[],h={toc:d};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In a Toolchain, you can have as many nested subcommands as you want.\nLet's take the example from ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli-dsl-reference/toolchain"},"earlier")," and add a subcommand to it:"),(0,a.kt)(l,{mdxType:"Toolchain"}),(0,a.kt)("p",null,"After reinstalling the script, we can do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Console"',title:'"Console"'},"$ my-toolchain\nHello\n$ my-toolchain child-toolchain\nChild\n")),(0,a.kt)("h1",{id:"aliases"},"Aliases"),(0,a.kt)("p",null,"Sometimes you want one than more name for your subcommand. For example, the user may want\nto execute install with a shorthand (like ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," supports ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," for install, eg ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i climat"),")"),(0,a.kt)("p",null,"To achieve that, you can use the sub modifiers ",(0,a.kt)("inlineCode",{parentName:"p"},"@aliases")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@alias"),":"),(0,a.kt)(c,{mdxType:"Aliases"}),(0,a.kt)("p",null,"After reinstalling the script, we can do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Console",title:"Console"},"$ my-toolchain child-toolchain\nChild\n$ my-toolchain child\nChild\n$ my-toolchain ct\nChild\n$ my-toolchain cld\nChild\n")))}f.isMDXComponent=!0}}]);