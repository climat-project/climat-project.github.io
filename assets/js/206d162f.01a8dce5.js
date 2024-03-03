"use strict";(self.webpackChunkclimat=self.webpackChunkclimat||[]).push([[842],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3820:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=t(8168),o=(t(6540),t(5680));const i={toc:[]},a="wrapper";function c(e){let{components:n,...t}=e;return(0,o.yg)(a,(0,r.A)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-clidsl",metastring:"title=documenting-toolchains.cli",title:"documenting-toolchains.cli"},'hello-world {\n\n    """\n    Does this very useful thing!\n    @param location - Location from where are you hello-world-in\'.\n    @param dayOfWeek - Day of week when you are hello-world-in\'.\n    """\n    sub from(location: arg, dayOfWeek: arg) {\n        action \'echo Hello World from $(location) on this fine $(dayOfWeek)\'\n    }\n}\n')))}c.isMDXComponent=!0;const l={title:"Documenting toolchains"},s=void 0,p={unversionedId:"cli-dsl-reference/documenting-toolchains",id:"cli-dsl-reference/documenting-toolchains",title:"Documenting toolchains",description:"You can write documentation for your toolchain in the DSL.",source:"@site/docs/cli-dsl-reference/documenting-toolchains.mdx",sourceDirName:"cli-dsl-reference",slug:"/cli-dsl-reference/documenting-toolchains",permalink:"/docs/cli-dsl-reference/documenting-toolchains",draft:!1,tags:[],version:"current",frontMatter:{title:"Documenting toolchains"},sidebar:"cliDsl",previous:{title:"JavaScript",permalink:"/docs/cli-dsl-reference/javascript"},next:{title:"Comments",permalink:"/docs/cli-dsl-reference/comments"}},u={},m=[],f={toc:m},d="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"You can write documentation for your toolchain in the DSL.\nThis will then show up when passing ",(0,o.yg)("inlineCode",{parentName:"p"},"--help")," argument, or when the command fails"),(0,o.yg)("p",null,"Use ",(0,o.yg)("inlineCode",{parentName:"p"},"@param <param-name>")," to set the description for a specific parameter"),(0,o.yg)(c,{mdxType:"DocumentingToolchains"}),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Documentation works on both root and sub toolchains")))}y.isMDXComponent=!0}}]);