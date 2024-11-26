"use strict";(self.webpackChunkclimat=self.webpackChunkclimat||[]).push([[315],{2319:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>c,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"cli-dsl-reference/command-template","title":"Command template","description":"Command templates are used to map the input to any desired command.","source":"@site/docs/cli-dsl-reference/command-template.mdx","sourceDirName":"cli-dsl-reference","slug":"/cli-dsl-reference/command-template","permalink":"/docs/cli-dsl-reference/command-template","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Command template"},"sidebar":"cliDsl","previous":{"title":"Parameters","permalink":"/docs/cli-dsl-reference/parameters"},"next":{"title":"JavaScript","permalink":"/docs/cli-dsl-reference/javascript"}}');var l=o(4848),t=o(8453);function a(e){const n={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-clidsl",metastring:"title=mapping-flags.cli",children:"hello-world(goodDay: flag) {\r\n    sub foo {\r\n        action <% echo Hello World $(goodDay) %>\r\n    }\r\n    sub bar {\r\n        action <% echo Hello World $(goodDay:today-is-a-good-day) %>\r\n    }\r\n    sub baz {\r\n        action <% echo Hello World $(!goodDay:today-is-NOT-a-good-day) %>\r\n    }\r\n}\n"})})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}function s(e){const n={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-clidsl",metastring:"title=mapping-args.cli",children:"hello-world(dayOfTheWeek: arg) {\r\n    sub foo {\r\n        action <% echo Hello World $(dayOfTheWeek) %>\r\n    }\r\n    sub bar {\r\n        action <% echo Hello World $(dayOfTheWeek:--today-is) %>\r\n    }\r\n}\n"})})}function i(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}const c={title:"Command template"},h="Command template",p={},m=[];function u(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"command-template",children:"Command template"})}),"\n",(0,l.jsx)(n.p,{children:"Command templates are used to map the input to any desired command."}),"\n",(0,l.jsx)(n.h1,{id:"mapping-flags",children:"Mapping flags"}),"\n",(0,l.jsx)(n.p,{children:"Can be done in two ways:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Interpolating the string value of flags (i.e. ",(0,l.jsx)(n.code,{children:"false"})," or ",(0,l.jsx)(n.code,{children:"true"}),") into the command string"]}),"\n",(0,l.jsx)(n.li,{children:"Interpolating or not, a predefined identifier based on the truthness of the flag"}),"\n"]}),"\n",(0,l.jsx)(d,{}),"\n",(0,l.jsxs)(n.p,{children:["When executing ",(0,l.jsx)(n.code,{children:"foo"}),", the flag ",(0,l.jsx)(n.code,{children:"goodDay"}),"'s value will just be interpolated into the string"]}),"\n",(0,l.jsxs)(n.p,{children:["When executing ",(0,l.jsx)(n.code,{children:"bar"}),", the flag will decide whether the string ",(0,l.jsx)(n.code,{children:"today-is-a-good-day"}),"\r\nis interpolated, or not"]}),"\n",(0,l.jsxs)(n.p,{children:["When executing ",(0,l.jsx)(n.code,{children:"baz"}),", the effect will be the same as for ",(0,l.jsx)(n.code,{children:"bar"}),", only the flag will be inverted"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:"title=Console",children:"$ hello-world foo\r\nHello World false\r\n\r\n$ hello-world --goodDay foo\r\nHello World true\r\n\r\n$ hello-world bar\r\nHello World\r\n\r\n$ hello-world --goodDay bar\r\nHello World today-is-a-good-day\r\n\r\n$ hello-world baz\r\nHello World today-is-NOT-a-good-day\r\n\r\n$ hello-world --goodDay baz\r\nHello World\n"})}),"\n",(0,l.jsx)(n.h1,{id:"mapping-args",children:"Mapping args"}),"\n",(0,l.jsx)(n.p,{children:"Similar to flags, mapping args can be done in two ways:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Interpolating the value"}),"\n",(0,l.jsx)(n.li,{children:"Interpolating with a key prefix"}),"\n"]}),"\n",(0,l.jsx)(i,{}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:"title=Console",children:"$ hello-world Tuesday foo\r\nHello World Tuesday\r\n\r\n$ hello-world Tuesday bar\r\nHello World --today-is=Tuesday\n"})})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>d});var r=o(6540);const l={},t=r.createContext(l);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);