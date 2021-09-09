var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,i=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))l.call(t,a)&&s(e,a,t[a]);return e},o=(e,r)=>t(e,a(r));"undefined"!=typeof require&&require;import{R as c,r as m,C as d,c as u,u as p,G as g,X as v,P as x,a as h,S as y,b as E,d as f,H as b}from"./vendor.03a1b00a.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const w=()=>c.createElement("div",{className:"p-1 text-sm pl-2 text-gray-200 relative h-[30px] app-region-drag"},"Account Surfer",c.createElement("svg",{className:"h-7 w-7 p-1 hover:bg-gray-700 absolute inset-y-0 right-0 app-region-no-drag",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",onClick:()=>window.sendEvent("requestHideWindow")},c.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))),N=({state:e,storeState:t})=>{const{url:a}=e,[r,n]=m.exports.useState(!1);return c.createElement("div",{className:"text-xl px-8 pt-2 text-gray-300 overflow-y-auto overflow-x-hidden h-[82px]"},c.createElement("h2",{className:"pb-1"},a?"Open link at ":"Launch an ","account or browser:"),a&&c.createElement("div",{className:"group break-all truncate text-gray-500 hover:text-gray-400 -mx-2 -my-1 px-2 py-1 hover:bg-gray-900 relative"},a,c.createElement("div",{className:"absolute top-0 right-0 text-gray-300 z-10 opacity-0 group-hover:opacity-100 text-sm"},c.createElement("span",{className:"py-1 px-2 bg-blue-900 hover:bg-blue-700 hover:text-gray-200",onClick:()=>{u(a),n(!0),setTimeout((()=>{n(!1)}),2e3)}},r?c.createElement(c.Fragment,null,c.createElement(d,{className:"h-4 w-4 inline text-green-400"})," Copied"):"Copy"),c.createElement("span",{className:"py-1 px-2 bg-red-900 hover:bg-red-700 hover:text-gray-200",onClick:()=>{t({url:"",shouldSaveDomain:!1})}},"Erase"))))},S={chrome:"https://dospolov.com/as-icons/chrome-stable.svg",opera:"https://dospolov.com/as-icons/opera.svg",brave:"https://dospolov.com/as-icons/brave.svg",edge:"https://dospolov.com/as-icons/edge.svg",firefox:"https://dospolov.com/as-icons/firefox.svg",vivaldi:"https://dospolov.com/as-icons/vivaldi.svg",incognito:"https://dospolov.com/as-icons/incognito.svg"},k=["account","browser","channelName","domains","id","isVisible","x","y","incognito"],C=({viewer:e})=>{const{isVisible:t,account:a,browser:r,incognito:n}=e,[l,s]=m.exports.useState(!1),[i,o]=m.exports.useState((null==a?void 0:a.image)?null==a?void 0:a.image:n?S.incognito:S[null==r?void 0:r.name]);return c.createElement("div",{className:"relative"},(null==a?void 0:a.image)||!a?c.createElement("img",{className:`flex-shrink-0 h-12 w-12 ${(null==a?void 0:a.image)?"rounded-full":""} ${t?"opacity-100":"opacity-40"}`,src:i,alt:"",style:{filter:t?"none":"grayscale(80%)"},onError:()=>{s(!0),o(S[null==r?void 0:r.name]),console.error(`image loading failed: ${i}`)}}):c.createElement("span",{className:"inline-flex items-center justify-center h-12 w-12 rounded-full bg-white "+(t?"opacity-100":"opacity-40")},c.createElement("span",{className:"text-lg font-medium leading-none text-gray-800"},(null==a?void 0:a.title[0])||(null==r?void 0:r.title[0]))),l||(a||n)&&c.createElement("img",{className:"h-5 w-5 absolute -bottom-0.5 -right-0.5",src:S[null==r?void 0:r.name],alt:"",style:{filter:t?"none":"grayscale(80%)"}}))},z=({isVisible:e})=>c.createElement("div",{className:"drag-dots flex-shrink-0"},c.createElement("div",{className:"w-6 h-8 cursor-move inline-flex items-center justify-center "+(e?"text-gray-300 hover:text-gray-200":"text-gray-600 hover:text-gray-500")},c.createElement("svg",{className:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},c.createElement("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})))),L=({isVisible:e,viewerId:t,state:a,storeState:r})=>{const{grid:n}=a;return c.createElement("div",{className:"flex-shrink-0 "},c.createElement("div",{className:"w-8 h-8 inline-flex items-center justify-center "+(e?"text-gray-300 hover:text-gray-200":"text-gray-600 hover:text-gray-500"),onClick:()=>r({grid:n.map((a=>a.id===t?o(i({},a),{isVisible:!e}):a))})},c.createElement("svg",{className:"h-6 w-6",viewBox:"0 0 1024 1024",fill:"currentColor"},c.createElement("path",{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}))))},I=({viewer:e,dragEnabled:t,linearIndex:a,openUrlInViewer:r,state:n,storeState:l})=>{const{isVisible:s,account:o,browser:m,incognito:d,channelName:u}=e,{isOnline:g}=p();return c.createElement("div",{className:"flex relative px-2 py-2 shadow-sm items-center hover:shadow-lg "+(s?"bg-gray-700 hover:bg-gray-600":"bg-gray-800 hover:bg-gray-700"),onClick:()=>!t&&r(e)},-1!==a&&a<9&&c.createElement("div",{className:"absolute left-0.5 top-0 text-xs text-gray-"+(s?"500":"700")},a+1),g&&c.createElement(C,i({},{viewer:e})),c.createElement("div",{className:"flex-1 min-w-0 pl-2"},c.createElement("div",{className:""},c.createElement("p",{className:"text-sm font-medium text-gray-300 truncate"},(null==o?void 0:o.title)||(null==d?void 0:d.title)||(null==m?void 0:m.title),!((null==o?void 0:o.title)||(null==d?void 0:d.title))&&"stable"!==u&&`: ${u}`),c.createElement("p",{className:"text-sm text-gray-500 truncate"},(null==o?void 0:o.title)||(null==d?void 0:d.title)?null==m?void 0:m.title:"",((null==o?void 0:o.title)||(null==d?void 0:d.title))&&"stable"!==u&&`: ${u}`))),t&&c.createElement(c.Fragment,null,c.createElement(L,i({},{isVisible:s,viewerId:e.id,state:n,storeState:l})),c.createElement(z,i({},{isVisible:s}))))},V=(e=(e=>{}),t=(()=>{}))=>{const[a,r]=m.exports.useState(!1);return m.exports.useEffect((()=>{const a=t=>{e(t)&&r(!0)},n=a=>{e(a)&&(r(!1),t(a))};return window.addEventListener("keydown",a),window.addEventListener("keyup",n),()=>{window.removeEventListener("keydown",a),window.removeEventListener("keyup",n)}})),a},H=e=>e.map((e=>o(i({},e),{weight:e.x+3*e.y}))).sort(((e,t)=>e.weight-t.weight)).map((e=>{const t=e,{weight:a}=t;return((e,t)=>{var a={};for(var s in e)n.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&r)for(var s of r(e))t.indexOf(s)<0&&l.call(e,s)&&(a[s]=e[s]);return a})(t,["weight"])})),O=e=>e.map(((e,t,a)=>o(i({},e),{x:t%3,y:Math.floor(t/3)}))),D=(e,t)=>{const a=H(e),r=O(a),n=((e,t,a)=>{let r=[...e];const n=(e,t,a)=>[...e.slice(0,a),t,...e.slice(a)];if(t.length)for(let l=0;l<t.length;l++){const e=t[l].originalIndex,s=a[e];r=0===e?[s,...r]:[...n(r,s,e)]}return r})(((e,t)=>e.map((e=>i(i({},t.find((t=>t.id===e.i))),e))))(r,t),((e,t)=>e.filter((e=>!t.some((t=>t.i===e.id)))).map((t=>({id:t.id,originalIndex:e.findIndex((e=>e.id===t.id))}))))(t,r),t),l=O(n),s=H(l);return s.map((e=>Object.keys(e).filter((e=>k.includes(e))).reduce(((t,a)=>o(i({},t),{[a]:e[a]})),{})))},M=({openUrlInViewer:e,state:t,storeState:a})=>{const[r,n]=m.exports.useState(!0),{grid:l,showHidden:s,dragEnabled:d}=t,u=((e,t,a)=>{const r=t||a?e:e.filter((e=>e.isVisible));return O(r)})(l.map((e=>o(i({},e),{i:e.id,h:1,w:1}))),d,s);return V((({code:e,metaKey:t})=>!d&&e.includes("Digit")&&!t),(t=>{const a=+t.key-1;e(u[a])})),c.createElement(g,{className:"",isResizable:!1,layout:u,cols:3,rowHeight:66,width:655,containerPadding:[30,0],isDraggable:!0,draggableHandle:".drag-dots",onLayoutChange:e=>{const t=(e=>{let t=!1;for(let a=0;a<e.length-1;a++){const r=e[a],n={x:2===r.x?0:r.x+1,y:2===r.x?r.y+1:r.y},l=e[a+1];n.x===l.x&&n.y===l.y||(t=!0)}return t})(e);r&&!t?n(!1):(a({grid:D(e,l)}),n(!0))}},u.map(((r,n)=>{const s=d?(o=r,l.filter((e=>e.isActive)).findIndex((e=>o.i===e.i))):n;var o;return c.createElement("div",{key:r.id,title:`Hotkey: "${s+1}"`},c.createElement(I,i({},{viewer:r,dragEnabled:d,openUrlInViewer:e,linearIndex:s,state:t,storeState:a})))})))},j=({state:e,storeState:t})=>{const{showHidden:a}=e;return c.createElement("div",{className:(a?"bg-blue-600":"bg-gray-600")+" relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full transition-colors ease-in-out duration-200","aria-pressed":a?"true":"false",title:'Show hidden accounts (hotkey: "d")',onClick:()=>{a||t({dragEnabled:!1}),t({showHidden:!a})}},c.createElement("span",{className:(a?"translate-x-5":"translate-x-0")+" pointer-events-none relative inline-block h-5 w-5 rounded-full bg-gray-800 shadow transform ring-0 transition ease-in-out duration-200"},c.createElement("span",{className:(a?"opacity-0 ease-out duration-100":"opacity-100 ease-in duration-200")+" absolute inset-0 h-full w-full flex items-center justify-center transition-opacity","aria-hidden":"true"},c.createElement("svg",{className:"bg-gray-800 h-3 w-3 text-gray-300",viewBox:"0 0 1024 1024"},c.createElement("path",{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z",fill:"currentColor"}),c.createElement("path",{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z",fill:"currentColor"}))),c.createElement("span",{className:(a?"opacity-100 ease-in duration-200":"opacity-0 ease-out duration-100")+" absolute inset-0 h-full w-full flex items-center justify-center transition-opacity","aria-hidden":"true"},c.createElement("svg",{className:"bg-gray-800 h-3 w-3 text-gray-300",viewBox:"0 0 1024 1024"},c.createElement("path",{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z",fill:"currentColor"})))))},F=({state:e,storeState:t})=>{const{dragEnabled:a}=e;return c.createElement("div",{className:(a?"bg-blue-600":"bg-gray-600")+" relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full  transition-colors ease-in-out duration-200","aria-pressed":a?"true":"false",title:"Reorder accounts",onClick:()=>{a||t({showHidden:!1}),t({dragEnabled:!a})}},c.createElement("span",{className:(a?"translate-x-5":"translate-x-0")+" pointer-events-none relative inline-block h-5 w-5 rounded-full bg-gray-800 shadow transform ring-0 transition ease-in-out duration-200"},c.createElement("span",{className:(a?"opacity-0 ease-out duration-100":"opacity-100 ease-in duration-200")+" absolute inset-0 h-full w-full flex items-center justify-center transition-opacity","aria-hidden":"true"},c.createElement("svg",{className:"bg-gray-800 h-3 w-3 text-gray-300",viewBox:"0 0 1024 1024"},c.createElement("path",{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z",fill:"currentColor"}))),c.createElement("span",{className:(a?"opacity-100 ease-in duration-200":"opacity-0 ease-out duration-100")+" absolute inset-0 h-full w-full flex items-center justify-center transition-opacity","aria-hidden":"true"},c.createElement("svg",{className:"bg-gray-800 h-3 w-3 text-gray-300",viewBox:"0 0 1024 1024"},c.createElement("path",{d:"M909.3 506.3L781.7 405.6a7.23 7.23 0 0 0-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7a7.14 7.14 0 0 0-11.3 0L405.6 242.3a7.23 7.23 0 0 0 5.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8a7.3 7.3 0 0 0 .1-11.4z",fill:"currentColor"})))))},q=({state:e,storeState:t})=>c.createElement("div",{className:"flex leading-4 px-8 py-3"},c.createElement("div",{className:"space-x-3"},c.createElement(j,i({},{state:e,storeState:t})),c.createElement(F,i({},{state:e,storeState:t}))),c.createElement("div",{className:"ml-auto -mt-0.5 px-2 inline-flex items-center py-1 border border-transparent text-xs font-medium text-gray-300 bg-gray-600 hover:bg-gray-500 cursor-default",onClick:()=>t({currentPage:"/settings"})},"Settings")),A=e=>{let t;return t=e.indexOf("//")>-1?e.split("/")[2]:e.split("/")[0],t=t.split("?")[0],t.replace("www.","")},B=({state:e,storeState:t})=>{const{url:a,grid:r,showHidden:n,shouldSaveDomain:l}=e;V((({code:e})=>"KeyD"===e),(()=>{n||t({dragEnabled:!1}),t({showHidden:!n})})),V((({code:e})=>"KeyA"===e),(()=>t({shouldSaveDomain:!l})));return c.createElement("div",{className:"h-[400px]"},c.createElement(N,i({},{state:e,storeState:t})),c.createElement("div",{className:"overflow-y-auto overflow-x-hidden pb-5",style:{height:a?242:270}},c.createElement(M,i({},{openUrlInViewer:e=>{l&&t({shouldSaveDomain:!1,grid:r.map((t=>t.id===e.id?o(i({},t),{domains:[...t.domains,A(a)]}):t))}),window.sendEvent("requestOpenUrl",e)},state:e,storeState:t}))),a&&c.createElement("div",{className:"relative flex items-start px-8 pt-2 pb-0 text-gray-300",style:{height:28,boxShadow:a?"#1c2531 -12px -5px 5px 0px":""},title:'Hotkey: "a"'},c.createElement("div",{className:"flex items-center h-5"},c.createElement("input",{id:"saveDomain",name:"saveDomain",type:"checkbox",checked:l,className:"form-checkbox",onChange:e=>t({shouldSaveDomain:e.target.checked})})),c.createElement("div",{className:"ml-2 text-sm"},c.createElement("label",{htmlFor:"saveDomain",className:""},"Always open current domain with selected Account / Browser"))),c.createElement("div",{className:"relative z-50",style:{boxShadow:a?"":"#1c2531 -12px -5px 10px 0px"}},c.createElement(q,i({},{state:e,storeState:t}))))},R=()=>c.createElement("div",{className:"text-xl px-8 pt-2 pb-3 text-gray-300 h-[52px]"},c.createElement("h2",null,"Settings")),P=({viewer:e,state:t,storeState:a})=>{const{grid:r}=t,{id:n,browser:l,channelName:s,account:u,incognito:p,domains:g}=e,h=(null==u?void 0:u.title)||(null==p?void 0:p.title),[y,E]=m.exports.useState(""),f=(e,t)=>a({grid:r.map((a=>a.id===e?o(i({},a),{domains:t}):a))});return c.createElement("div",{key:n,className:"bg-gray-900 p-3 mb-3"},c.createElement("h3",{className:"mb-2"},c.createElement("img",{className:"h-5 w-5 inline-block mr-1 align-text-bottom",src:S[null==l?void 0:l.name],alt:""}),l.title,"stable"!==s&&` ${s}`,h&&`: ${h}`),c.createElement("div",{className:""},g.map((t=>c.createElement("div",{key:t,className:"inline-flex bg-gray-600 p-1 m-0.5 relative pr-6",onClick:()=>f(e.id,g.filter((e=>e!==t)))},c.createElement("div",{className:"inline-flex px-1.5 text-sm font-medium text-gray-300"},t),c.createElement("div",{className:"inset-y-0 right-0 absolute bg-gray-700 hover:bg-gray-500"},c.createElement(v,{className:"w-6 h-4 mt-1.5 "}))))),null===y?c.createElement("div",{className:"inline-flex p-1 pl-4 m-0.5 relative bg-green-800 hover:bg-green-600",onClick:()=>E("")},c.createElement("div",{className:"inset-y-0 left-0 absolute "},c.createElement(x,{className:"w-6 h-4 mt-1.5 "})),c.createElement("div",{className:"inline-flex px-1.5 text-sm text-gray-200"},"domain")):c.createElement(c.Fragment,null,c.createElement("input",{autoFocus:!0,type:"text",value:y,onChange:e=>E(e.target.value),className:"inline-flex m-0.5 p-2 w-56 h-7 bg-gray-800 text-gray-200 text-sm border-none align-bottom",placeholder:"e.g. google.com"}),c.createElement("div",{className:"inline-flex p-1 h-7 align-baseline m-0.5 relative bg-red-900 hover:bg-red-800",onClick:()=>{E("")}},c.createElement("div",{className:"inline-flex px-1.5 text-sm text-gray-200"},"Cancel")),c.createElement("div",{className:"inline-flex p-1 h-7 align-baseline pl-4 m-0.5 relative bg-blue-700 hover:bg-blue-600",onClick:()=>{y&&(f(e.id,[...g,y]),E(""))}},c.createElement("div",{className:"inset-y-0 left-0 absolute "},c.createElement(d,{className:"w-6 h-4 mt-1.5 "})),c.createElement("div",{className:"inline-flex px-1.5 text-sm text-gray-200"},"Save")))))},$=({state:e,storeState:t})=>{const{openInFirst:a,grid:r}=e;return c.createElement("div",{className:"relative pt-10"},a&&c.createElement("div",{className:"absolute inset-0 bg-gray-800 bg-opacity-80 z-10 -m-3 -mt-2"}),c.createElement("h2",{className:" text-lg mb-2 absolute top-0 z-30"},"Saved domains",a&&c.createElement(c.Fragment,null," ","(disabled in ",c.createElement("span",{className:"text-yellow-800"},"First account")," mode)"),":"),r.map((a=>c.createElement(P,o(i({},{viewer:a,state:e,storeState:t}),{key:a.id})))))},K=({storeState:e})=>c.createElement("div",{className:"flex leading-4 px-8 py-3"},c.createElement("div",{className:"ml-auto -mt-0.5 px-2 inline-flex items-center py-1 border border-transparent text-xs font-medium text-gray-300 bg-gray-600 hover:bg-gray-500 cursor-default",onClick:()=>e({currentPage:"/"})},"Home")),T=({state:e,storeState:t})=>{const{appVersion:a,openInFirst:r}=e;return c.createElement("div",{className:"h-[400px]"},c.createElement(R,null),c.createElement("div",{className:"px-8 py-2 pr-5 overflow-y-auto overflow-x-hidden text-gray-400 h-[300px]"},c.createElement("div",{className:"pb-5"},c.createElement("div",{className:"relative flex items-start"},c.createElement("div",{className:"flex items-center h-5"},c.createElement("input",{id:"openInFirst",name:"openInFirst",type:"checkbox",checked:r,className:"form-checkbox",onChange:e=>t({openInFirst:e.target.checked})})),c.createElement("div",{className:"ml-2 text-sm"},c.createElement("label",{htmlFor:"openInFirst",className:""},c.createElement("p",null,"Always open links in the"," ",c.createElement("span",{className:"text-yellow-800"},"First account")," ",c.createElement("br",null)," Show Account Surfer only when the link is clicked with CTRL+ALT+X pressed")))))," ",c.createElement($,i({},{state:e,storeState:t})),c.createElement("div",{className:"pt-5 pb-5"},c.createElement("div",{className:"px-2 inline-flex items-center py-1 border border-transparent text-xs font-medium text-gray-300 bg-gray-600 hover:bg-gray-500 cursor-default",onClick:()=>window.sendEvent("requestResetBrowserList")},"Reset Browser list")),c.createElement("div",null,c.createElement("p",null,"App version: ",a))),c.createElement(K,i({},{storeState:t})))};const U=()=>c.createElement("div",{className:"h-[400px]"},c.createElement("div",{className:"text-md px-8 pt-2 pb-3 text-gray-300 h-[52px]"},c.createElement("h2",null,"To run all functions - Account Surfer must be installed as the default browser:")),c.createElement("div",{className:"overflow-hidden h-[300px]"},c.createElement("img",{src:"/D:\\playground\\account-surfer\\account-surfer-vite-ts/src/out/assets/windows-settings.47a25756.png",alt:"Windows settings",className:"h-[290px] mx-auto"})),c.createElement("div",{className:"flex leading-4 px-8 py-3"},c.createElement("div",{className:"ml-auto -mt-0.5 px-2 inline-flex items-center py-1 border border-transparent text-xs font-medium text-gray-300 bg-blue-600 hover:bg-blue-500 cursor-default",onClick:()=>window.sendEvent("requestOpenWindowsSettings")},"Go to Windows settings")));function W(){const e=h(),[t,a]=(()=>{const[e,t]=m.exports.useState(window.initialStoreData);return m.exports.useEffect((()=>{const e=window.onStoreChange((e=>{t(e)}));return()=>{e()}}),[]),[e,e=>{window.sendEvent("requestStoreSet",e)}]})(),{currentPage:r,isDefaultBrowser:n}=t;return m.exports.useEffect((()=>{e.push(r)}),[r]),V((({code:e,ctrlKey:t,shiftKey:a})=>"KeyI"===e&&t&&a),(()=>window.sendEvent("requestOpenDevTools"))),V((({code:e})=>"Escape"===e),(()=>window.sendEvent("requestHideWindow"))),c.createElement("div",{className:"relative h-screen select-none"},c.createElement(w,null),n?c.createElement(y,null,c.createElement(E,{path:"/as-not-default"},c.createElement(U,null)),c.createElement(E,{path:"/settings"},c.createElement(T,i({},{state:t,storeState:a}))),c.createElement(E,{path:"/"},c.createElement(B,i({},{state:t,storeState:a})))):c.createElement(U,null))}console.log("@@@@@@@ RENDERER STARTED @@@@@@@"),f.render(c.createElement(b,null,c.createElement(W,null)),document.getElementById("root"));
