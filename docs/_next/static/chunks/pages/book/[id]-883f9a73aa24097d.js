(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[826],{4344:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/book/[id]",function(){return r(8857)}])},7920:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(5893),a=r(1664);function o(){return(0,t.jsx)("nav",{children:(0,t.jsx)("h1",{children:(0,t.jsx)(a.default,{href:"/",children:"hypnerotomachia \u2051 poliphili"})})})}function i(e){var n=e.currentPageId,r=e.allPageIds;if(null!==n){var o=r.map((function(e){return e.params.id})),i=o.indexOf(n),l=0==i?-1:o[i-1],c=i==o.length-1?-1:o[i+1];return(0,t.jsx)("footer",{children:(0,t.jsxs)("div",{className:"footer-top",children:[-1===l?(0,t.jsx)(t.Fragment,{children:"\xa0"}):(0,t.jsx)(a.default,{href:"/book/".concat(l),children:(0,t.jsx)("a",{className:"link",children:" \u2190 "})}),"\xa0",(0,t.jsx)(a.default,{href:"/table-of-contents",children:(0,t.jsx)("a",{className:"link",children:"\u2200"})}),"\xa0",-1===c?(0,t.jsx)(t.Fragment,{children:"\xa0"}):(0,t.jsx)(a.default,{href:"/book/".concat(c),children:(0,t.jsx)("a",{className:"link",children:" \u2192 "})})]})})}return(0,t.jsx)("footer",{children:(0,t.jsx)("div",{className:"footer-top",children:(0,t.jsx)(a.default,{href:"/table-of-contents",children:(0,t.jsx)("a",{className:"link",children:"read"})})})})}var l=r(9008),c=function(){return(0,t.jsxs)(l.default,{children:[(0,t.jsx)("title",{children:"Hypnerotomachia Poliphili"}),(0,t.jsx)("link",{rel:"icon",href:"/images/favicon.png"})]})},u=function(){return(0,t.jsx)("a",{id:"github-ribbon",href:"https://github.com/eliseduverdier/hypnerotomachia-poliphili",children:"fork me on github"})};function s(e){var n=e.children,r=e.currentPageId,a=e.allPageIds;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(u,{}),(0,t.jsx)(c,{}),(0,t.jsx)(o,{}),(0,t.jsx)("main",{children:n}),(0,t.jsx)(i,{currentPageId:r,allPageIds:a})]})})}},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(c){a=!0,o=c}finally{try{t||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},i=r(6273),l=r(387),c=r(7190);var u={};function s(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[n+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,a=l.useRouter(),f=o.default.useMemo((function(){var n=t(i.resolveHref(a,e.href,!0),2),r=n[0],o=n[1];return{href:r,as:e.as?i.resolveHref(a,e.as):o||r}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,m=e.shallow,g=e.scroll,x=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var y=(n=o.default.Children.only(p))&&"object"===typeof n&&n.ref,j=t(c.useIntersection({rootMargin:"200px"}),2),b=j[0],_=j[1],k=o.default.useCallback((function(e){b(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,b]);o.default.useEffect((function(){var e=_&&r&&i.isLocalURL(d),n="undefined"!==typeof x?x:a&&a.locale,t=u[d+"%"+h+(n?"%"+n:"")];e&&!t&&s(a,d,h,{locale:n})}),[h,d,_,x,r,a]);var I={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,o,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),n[a?"replace":"push"](r,t,{shallow:o,locale:c,scroll:l}))}(e,a,d,h,v,m,g,x)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(a,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var w="undefined"!==typeof x?x:a&&a.locale,E=a&&a.isLocaleDomain&&i.getDomainLocale(h,w,a&&a.locales,a&&a.domainLocales);I.href=E||i.addBasePath(i.addLocale(h,w,a&&a.defaultLocale))}return o.default.cloneElement(n,I)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(c){a=!0,o=c}finally{try{t||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,c=a.useRef(),u=t(a.useState(!1),2),s=u[0],f=u[1],d=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||s||e&&e.tagName&&(c.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=l.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,o=t.observer,i=t.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,s]);return a.useEffect((function(){if(!i&&!s){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[s]),[d,s]};var a=r(7294),o=r(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},8857:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return i},default:function(){return l}});var t=r(5893),a=r(7920),o=r(1163),i=!0;function l(e){var n=e.pageId,r=e.pageContent,i=e.pageSummary,l=e.allPageIds;return(0,o.useRouter)().isFallback?(0,t.jsx)("div",{className:"loading",children:"\u3030\u3030\u3030loading\u3030\u3030\u3030\u3030"}):(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.Z,{currentPageId:n,allPageIds:l,children:[(0,t.jsx)("p",{className:"summary",children:i}),"\u2042",(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:r}}),"\u1368"]})})}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)},1163:function(e,n,r){e.exports=r(387)}},function(e){e.O(0,[774,888,179],(function(){return n=4344,e(e.s=n);var n}));var n=e.O();_N_E=n}]);