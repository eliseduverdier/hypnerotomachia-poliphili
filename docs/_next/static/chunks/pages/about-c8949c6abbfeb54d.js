(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4613:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(4228)}])},7920:function(e,n,r){"use strict";r.d(n,{Z:function(){return u}});var t=r(5893),i=r(1664);function a(){return(0,t.jsx)("nav",{children:(0,t.jsx)("h1",{children:(0,t.jsx)(i.default,{href:"/",children:"hypnerotomachia \u2051 poliphili"})})})}function o(e){var n=e.currentPageId,r=e.allPageIds;if(null!==n){var a=r.map((function(e){return e.params.id})),o=a.indexOf(n),l=0==o?-1:a[o-1],s=o==a.length-1?-1:a[o+1];return(0,t.jsx)("footer",{children:(0,t.jsxs)("div",{className:"footer-top",children:[-1===l?(0,t.jsx)(t.Fragment,{children:"\xa0"}):(0,t.jsx)(i.default,{href:"/book/".concat(l),children:(0,t.jsx)("a",{className:"link",children:" \u2190 "})}),"\xa0",(0,t.jsx)(i.default,{href:"/table-of-contents",children:(0,t.jsx)("a",{className:"link",children:"\u2200"})}),"\xa0",-1===s?(0,t.jsx)(t.Fragment,{children:"\xa0"}):(0,t.jsx)(i.default,{href:"/book/".concat(s),children:(0,t.jsx)("a",{className:"link",children:" \u2192 "})})]})})}return(0,t.jsx)("footer",{children:(0,t.jsx)("div",{className:"footer-top",children:(0,t.jsx)(i.default,{href:"/table-of-contents",children:(0,t.jsx)("a",{className:"link",children:"read"})})})})}var l=r(9008),s=function(){return(0,t.jsxs)(l.default,{children:[(0,t.jsx)("title",{children:"Hypnerotomachia Poliphili"}),(0,t.jsx)("link",{rel:"icon",href:"/images/favicon.png"})]})},c=function(){return(0,t.jsx)("a",{id:"github-ribbon",href:"https://github.com/eliseduverdier/hypnerotomachia-poliphili",children:"fork me on github"})};function u(e){var n=e.children,r=e.currentPageId,i=e.allPageIds;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(c,{}),(0,t.jsx)(s,{}),(0,t.jsx)(a,{}),(0,t.jsx)("main",{children:n}),(0,t.jsx)(o,{currentPageId:r,allPageIds:i})]})})}},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done)&&(r.push(o.value),!n||r.length!==n);t=!0);}catch(s){i=!0,a=s}finally{try{t||null==l.return||l.return()}finally{if(i)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},o=r(6273),l=r(387),s=r(7190);var c={};function u(e,n,r,t){if(e&&o.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var i=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;c[n+"%"+r+(i?"%"+i:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,i=l.useRouter(),f=a.default.useMemo((function(){var n=t(o.resolveHref(i,e.href,!0),2),r=n[0],a=n[1];return{href:r,as:e.as?o.resolveHref(i,e.as):a||r}}),[i,e.href,e.as]),h=f.href,d=f.as,p=e.children,x=e.replace,v=e.shallow,j=e.scroll,g=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var y=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,w=t(s.useIntersection({rootMargin:"200px"}),2),m=w[0],k=w[1],b=a.default.useCallback((function(e){m(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,m]);a.default.useEffect((function(){var e=k&&r&&o.isLocalURL(h),n="undefined"!==typeof g?g:i&&i.locale,t=c[h+"%"+d+(n?"%"+n:"")];e&&!t&&u(i,h,d,{locale:n})}),[d,h,k,g,r,i]);var _={ref:b,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,i,a,l,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),n[i?"replace":"push"](r,t,{shallow:a,locale:s,scroll:l}))}(e,i,h,d,x,v,j,g)},onMouseEnter:function(e){o.isLocalURL(h)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(i,h,d,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var I="undefined"!==typeof g?g:i&&i.locale,P=i&&i.isLocaleDomain&&o.getDomainLocale(d,I,i&&i.locales,i&&i.domainLocales);_.href=P||o.addBasePath(o.addLocale(d,I,i&&i.defaultLocale))}return a.default.cloneElement(n,_)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done)&&(r.push(o.value),!n||r.length!==n);t=!0);}catch(s){i=!0,a=s}finally{try{t||null==l.return||l.return()}finally{if(i)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!o,s=i.useRef(),c=t(i.useState(!1),2),u=c[0],f=c[1],h=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||u||e&&e.tagName&&(s.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=l.get(n);if(r)return r;var t=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(n,r={id:n,observer:i,elements:t}),r}(r),i=t.id,a=t.observer,o=t.elements;return o.set(e,n),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),l.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,u]);return i.useEffect((function(){if(!o&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[h,u]};var i=r(7294),a=r(9311),o="undefined"!==typeof IntersectionObserver;var l=new Map},4228:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var t=r(5893),i=r(7920);function a(){return(0,t.jsxs)(i.Z,{currentPageId:null,allPageIds:[],children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"\ufd3e Hypnerotomachia Poliphili \ufd3f"})," (see on ",(0,t.jsx)("a",{href:"https://en.wikipedia.org/wiki/Hypnerotomachia_Poliphili",children:"wikipedia \u0e5b"}),"), is a book",(0,t.jsx)("sup",{children:"\ud83d\udcd6\ufe0f"})," published in 1499 said to be written by ",(0,t.jsxs)("a",{href:"https://en.wikipedia.org/wiki/Francesco_Colonna_(writer)",title:"Francesco Colonna (writer)",children:["Francesco Colonna",(0,t.jsx)("sup",{children:"\ud83d\udd8b\ufe0f"})," "]}),"."]}),(0,t.jsxs)("p",{children:["It is a famous example of an ",(0,t.jsx)("a",{href:"https://en.wikipedia.org/wiki/Incunable",title:"Incunable",children:"incunable \u0f12"})," (a work of early printing). The work was first published in ",(0,t.jsx)("a",{href:"https://en.wikipedia.org/wiki/Venice",title:"Venice",children:"Venice\u2e3e"})," by ",(0,t.jsx)("a",{href:"https://en.wikipedia.org/wiki/Aldus_Manutius",children:"Aldus Manutius \u2e19"})]}),(0,t.jsxs)("p",{children:["This first edition has an elegant page layout, with refined ",(0,t.jsx)("a",{href:"https://en.wikipedia.org/wiki/Woodcut",title:"Woodcut",children:"\u300ewoodcut\u300f"})," illustrations in an ",(0,t.jsx)("a",{href:"https://en.wikipedia.org/wiki/Early_Renaissance",title:"Early Renaissance",children:"\xb6 Early Renaissance"})," style. ",(0,t.jsx)("i",{children:"Hypnerotomachia Poliphili"})," presents a mysterious arcane ",(0,t.jsx)("a",{href:"https://en.wikipedia.org/wiki/Allegory",title:"Allegory",children:"allegory\ufe45"})," in which the main protagonist, Poliphilo pursues his love, Polia, through a dreamlike landscape."]}),(0,t.jsx)("p",{children:"In the end, he is reconciled with her by the \xabFountain of Venus\xbb."}),(0,t.jsx)("p",{children:"\ud83d\udda4\ufe0f"}),(0,t.jsx)("hr",{}),(0,t.jsxs)("p",{children:["This website was realised:",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["\ufe4c in ",(0,t.jsx)("a",{href:"https://nextjs.org/",children:"Next.js"})]}),(0,t.jsxs)("li",{children:["\ufe4c using the ",(0,t.jsx)("a",{href:"https://developers.notion.com/",children:"Notion API"})," to store data"]}),(0,t.jsxs)("li",{children:["\ufe4c which comes from the french ",(0,t.jsx)("a",{href:"https://fr.wikisource.org/wiki/Le_Songe_de_Poliphile_(%C3%A9d._Popelin,_1883)",children:"Wikisource"})]})]})]})]})}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=4613,e(e.s=n);var n}));var n=e.O();_N_E=n}]);