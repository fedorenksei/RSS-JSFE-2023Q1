(()=>{"use strict";var t={255:(t,e,n)=>{n.d(e,{Z:()=>o});var s=n(81),i=n.n(s),a=n(645),r=n.n(a)()(i());r.push([t.id,".button {  \n  height: 2em;\n  width: min-content;\n  \n  border-radius: 5px;\n  border-color: var(--button-active-color, rgba(0, 0, 0, 0.636));\n\n  font-size: 16px;\n  text-transform: capitalize;\n}\n\n.button:not(:disabled) {\n  cursor: pointer;\n}\n\n.button:not(:disabled):hover {\n  background-color: rgb(226, 226, 226);\n}\n\n.button:disabled {\n  border-color: var(--button-disabled-color, rgba(0, 0, 0, 0.121));\n}\n\n\n.select-button {\n  --button-active-color: rgb(5, 5, 108);\n}\n\n.remove-button {\n  --button-active-color: rgb(108, 5, 5);\n}\n\n.start-button {\n  text-transform: uppercase;\n  margin-left: 15px;\n  --button-active-color: rgb(17, 196, 5);\n}\n\n.stop-button {\n  text-transform: uppercase;\n  --button-active-color: rgb(223, 10, 10);\n}\n\n@keyframes button-waiting {\n  from {\n    background-color: rgb(240, 240, 240);\n  }\n  to {\n    background-color: rgb(222, 222, 222);\n  }\n}\n\n.button_waiting {\n  animation: button-waiting .7s infinite alternate;\n}\n",""]);const o=r},169:(t,e,n)=>{n.d(e,{Z:()=>o});var s=n(81),i=n.n(s),a=n(645),r=n.n(a)()(i());r.push([t.id,".pagination {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 15px;\n}\n\n.pagination__wrapper {\n  grid-column: 1 / 3;\n}\n\n.next-button {\n  justify-self: left;\n}\n\n.prev-button {\n  justify-self: right;\n}",""]);const o=r},6:(t,e,n)=>{n.d(e,{Z:()=>o});var s=n(81),i=n.n(s),a=n(645),r=n.n(a)()(i());r.push([t.id,".car {\n  display: grid;\n  grid-template-columns: repeat(5, max-content) 1fr;\n  gap: 5px;\n  padding: 10px;\n}\n\n.car__name {\n  margin-left: 15px;\n}\n\n.car_selected {\n  background-color: rgb(251, 245, 237);\n}\n\n.car__track {\n  grid-row: 2;\n  grid-column: 1 / -1;\n}\n\n.car__image {\n  height: 50px;\n}\n\n.car__track_stopped {\n  background-color: rgba(233, 183, 183, 0.658);\n}\n\n.car__track_finished{\n  background-color: rgba(183, 233, 189, 0.658);\n}\n",""]);const o=r},386:(t,e,n)=>{n.d(e,{Z:()=>o});var s=n(81),i=n.n(s),a=n(645),r=n.n(a)()(i());r.push([t.id,".form {\n  margin: 20px;\n  display: flex;\n  align-items: stretch;\n  gap: 10px;\n}\n\n.color-input {\n  height: auto;\n}\n\n.create-button {\n  --button-active-color: green;\n}\n\n.update-button {\n  --button-active-color: rgb(142, 152, 4);\n}\n",""]);const o=r},603:(t,e,n)=>{n.d(e,{Z:()=>o});var s=n(81),i=n.n(s),a=n(645),r=n.n(a)()(i());r.push([t.id,".nav {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n\n  --color-basic: white;\n  --color-hover: lightgrey;\n  --color-active-effect: rgb(111, 159, 67);\n  --color-light-green: rgb(242, 255, 222);\n  --color-inactive: rgb(222, 222, 222);\n}\n\n.nav__item {\n  padding: 0.5em;\n  display: grid;\n  place-items: center;\n  transition: 0.3s background-color;\n  background-color: var(--color-basic);\n}\n\n.nav__item:not(.nav__item_active):hover {\n  cursor: pointer;\n  background-color: var(--color-light-green);\n}\n\n.nav__item_active {\n  /* box-shadow: inset 0px 0px 3px 5px var(--color-active-effect); */\n  background-color: rgb(235, 226, 239);\n  text-decoration: underline;\n}\n",""]);const o=r},28:(t,e,n)=>{n.d(e,{Z:()=>o});var s=n(81),i=n.n(s),a=n(645),r=n.n(a)()(i());r.push([t.id,"body {\n  margin: 0;\n  font: 24px Verdana, sans-serif;\n}\n",""]);const o=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",s=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),s&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),s&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,s,i,a){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(s)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(r[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);s&&r[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,s=0;s<e.length;s++)if(e[s].identifier===t){n=s;break}return n}function s(t,s){for(var a={},r=[],o=0;o<t.length;o++){var c=t[o],l=s.base?c[0]+s.base:c[0],u=a[l]||0,h="".concat(l," ").concat(u);a[l]=u+1;var d=n(h),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var m=i(p,s);s.byIndex=o,e.splice(o,0,{identifier:h,updater:m,references:1})}r.push(h)}return r}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var a=s(t=t||[],i=i||{});return function(t){t=t||[];for(var r=0;r<a.length;r++){var o=n(a[r]);e[o].references--}for(var c=s(t,i),l=0;l<a.length;l++){var u=n(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var s=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var a=e[s]={id:s,exports:{}};return t[s](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),s=n(795),i=n.n(s),a=n(569),r=n.n(a),o=n(565),c=n.n(o),l=n(216),u=n.n(l),h=n(589),d=n.n(h),p=n(28),m={};m.styleTagTransform=d(),m.setAttributes=c(),m.insert=r().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var g=n(603),v={};v.styleTagTransform=d(),v.setAttributes=c(),v.insert=r().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),e()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;class f{constructor(){this.handlers=new Set}subscribe(t){this.handlers.add(t)}unsubscribe(t){this.handlers.delete(t)}fire(t){this.handlers.forEach((e=>{e(t)}))}}function b({tagName:t,className:e,text:n,children:s,onclick:i}){const a=document.createElement(t);return e&&(a.className=e),n&&(a.innerText=n),s&&a.append(...s),i&&a.addEventListener("click",i),a}const y="nav__item",x="nav__item_active",w=["garage","winners"],E=w[0],C=new f;var P=function(t,e,n,s){return new(n||(n=Promise))((function(i,a){function r(t){try{c(s.next(t))}catch(t){a(t)}}function o(t){try{c(s.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,o)}c((s=s.apply(t,e||[])).next())}))};const _="http://127.0.0.1:3000/";function I(t){return new URL(t,_)}function N(t,e){return new URL(`${t}/${e}`,_)}function B(t,e){const n=I("engine");return n.searchParams.set("id",t.toString()),n.searchParams.set("status",e),n}function T(t){return t.then((t=>{if(!t.ok)throw new Error("Response is not 2xx");return t.json()})).catch((t=>{console.error(t)}))}var k=n(169),A={};A.styleTagTransform=d(),A.setAttributes=c(),A.insert=r().bind(null,"head"),A.domAPI=i(),A.insertStyleElement=u(),e()(k.Z,A),k.Z&&k.Z.locals&&k.Z.locals;var M=n(255),Z={};function S(t){return class extends t{disable(){this.element.setAttribute("disabled","")}enable(){this.element.removeAttribute("disabled"),this.unsetWaiting&&this.unsetWaiting()}}}function L(t){return class extends t{get value(){return this.element.value}set value(t){this.element.value=t}setDefaultValue(){this.value=this.element.defaultValue}}}Z.styleTagTransform=d(),Z.setAttributes=c(),Z.insert=r().bind(null,"head"),Z.domAPI=i(),Z.insertStyleElement=u(),e()(M.Z,Z),M.Z&&M.Z.locals&&M.Z.locals;const z=S(class{constructor(t){this.element=b(Object.assign(t,{tagName:"button"})),this.element.type="button",this.element.classList.add("button")}setWaiting(){this.element.classList.add("button_waiting")}unsetWaiting(){this.element.classList.remove("button_waiting")}}),F={pagination:{basic:"pagination"},page:{basic:"pagination__page"},buttons:{next:"next-button",previous:"prev-button"},wrapper:"pagination__wrapper"};class W{constructor(t){var e;this.itemsOnPage=t,this.navEvent=new f,this.navEvent.subscribe((t=>{this.navigate(t)})),this.buttons={next:O("next",(()=>{this.navEvent.fire("next")})),previous:O("previous",(()=>{this.navEvent.fire("previous")}))},this.buttons.previous.disable(),this.buttons.next.disable(),this.pageWrapper=b({tagName:"div",className:F.wrapper}),this.element=(e=[this.pageWrapper,this.buttons.previous.element,this.buttons.next.element],b({tagName:"div",className:F.pagination.basic,children:e})),this.pageElements=new Map,this.itemElementsByPage=new Map,this.pageByItemElement=new Map}addPage(t){const e=(n=t,b({tagName:"div",className:F.page.basic,children:n}));var n;const s=this.pageCount+1;this.pageElements.set(s,e),this.itemElementsByPage.set(s,t),t.forEach((t=>{this.pageByItemElement.set(t,s)})),1===this.pageCount?this.setPage(1):this.updateButtons()}addItem(t){const e=this.itemElementsByPage.get(this.pageCount),n=e&&e.length>=this.itemsOnPage;0===this.pageCount||n?this.addPage([t]):this.addElementOnPage(t,this.pageCount)}removeItem(t){const e=this.pageByItemElement.get(t);if("number"!=typeof e)return;const n=this.itemElementsByPage.get(e);n&&this.pageElements.get(e)&&((()=>{const t=e+1,n=this.itemElementsByPage.get(t);if(!n)return;const s=n.shift();s&&(this.addElementOnPage(s,e),this.deletePage(t)&&this.updateButtons())})(),t.remove(),n.splice(n.indexOf(t),1),this.pageByItemElement.delete(t),this.deletePage(e)&&(1!==this.currentPage&&this.setPage(e-1),this.updateButtons()))}addElementOnPage(t,e){const n=this.pageElements.get(e);if(!n)return;const s=this.itemElementsByPage.get(e);s&&(s.push(t),this.pageByItemElement.set(t,e),n.append(t))}deletePage(t){const e=this.pageElements.get(t);if(!e)return!1;const n=this.itemElementsByPage.get(t);return!!n&&!n.length&&(e.remove(),this.pageElements.delete(t),this.itemElementsByPage.delete(t),!0)}navigate(t){if(!this.currentPage)return;const e=this.currentPage+("next"===t?1:-1);e<=0||e>this.pageCount||this.setPage(e)}updateButtons(){if("number"!=typeof this.currentPage)return this.buttons.previous.disable(),void this.buttons.next.disable();1===this.currentPage&&this.buttons.previous.disable(),this.currentPage>1&&this.buttons.previous.enable(),this.currentPage===this.pageCount&&this.buttons.next.disable(),this.currentPage<this.pageCount&&this.buttons.next.enable()}setPage(t){const e=this.getPage(t);e&&(this.pageWrapper.replaceChildren(e),this.currentPage=t,this.updateButtons())}get pageCount(){return this.pageElements.size}getPage(t){return this.pageElements.get(t)}}function O(t,e){return new z({text:t,className:F.buttons[t],onclick:e})}var j=n(6),H={};H.styleTagTransform=d(),H.setAttributes=c(),H.insert=r().bind(null,"head"),H.domAPI=i(),H.insertStyleElement=u(),e()(j.Z,H),j.Z&&j.Z.locals&&j.Z.locals;class V{constructor(t){this.element=b(t)}setText(t){this.element.innerText=t}}var U=function(t,e,n,s){return new(n||(n=Promise))((function(i,a){function r(t){try{c(s.next(t))}catch(t){a(t)}}function o(t){try{c(s.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,o)}c((s=s.apply(t,e||[])).next())}))};const D="car__track",R="car__track_stopped",q="car__track_finished";class J{constructor(t){this.carProps=t,({element:this.element,carImage:this.carImage}=function(){const t=b({tagName:"div",className:D});t.innerHTML='\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 20 100 60" enable-background="new 0 0 100 100" xml:space="preserve"><g><path fill="none" d="M78.1,56.1c-1.6,0-2.9,1.2-2.9,2.8c0,1.6,1.2,2.9,2.8,2.9c1.6,0,2.9-1.2,2.9-2.8C81,57.4,79.7,56.1,78.1,56.1z    M78.1,60.3c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3C79.3,59.7,78.8,60.3,78.1,60.3z"/><path fill="none" d="M19.6,56.1c-1.6,0-2.9,1.2-2.9,2.8c0,1.6,1.2,2.9,2.8,2.9c1.6,0,2.9-1.2,2.9-2.8   C22.5,57.4,21.2,56.1,19.6,56.1z M19.6,60.3c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3   C20.8,59.7,20.3,60.3,19.6,60.3z"/><path fill="none" d="M8.4,46.8c-1.4,1.9-1.8,3-1.8,3.4C9.8,51.1,14.2,46.8,8.4,46.8z"/><path fill="none" d="M39.8,37.8v6.4H67C67,44.3,55,35.6,39.8,37.8z"/><path fill="none" d="M35.8,44.3v-5.7c-10.6,2.1-18.2,5.7-18.2,5.7H35.8z"/><path fill="none" d="M91.6,49.7h-2.4c-0.7,0-1.3,0.4-1.3,0.9l0,1c0,0.5,0.6,0.9,1.3,0.9h2.4c0.7,0,1.3-0.4,1.3-0.9v-1   C92.8,50.1,92.2,49.7,91.6,49.7z"/><path d="M94,50c0,0-3.2-7.3-23.8-7c0,0-20.4-21.1-61.8,2.6l-0.1,0.1c-2.2,2.7-2.5,4.1-2.5,4.6c0,0,0,0,0,0   c-0.7,3.5-1.4,8.1,0.9,10.4c5.1,0,5.6,0,5.6,0c-0.1-0.6-0.2-1.1-0.2-1.7c0-4.3,3.4-7.8,7.6-7.8c4.2,0,7.6,3.5,7.6,7.8   c0,0.6-0.1,1.2-0.2,1.7h1.2h37h5c-0.1-0.6-0.2-1.1-0.2-1.7c0-4.3,3.4-7.8,7.6-7.8c5.7,0,9,6,8.4,9.5l6.9-0.7C96.6,52.4,94,50,94,50   z M6.6,50.2c0.1-0.4,0.4-1.5,1.8-3.4C14.2,46.8,9.8,51.1,6.6,50.2z M35.8,44.3H17.6c0,0,7.5-3.6,18.2-5.7V44.3z M39.8,44.3v-6.4   C55,35.6,67,44.3,67,44.3H39.8z M92.8,51.6c0,0.5-0.6,0.9-1.3,0.9h-2.4c-0.7,0-1.3-0.4-1.3-0.9l0-1c0-0.5,0.6-0.9,1.3-0.9h2.4   c0.7,0,1.3,0.4,1.3,0.9V51.6z"/><path fill="#000000" d="M19.7,52.4c-3.7-0.1-6.7,2.9-6.7,6.5c-0.1,3.7,2.9,6.7,6.5,6.7c3.7,0.1,6.7-2.9,6.7-6.5   C26.2,55.4,23.3,52.4,19.7,52.4z M19.5,61.9c-1.6,0-2.9-1.3-2.8-2.9c0-1.6,1.3-2.9,2.9-2.8c1.6,0,2.9,1.3,2.8,2.9   C22.4,60.6,21.1,61.9,19.5,61.9z"/><circle fill="#000000" cx="19.6" cy="59" r="1.3"/><path fill="#000000" d="M78.2,52.4c-3.7-0.1-6.7,2.9-6.7,6.5c-0.1,3.7,2.9,6.7,6.5,6.7c3.7,0.1,6.7-2.9,6.7-6.5   C84.7,55.4,81.8,52.4,78.2,52.4z M78,61.9c-1.6,0-2.9-1.3-2.8-2.9c0-1.6,1.3-2.9,2.9-2.8c1.6,0,2.9,1.3,2.8,2.9   C80.9,60.6,79.6,61.9,78,61.9z"/><circle fill="#000000" cx="78.1" cy="59" r="1.3"/></g></svg>\n';const e=t.children[0];return e.classList.add("car__image"),{element:t,carImage:e}}()),this.setColor()}setColor(t){t||(t=this.carProps.color),this.carImage.style.fill=t}stop(){return U(this,void 0,void 0,(function*(){this.pauseAnimation=!0,this.setWaiting(),this.reset();const t=yield function(t){return P(this,void 0,void 0,(function*(){return fetch(B(t,"stopped"),{method:"PATCH"})}))}(this.carProps.id);t.ok||console.log("test",t),this.unsetWaiting(),this.positionStart()}))}startEngine(){return U(this,void 0,void 0,(function*(){this.reset(),this.positionStart(),this.setWaiting();const t=yield(e=this.carProps.id,T(fetch(B(e,"started"),{method:"PATCH"})));var e;if(t)return t}))}drive(t){return U(this,void 0,void 0,(function*(){this.abortAnimation=!1,this.pauseAnimation=!1,this.unsetWaiting(),this.animate(t);const e=yield function(t){return P(this,void 0,void 0,(function*(){return yield fetch(B(t,"drive"),{method:"PATCH"})}))}(this.carProps.id);e.ok?this.abortAnimation||this.pauseAnimation||this.setFinished():(500!==e.status&&console.error(e),this.abortAnimation||this.pauseAnimation||this.setStopped(),this.pauseAnimation=!0)}))}animate({distance:t,velocity:e}){const n=t/e,s=performance.now(),i=s+n;let a=this.element.clientWidth,r=0;const o=t=>{if(this.abortAnimation)return;this.pauseAnimation||(r=t>=i?1:(t-s)/n),a=this.element.clientWidth||a;const e=r*(a-100);this.carImage.style.transform=`translate(${e}px)`,requestAnimationFrame(o)};return requestAnimationFrame(o)}setStopped(){this.element.classList.add(R)}setFinished(){this.element.classList.add(q)}setWaiting(){this.setColor("#d7d7d7")}unsetWaiting(){this.setColor()}positionStart(){this.carImage.style.transform="",this.abortAnimation=!0}reset(){this.element.classList.remove(R),this.element.classList.remove(q)}}var $=function(t,e,n,s){return new(n||(n=Promise))((function(i,a){function r(t){try{c(s.next(t))}catch(t){a(t)}}function o(t){try{c(s.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,o)}c((s=s.apply(t,e||[])).next())}))};const G={element:"car",carName:"car__name",buttons:{select:"select-button",remove:"remove-button",start:"start-button",stop:"stop-button"}};class K{constructor(t){var e;this.props=t,this.process={},this.selectButton=X.call(this,"select"),this.removeButton=X.call(this,"remove"),this.startButton=X.call(this,"start"),this.stopButton=X.call(this,"stop"),this.stopButton.disable(),this.nameElement=(e=t.name,new V({tagName:"span",className:G.carName,text:e})),this.track=new J(t),this.element=Q.call(this),this.events={select:new f,remove:new f,start:new f,stop:new f},this.subscribeToEvent("remove",(()=>{this.delete()})),this.subscribeToEvent("select",(()=>{this.setSelected()})),this.subscribeToEvent("start",(()=>$(this,void 0,void 0,(function*(){this.startButton.disable(),this.process.driving=!0;const t=yield this.track.startEngine();t&&(this.stopButton.enable(),yield this.track.drive(t)),this.process.stopping||this.startButton.enable(),this.process.driving=!1})))),this.subscribeToEvent("stop",(()=>$(this,void 0,void 0,(function*(){this.startButton.disable(),this.stopButton.disable(),this.process.stopping=!0,yield this.track.stop(),this.process.driving?this.startButton.setWaiting():this.startButton.enable(),this.process.stopping=!1}))))}fireEvent(t){this.events[t].fire(this.props.id)}subscribeToEvent(t,e){this.events[t].subscribe(e)}delete(){var t;t=this.props.id,fetch(N("garage",t),{method:"DELETE"})}setSelected(){this.element.classList.add("car_selected"),this.selectButton.disable()}unsetSelected(){this.element.classList.remove("car_selected"),this.selectButton.enable()}update(t){(function(t,e){return T(fetch(N("garage",t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))})(this.props.id,t).then((()=>{t.name&&this.nameElement.setText(t.name),this.track.setColor(t.color),({color:this.props.color,name:this.props.name}=t)}))}}function Q(){return b({tagName:"div",className:G.element,children:[this.selectButton.element,this.removeButton.element,this.startButton.element,this.stopButton.element,this.nameElement.element,this.track.element]})}function X(t){return new z({className:G.buttons[t],text:t,onclick:()=>{this.fireEvent(t)}})}var Y=n(386),tt={};tt.styleTagTransform=d(),tt.setAttributes=c(),tt.insert=r().bind(null,"head"),tt.domAPI=i(),tt.insertStyleElement=u(),e()(Y.Z,tt),Y.Z&&Y.Z.locals&&Y.Z.locals;const et=L(S(class{constructor(t){const e={tagName:"input"};t&&(e.className=t),this.element=b(e),this.element.type="text"}})),nt=L(S(class{constructor(t){const e={tagName:"input"};t&&(e.className=t),this.element=b(e),this.element.type="color",this.element.defaultValue="#000000"}})),st={element:"form",disabled:"form_inactive",buttons:{create:"create-button",update:"update-button"},textInput:"text-input",colorInput:"color-input"};class it{constructor(t){this.textInput=new et(st.textInput),this.colorInput=new nt(st.colorInput),this.submitButton=rt.call(this,{actionName:t,textInput:this.textInput.element,colorInput:this.colorInput.element}),this.element=at.call(this),this.submission=new f}clear(){this.textInput.setDefaultValue(),this.colorInput.setDefaultValue()}enable(){this.element.classList.remove("form_inactive"),[this.textInput,this.colorInput,this.submitButton].forEach((t=>{t.enable()}))}disable(){this.element.classList.add("form_inactive"),[this.textInput,this.colorInput,this.submitButton].forEach((t=>{t.disable()}))}}function at(){return b({tagName:"form",className:st.element,children:[this.textInput.element,this.colorInput.element,this.submitButton.element]})}function rt({actionName:t,textInput:e,colorInput:n}){return new z({className:st.buttons[t],text:t,onclick:()=>{this.submission.fire({name:e.value,color:n.value}),this.clear()}})}const ot=new class{constructor(){this.cars=new Map,this.pagination=new W(7),this.element=b({tagName:"section",className:"garage",children:[this.pagination.element]}),this.createForm=new it("create"),this.updateForm=new it("update"),this.updateForm.disable(),this.createForm.submission.subscribe((t=>{this.createCar(t)})),this.updateForm.submission.subscribe((t=>{if(this.updateForm.disable(),!this.selectedCar)return;const e=this.getCar(this.selectedCar);e&&(e.update(t),e.unsetSelected())})),this.element.prepend(this.createForm.element,this.updateForm.element),this.init()}init(){return t=this,e=void 0,s=function*(){const t=yield T(fetch(I("garage"))).then((t=>{if(!Array.isArray(t))throw new Error("getCars response is not an array");return t}));if(t)for(let e=0;e<t.length;e+=7){const n=t.slice(e,e+7).map((t=>this.addCar(t)));this.pagination.addPage(n.map((t=>t.element)))}},new((n=void 0)||(n=Promise))((function(i,a){function r(t){try{c(s.next(t))}catch(t){a(t)}}function o(t){try{c(s.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,o)}c((s=s.apply(t,e||[])).next())}));var t,e,n,s}addCar(t){const e=new K(t);return this.cars.set(t.id,e),e.events.select.subscribe((t=>{if(this.selectedCar){const t=this.getCar(this.selectedCar);null==t||t.unsetSelected()}this.selectedCar=t,this.updateForm.enable()})),e.events.remove.subscribe((t=>{this.pagination.removeItem(e.element),this.selectedCar===t&&(this.selectedCar=null,this.updateForm.clear(),this.updateForm.disable())})),e}createCar(t){(function(t){return T(fetch(I("garage"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}))})(t).then((t=>{this.pagination.addItem(this.addCar(t).element)}))}getCar(t){return this.cars.get(t)}},ct=new class{constructor(){this.element=b({tagName:"section",className:"winners",text:"Winners"})}},lt={garage:ot.element,winners:ct.element};let ut;const ht=new class{constructor(){this.items={},w.forEach((t=>{var e;this.items[t]=b({tagName:"div",className:y,text:(e=t)[0].toUpperCase()+e.slice(1).toLowerCase(),onclick:()=>{C.fire(e)}})})),this.activeItem=this.items[E],this.element=b({tagName:"div",className:"nav",children:Object.values(this.items)}),C.subscribe((t=>{this.activeItem.classList.remove(x),this.activeItem=this.items[t],this.activeItem.classList.add(x)}))}init(){C.fire(E)}subscribe(t){C.subscribe(t)}};document.body.prepend(ht.element),ht.subscribe((t=>{if(t===ut)return;ut&&lt[ut].remove();const e=lt[t];document.body.append(e),ut=t})),ht.init()})()})();