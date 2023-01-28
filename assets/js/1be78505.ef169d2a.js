"use strict";(self.webpackChunkclimat=self.webpackChunkclimat||[]).push([[514],{9963:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ce});var n=a(7294),l=a(6010),r=a(1944),o=a(5281),c=a(3320),i=a(2802),s=a(4477),d=a(1116),m=a(7676),u=a(5999),b=a(2466),p=a(5936);const E="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function _(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),r=(0,n.useRef)(!1),{startScroll:o,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,a)=>{let{scrollY:n}=e;const o=a?.scrollY;o&&(r.current?r.current=!1:n>=o?(c(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:a,scrollToTop:()=>o(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,E,e&&h),type:"button",onClick:t})}var f=a(6550),v=a(7524),g=a(6668),k=a(1327),C=a(7462);function S(e){return n.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I="collapseSidebarButton_PEFL",N="collapseSidebarButtonIcon_kv0_";function Z(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",I),onClick:t},n.createElement(S,{className:N}))}var x=a(9689),y=a(902);const T=Symbol("EmptyContext"),L=n.createContext(T);function A(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),r=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return n.createElement(L.Provider,{value:r},t)}var w=a(6043),M=a(8596),B=a(9960),H=a(2389);function F(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function P(e){let{item:t,onItemClick:a,activePath:r,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:E}=t,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,g.L)(),_=function(e){const t=(0,H.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),f=(0,i._F)(t,r),v=(0,M.Mg)(E,r),{collapsed:k,setCollapsed:S}=(0,w.u)({initialState:()=>!!b&&(!f&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,n.useContext)(L);if(e===T)throw new y.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!k),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const r=(0,y.D9)(t);(0,n.useEffect)((()=>{t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:f,collapsed:k,updateCollapsed:Z}),(0,n.useEffect)((()=>{b&&null!=I&&I!==s&&h&&S(!0)}),[b,I,s,S,h]),n.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},p)},n.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},n.createElement(B.Z,(0,C.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!E&&b,"menu__link--active":f}),onClick:b?e=>{a?.(t),E?Z(!1):(e.preventDefault(),Z())}:()=>{a?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!k:void 0,href:b?_??"#":_},d),u),E&&b&&n.createElement(F,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),n.createElement(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},n.createElement(G,{items:m,tabIndex:k?-1:0,onItemClick:a,activePath:r,level:c+1})))}var D=a(3919),W=a(9471);const R="menuExternalLink_NmtK";function V(e){let{item:t,onItemClick:a,activePath:r,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,E=(0,i._F)(t,r),h=(0,D.Z)(m);return n.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},n.createElement(B.Z,(0,C.Z)({className:(0,l.Z)("menu__link",!h&&R,{"menu__link--active":E}),autoAddBaseUrl:p,"aria-current":E?"page":void 0,to:m},h&&{onClick:a?()=>a(t):void 0},d),u,!h&&n.createElement(W.Z,null)))}const z="menuHtmlItem_M9Kj";function U(e){let{item:t,level:a,index:r}=e;const{value:c,defaultStyle:i,className:s}=t;return n.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(a),i&&[z,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:c}})}function K(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(P,(0,C.Z)({item:t},a));case"html":return n.createElement(U,(0,C.Z)({item:t},a));default:return n.createElement(V,(0,C.Z)({item:t},a))}}function j(e){let{items:t,...a}=e;return n.createElement(A,null,t.map(((e,t)=>n.createElement(K,(0,C.Z)({key:t,item:e,index:t},a)))))}const G=(0,n.memo)(j),Y="menu_SIkG",q="menuWithAnnouncementBar_GW3s";function O(e){let{path:t,sidebar:a,className:r}=e;const c=function(){const{isActive:e}=(0,x.nT)(),[t,a]=(0,n.useState)(e);return(0,b.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",Y,c&&q,r)},n.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(G,{items:a,activePath:t,level:1})))}const X="sidebar_njMd",J="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",$="sidebarLogo_isFc";function ee(e){let{path:t,sidebar:a,onCollapse:r,isHidden:o}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,g.L)();return n.createElement("div",{className:(0,l.Z)(X,c&&J,o&&Q)},c&&n.createElement(k.Z,{tabIndex:-1,className:$}),n.createElement(O,{path:t,sidebar:a}),i&&n.createElement(Z,{onClick:r}))}const te=n.memo(ee);var ae=a(3102),ne=a(2961);const le=e=>{let{sidebar:t,path:a}=e;const r=(0,ne.e)();return n.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(G,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function re(e){return n.createElement(ae.Zo,{component:le,props:e})}const oe=n.memo(re);function ce(e){const t=(0,v.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(te,e),l&&n.createElement(oe,e))}const ie="expandButton_m80_",se="expandButtonIcon_BlDH";function de(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:ie,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(S,{className:se}))}const me={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function ue(e){let{children:t}=e;const a=(0,d.V)();return n.createElement(n.Fragment,{key:a?.name??"noSidebar"},t)}function be(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:r}=e;const{pathname:c}=(0,f.TH)(),[i,s]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{i&&s(!1),r((e=>!e))}),[r,i]);return n.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,me.docSidebarContainer,a&&me.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(me.docSidebarContainer)&&a&&s(!0)}},n.createElement(ue,null,n.createElement("div",{className:(0,l.Z)(me.sidebarViewport,i&&me.sidebarViewportHidden)},n.createElement(ce,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&n.createElement(de,{toggleSidebar:d}))))}const pe={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ee(e){let{hiddenSidebarContainer:t,children:a}=e;const r=(0,d.V)();return n.createElement("main",{className:(0,l.Z)(pe.docMainContainer,(t||!r)&&pe.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced)},a))}const he="docPage__5DB",_e="docsWrapper_BCFX";function fe(e){let{children:t}=e;const a=(0,d.V)(),[l,r]=(0,n.useState)(!1);return n.createElement(m.Z,{wrapperClassName:_e},n.createElement(_,null),n.createElement("div",{className:he},a&&n.createElement(be,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),n.createElement(Ee,{hiddenSidebarContainer:l},t)))}var ve=a(4972),ge=a(197);function ke(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(ge.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),n.createElement(r.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ce(e){const{versionMetadata:t}=e,a=(0,i.hI)(e);if(!a)return n.createElement(ve.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=a;return n.createElement(n.Fragment,null,n.createElement(ke,e),n.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:m,items:u},n.createElement(fe,null,c)))))}}}]);