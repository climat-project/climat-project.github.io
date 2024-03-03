"use strict";(self.webpackChunkclimat=self.webpackChunkclimat||[]).push([[459],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const i={title:"Installation"},o="Installation",l={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"The main platform for CLiMAT is JavaScript",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",draft:!1,tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"gettingStarted",previous:{title:"Introduction",permalink:"/docs/getting-started/introduction"},next:{title:"Your first toolchain",permalink:"/docs/getting-started/your-first-toolchain"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2}],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"installation"},"Installation"),(0,a.yg)("p",null,"The main platform for CLiMAT is JavaScript"),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"NodeJS")," >=13.2.0"),(0,a.yg)("li",{parentName:"ul"},"NPM or any JavaScript package manager (",(0,a.yg)("a",{parentName:"li",href:"https://classic.yarnpkg.com/lang/en/docs/install"},"Yarn"),", ",(0,a.yg)("a",{parentName:"li",href:"https://pnpm.io/installation"},"pnpm"),")")),(0,a.yg)("p",null,"Execute in the console:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm i -g climat         # if you use NPM\n# OR\nyarn global add climat  # if you use Yarn\n# OR\npnpm add -g climat      # if you use pnpm\n")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"On Linux or other ","*","NIX systems, you may need to run the installation command above as superuser (eg. ",(0,a.yg)("inlineCode",{parentName:"p"},"sudo npm i -g climat"),")")),(0,a.yg)("p",null,"Next, we are going to install and run your first toolchain"))}g.isMDXComponent=!0}}]);