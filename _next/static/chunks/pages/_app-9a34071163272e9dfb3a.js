(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6156:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),c=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||c()}},3905:function(e,t,r){"use strict";r.r(t),r.d(t,{MDXContext:function(){return s},MDXProvider:function(){return d},mdx:function(){return v},useMDXComponents:function(){return l},withMDXComponents:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),f=function(e){return function(t){var r=l(t.components);return n.createElement(e,a({},t,{components:r}))}},l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"===typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"===typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},425:function(e,t,r){"use strict";r.d(t,{f:function(){return s},F:function(){return c}});var n=r(7294),o=r(9008),a=(0,n.createContext)({setTheme:function(e){},themes:[]}),c=function(){return(0,n.useContext)(a)},i=["light","dark"],u="(prefers-color-scheme: dark)",s=function(e){var t=e.forcedTheme,r=e.disableTransitionOnChange,o=void 0!==r&&r,c=e.enableSystem,s=void 0===c||c,m=e.enableColorScheme,v=void 0===m||m,y=e.storageKey,h=void 0===y?"theme":y,b=e.themes,g=void 0===b?["light","dark"]:b,O=e.defaultTheme,j=void 0===O?s?"system":"light":O,w=e.attribute,P=void 0===w?"data-theme":w,E=e.value,x=e.children,M=(0,n.useState)((function(){return l(h,j)})),k=M[0],C=M[1],S=(0,n.useState)((function(){return l(h)})),_=S[0],D=S[1],T=E?Object.values(E):g,I=(0,n.useCallback)((function(e){var r=p(e);D(r),"system"!==k||t||A(r,!1)}),[k,t]),L=(0,n.useRef)(I);L.current=I;var A=(0,n.useCallback)((function(e,t,r){void 0===t&&(t=!0),void 0===r&&(r=!0);var n=(null==E?void 0:E[e])||e,a=o&&r?d():null;if(t)try{localStorage.setItem(h,e)}catch(e){}if("system"===e&&s){var c=p();n=(null==E?void 0:E[c])||c}if(r){var i,u=document.documentElement;"class"===P?((i=u.classList).remove.apply(i,T),u.classList.add(n)):u.setAttribute(P,n),null==a||a()}}),[]);(0,n.useEffect)((function(){var e=function(){return L.current.apply(L,[].slice.call(arguments))},t=window.matchMedia(u);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var N=(0,n.useCallback)((function(e){t?A(e,!0,!1):A(e),C(e)}),[t]);return(0,n.useEffect)((function(){var e=function(e){e.key===h&&N(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[N]),(0,n.useEffect)((function(){if(v){var e=t&&i.includes(t)?t:k&&i.includes(k)?k:"system"===k&&_||null;document.documentElement.style.setProperty("color-scheme",e)}}),[v,k,_,t]),n.createElement(a.Provider,{value:{theme:k,setTheme:N,forcedTheme:t,resolvedTheme:"system"===k?_:k,themes:s?[].concat(g,["system"]):g,systemTheme:s?_:void 0}},n.createElement(f,{forcedTheme:t,storageKey:h,attribute:P,value:E,enableSystem:s,defaultTheme:j,attrs:T}),x)},f=(0,n.memo)((function(e){var t=e.forcedTheme,r=e.storageKey,a=e.attribute,c=e.enableSystem,i=e.defaultTheme,s=e.value,f="class"===a?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",l=function(e,t){e=(null==s?void 0:s[e])||e;var r=t?e:"'"+e+"'";return"class"===a?"d.add("+r+")":"d.setAttribute('"+a+"', "+r+")"},d="system"===i;return n.createElement(o.default,null,n.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+f+l(t)+"}()"}}:c?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+f+"var e=localStorage.getItem('"+r+"');"+(d?"":l(i)+";")+'if("system"===e||(!e&&'+d+')){var t="'+u+'",m=window.matchMedia(t);m.media!==t||m.matches?'+l("dark")+":"+l("light")+"}else if(e) "+(s?"var x="+JSON.stringify(s)+";":"")+l(s?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+f+'var e=localStorage.getItem("'+r+'");if(e){'+(s?"var x="+JSON.stringify(s)+";":"")+l(s?"x[e]":"e",!0)+"}else{"+l(i)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),l=function(e,t){if("undefined"!=typeof window){var r;try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},d=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},p=function(e){return e||(e=window.matchMedia(u)),e.matches?"dark":"light"}},1359:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(6156),o=r(5893),a=r(1664);var c=r(425);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={ImageWithTheme:function(e){var t=(0,c.F)().theme;return(0,o.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({src:"light"===t?e.light:e.dark},e))},a:function(e){var t=e.href;return t&&(t.startsWith("/")||t.startsWith("#"))?(0,o.jsx)(a.default,{href:t,children:(0,o.jsx)("a",s({},e))}):(0,o.jsx)("a",s({target:"_blank",rel:"noopener noreferrer"},e))},Step:function(e){var t=e.number,r=e.title;return(0,o.jsxs)("div",{className:"step flex items-center py-4",children:[(0,o.jsx)("div",{className:"flex items-center justify-center border border-gray-200 font-bold dark:border-gray-900 rounded-full h-8 w-8 text-blue-500",children:t}),(0,o.jsx)("h3",{className:"ml-3 tracking-tight font-bold",children:r})]})}}},6071:function(e,t,r){"use strict";var n=r(3038),o=r(862);t.default=void 0;var a=o(r(7294)),c=r(1689),i=r(2441),u=r(5749),s={};function f(e,t,r,n){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,r=(0,i.useRouter)(),o=r&&r.asPath||"/",l=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),r=n(t,2),a=r[0],i=r[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=l.href,p=l.as,m=e.children,v=e.replace,y=e.shallow,h=e.scroll,b=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var g=a.Children.only(m),O=g&&"object"===typeof g&&g.ref,j=(0,u.useIntersection)({rootMargin:"200px"}),w=n(j,2),P=w[0],E=w[1],x=a.default.useCallback((function(e){P(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,P]);(0,a.useEffect)((function(){var e=E&&t&&(0,c.isLocalURL)(d),n="undefined"!==typeof b?b:r&&r.locale,o=s[d+"%"+p+(n?"%"+n:"")];e&&!o&&f(r,d,p,{locale:n})}),[p,d,E,b,t,r]);var M={ref:x,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:i}))}(e,r,d,p,v,y,h,b)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),f(r,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var k="undefined"!==typeof b?b:r&&r.locale,C=r&&r.isLocaleDomain&&(0,c.getDomainLocale)(p,k,r&&r.locales,r&&r.domainLocales);M.href=C||(0,c.addBasePath)((0,c.addLocale)(p,k,r&&r.defaultLocale))}return a.default.cloneElement(g,M)};t.default=l},5749:function(e,t,r){"use strict";var n=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,u=(0,o.useRef)(),s=(0,o.useState)(!1),f=n(s,2),l=f[0],d=f[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),r||l||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,l]);return(0,o.useEffect)((function(){if(!c&&!l){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[l]),[p,l]};var o=r(7294),a=r(8391),c="undefined"!==typeof IntersectionObserver;var i=new Map},3367:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(3367);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,c=void 0!==a&&a;return r||o&&c}},7947:function(e,t,r){"use strict";var n=r(9713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),i=(a=r(617))&&a.__esModule?a:{default:a},u=r(3367),s=r(4287),f=r(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var r=c.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=m.length;u<s;u++){var f=m[u];if(o.props.hasOwnProperty(f))if("charSet"===f)r.has(f)?a=!1:r.add(f);else{var l=o.props[f],d=n[f]||new Set;"name"===f&&c||!d.has(l)?(d.add(l),n[f]=d):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:a})}))}function y(e){var t=e.children,r=(0,c.useContext)(u.AmpStateContext),n=(0,c.useContext)(s.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:v,headManager:n,inAmpMode:(0,f.isInAmpMode)(r)},t)}y.rewind=function(){};var h=y;t.default=h},617:function(e,t,r){"use strict";var n=r(319),o=r(4575),a=r(3913),c=(r(1506),r(2205)),i=r(8585),u=r(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}t.__esModule=!0,t.default=void 0;var f=r(7294),l=function(e){c(r,e);var t=s(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(f.Component);t.default=l},1522:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(6156),o=r(5893),a=(r(8980),r(425)),c=r(3905),i=r(1359);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){var t=e.Component,r=e.pageProps;return(0,o.jsx)(a.f,{attribute:"class",children:(0,o.jsx)(c.MDXProvider,{components:i.Z,children:(0,o.jsx)(t,s({},r))})})}},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1522)}])},8980:function(){},9008:function(e,t,r){e.exports=r(7947)},1664:function(e,t,r){e.exports=r(6071)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(2441)}));var r=e.O();_N_E=r}]);