(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{512:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/table-of-contents",function(){return r(1935)}])},7920:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(5893),a=r(1664);function o(){return(0,t.jsx)("nav",{children:(0,t.jsx)("h1",{children:(0,t.jsx)(a.default,{href:"/",children:"hypnerotomachia \u2051 poliphili"})})})}function i(e){var n=e.currentPageId,r=e.allPageIds;if(null!==n){var o=r.map((function(e){return e.params.id})),i=o.indexOf(n),l=0==i?-1:o[i-1],c=i==o.length-1?-1:o[i+1];return(0,t.jsx)("footer",{children:(0,t.jsxs)("div",{className:"footer-top",children:[-1===l?(0,t.jsx)(t.Fragment,{children:"\xa0"}):(0,t.jsx)(a.default,{href:"/book/".concat(l),children:(0,t.jsx)("a",{className:"link",children:" \u2190 "})}),"\xa0",(0,t.jsx)(a.default,{href:"/table-of-contents",children:(0,t.jsx)("a",{className:"link",children:"\u2200"})}),"\xa0",-1===c?(0,t.jsx)(t.Fragment,{children:"\xa0"}):(0,t.jsx)(a.default,{href:"/book/".concat(c),children:(0,t.jsx)("a",{className:"link",children:" \u2192 "})})]})})}return(0,t.jsx)("footer",{children:(0,t.jsx)("div",{className:"footer-top",children:(0,t.jsx)(a.default,{href:"/table-of-contents",children:(0,t.jsx)("a",{className:"link",children:"read"})})})})}var l=r(9008),c=function(){return(0,t.jsxs)(l.default,{children:[(0,t.jsx)("title",{children:"Hypnerotomachia Poliphili"}),(0,t.jsx)("link",{rel:"icon",href:"/images/favicon.png"})]})},u=function(){return(0,t.jsx)("a",{id:"github-ribbon",href:"https://github.com/eliseduverdier/hypnerotomachia-poliphili",children:"fork me on github"})};function s(e){var n=e.children,r=e.currentPageId,a=e.allPageIds;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(u,{}),(0,t.jsx)(c,{}),(0,t.jsx)(o,{}),(0,t.jsx)("main",{children:n}),(0,t.jsx)(i,{currentPageId:r,allPageIds:a})]})})}},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(c){a=!0,o=c}finally{try{t||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},i=r(6273),l=r(387),c=r(7190);var u={};function s(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[n+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,a=l.useRouter(),f=o.default.useMemo((function(){var n=t(i.resolveHref(a,e.href,!0),2),r=n[0],o=n[1];return{href:r,as:e.as?i.resolveHref(a,e.as):o||r}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,m=e.shallow,x=e.scroll,y=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var j=(n=o.default.Children.only(p))&&"object"===typeof n&&n.ref,g=t(c.useIntersection({rootMargin:"200px"}),2),b=g[0],k=g[1],_=o.default.useCallback((function(e){b(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,b]);o.default.useEffect((function(){var e=k&&r&&i.isLocalURL(d),n="undefined"!==typeof y?y:a&&a.locale,t=u[d+"%"+h+(n?"%"+n:"")];e&&!t&&s(a,d,h,{locale:n})}),[h,d,k,y,r,a]);var w={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,o,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),n[a?"replace":"push"](r,t,{shallow:o,locale:c,scroll:l}))}(e,a,d,h,v,m,x,y)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(a,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof y?y:a&&a.locale,I=a&&a.isLocaleDomain&&i.getDomainLocale(h,E,a&&a.locales,a&&a.domainLocales);w.href=I||i.addBasePath(i.addLocale(h,E,a&&a.defaultLocale))}return o.default.cloneElement(n,w)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(c){a=!0,o=c}finally{try{t||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,c=a.useRef(),u=t(a.useState(!1),2),s=u[0],f=u[1],d=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||s||e&&e.tagName&&(c.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=l.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,o=t.observer,i=t.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,s]);return a.useEffect((function(){if(!i&&!s){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[s]),[d,s]};var a=r(7294),o=r(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},1935:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return i},default:function(){return l}});var t=r(5893),a=r(1664),o=r(7920),i=!0;function l(e){var n=e.pages;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.Z,{currentPageId:null,allPageIds:[],children:(0,t.jsx)("ul",{children:n.map((function(e){return(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"/book/".concat(e.id),children:(0,t.jsxs)("a",{children:[e.number," \u21af ",(0,t.jsx)("div",{className:"summary",children:e.summary})," \u219d "]})})},e.id)}))})})})}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=512,e(e.s=n);var n}));var n=e.O();_N_E=n}]);