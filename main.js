(()=>{"use strict";var n={183:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,".home-content,\n.contact-content {\n    display: grid;\n    justify-items: center;\n\n    & h2 {\n        align-self: center;\n        font-size: 2rem;\n        user-select: none;\n    }\n\n    & h3 {\n        font-size: 1.5rem;\n        margin: 0;\n        margin-top: 24px;\n    }\n\n    & p {\n        font-size: 1.2rem;\n        text-align: center;\n\n        &+p{\n            margin-top: 0;\n        }\n    }\n\n    & img {\n        width: 500px;\n        border-radius: 10px;\n        user-select: none;\n    }\n}\n\n.menu-content {\n    display: grid;\n\n    & h2 {\n        justify-self: center;\n        align-self: center;\n        font-size: 2rem;\n        user-select: none;\n    }\n}\n\n.menu-category {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(225px,1fr));\n    column-gap: 20px;\n\n    overflow-x: auto;\n\n    & h3 {\n        grid-column: 1/span end;\n        font-size: 1.5rem;\n        margin: 12px 0;\n    }\n}\n\n.menu-category+.menu-category{\n    margin-top: 10px;\n}\n\n.menu-category-item {\n    overflow: hidden;\n\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    border-radius: 10px;\n\n    display: flex;\n    flex-direction: column;\n    width: 225px;\n\n    & img {\n        width: 100%;\n        height: 150px;\n        object-fit: cover;\n        user-select: none;\n    }\n\n    & p {\n        margin: 5px 0;\n        text-align: center;\n    }\n}",""]);const c=i},784:(n,e,t)=>{t.d(e,{A:()=>u});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),d=t.n(c),s=new URL(t(502),t.b),p=i()(o()),l=d()(s);p.push([n.id,`* {\n    box-sizing: border-box;\n}\n\n/* reset */\nbody,\nh1,\nh2 {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Quicksand;\n    display: grid;\n    grid-template-rows: 100px 1fr;\n    background-color: black;\n}\n\nheader {\n    display: grid;\n    grid-template-columns: 200px 1fr minmax(100px, 200px);\n    align-items: center;\n    user-select: none;\n\n    padding: 0 25px;\n\n    & h1 {\n        font-size: 3rem;\n    }\n\n    color: white;\n    position: relative;\n}\n\nheader::before {\n    content: "";\n    background: url(${l}) no-repeat center;\n    background-size: cover;\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    background-color: white;\n    opacity: 0.4;\n}\n\n.nav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.nav-button {\n    display: flex;\n    align-items: center;\n\n    padding: 5px;\n    border-radius: 5px;\n    background-color: transparent;\n    border: none;\n\n    cursor: pointer;\n    position: relative;\n    transition: all 0.25s;\n\n    & div {\n        font-weight: bold;\n        font-size: 1.5rem;\n        font-family: Quicksand;\n\n        color: white;\n    }\n\n    &+.nav-button {\n        margin-left: 30px;\n    }\n\n    &:hover {\n        background-color: rgba(255, 255, 255, 0.5);\n        transform: translateY(-5px);\n    }\n}\n\n.selected {    \n    &::after {\n        content: '';\n        position: absolute;\n        left: 0;\n        bottom: -5px;\n        right: 0;\n        height: 3px;\n        background-color: white;\n    }\n}\n\n.icon {\n    width: 30px;\n    height: 30px;\n    margin-right: 5px;\n}\n\n.github {\n    justify-self: right;\n\n    & img {\n        width: 50px;\n    }\n}\n\n#content {\n    margin: 50px 0;\n    width: 75%;\n    min-width: 320px;\n    justify-self: center;\n\n    color: white;\n    border: 1px solid white;\n    border-radius: 10px;\n    padding: 20px;\n}\n\nfooter {\n    color: white;\n    text-align: center;\n    background-color: rgba(255, 255, 255, 0.1);\n    & p {\n        margin: 5px 0;\n    }\n    & a {\n        color: white;\n    }\n}`,""]);const u=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var u=t(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),s=0;s<a.length;s++){var p=t(a[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},502:(n,e,t)=>{n.exports=t.p+"ba9be54442de021e455f.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),d=t.n(c),s=t(56),p=t.n(s),l=t(540),u=t.n(l),m=t(113),f=t.n(m),h=t(784),g={};g.styleTagTransform=f(),g.setAttributes=p(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),o()(h.A,g),h.A&&h.A.locals&&h.A.locals;var b=t(183),v={};v.styleTagTransform=f(),v.setAttributes=p(),v.insert=d().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),o()(b.A,v),b.A&&b.A.locals&&b.A.locals;const y=t.p+"163fa761d445708fd9b8.jpg";function x(n){const e=document.createElement("p");return e.textContent=n,e}const C=t.p+"66624e17a297cc90e0e0.jpg",w=t.p+"9a95f5e7aaf3d644e041.jpg",E=t.p+"30cbe515bb7342d4fdda.jpg",S=t.p+"dc9761ed5f761ce8dbfd.jpg",j=t.p+"53b401980e6ad40bad88.jpg",k=t.p+"a156d5a18b46c32b038b.jpg",A=t.p+"a6d7a83177e29c8bf95f.jpg",T=t.p+"44c972035117541ae555.jpg",L=t.p+"2b523c2d7b73385c639e.jpg",M=t.p+"c1348f93abe5f78a03f9.jpg",P=t.p+"06f931570906eecae056.jpg",q=t.p+"64b085859dfd79435dd0.jpg",z=t.p+"abf6cbf5c3f045ba62c6.png",D=t.p+"f82df05d458576fdc462.jpg";function I(n){const e=document.createElement("h3");return e.textContent=n,e}function N(n,e){const t=document.createElement("div");t.classList.add("menu-category-item");const r=document.createElement("img");r.src=n,r.alt=e;const o=document.createElement("p");return o.textContent=e,t.appendChild(r),t.appendChild(o),t}function H(n){const e=document.createElement("h3");return e.textContent=n,e}function R(n){const e=document.createElement("p");return e.textContent=n,e}function O(n){document.querySelectorAll(".selected").forEach((n=>{n!==this&&n.classList.remove("selected")})),n.classList.add("selected")}!function(){const n=document.querySelector("#home"),e=document.querySelector("#menu"),t=document.querySelector("#contact"),r=document.querySelector("#github");n.addEventListener("click",(()=>{O(n),function(){const n=document.querySelector("#content");n.textContent="",n.appendChild(function(){const n=document.createElement("div");n.classList.add("home-content");const e=document.createElement("h2");e.innerHTML="&#127775;Tasty's Delicious Kitchen&#127775;";const t=x("At Tasty's, we believe that food is more than just a meal - it's an experience, a memory, and a celebration."),r=document.createElement("img");r.src=y,r.alt="Restaurant";const o=x("Nestled in the heart of Delhi, our restaurant is your destination for exceptional flavors, warm hospitality, and a cozy ambiance.");return n.appendChild(e),n.appendChild(t),n.appendChild(r),n.appendChild(o),n}())}()})),e.addEventListener("click",(()=>{O(e),function(){const n=document.querySelector("#content");n.textContent="",n.appendChild(function(){const n=document.createElement("div");n.classList.add("menu-content");const e=document.createElement("h2");e.innerHTML="&#127775;Our Menu&#127775;";const t=document.createElement("div");t.classList.add("menu-category"),t.appendChild(I("Appetizers")),t.appendChild(N(C,"Paneer Tikka")),t.appendChild(N(w,"Vegetable Spring Rolls"));const r=document.createElement("div");r.classList.add("menu-category"),r.appendChild(I("Soups & Salads")),r.appendChild(N(E,"Tomato Basil Soup")),r.appendChild(N(S,"Veggie Soup")),r.appendChild(N(j,"Greek Salad"));const o=document.createElement("div");o.classList.add("menu-category"),o.appendChild(I("Main Courses")),o.appendChild(N(k,"Paneer Butter Masala")),o.appendChild(N(A,"Vegetable Biryani")),o.appendChild(N(T,"Veg Hakka Noodles")),o.appendChild(N(L,"Vegetable Dumplings"));const a=document.createElement("div");a.classList.add("menu-category"),a.appendChild(I("Desserts")),a.appendChild(N(M,"Chocolate Brownie")),a.appendChild(N(P,"Pastries"));const i=document.createElement("div");return i.classList.add("menu-category"),i.appendChild(I("Beverages")),i.appendChild(N(q,"Hot Coffee")),i.appendChild(N(z,"Dalgona Coffee")),i.appendChild(N(D,"Smoothies")),n.appendChild(e),n.appendChild(t),n.appendChild(r),n.appendChild(o),n.appendChild(a),n.appendChild(i),n}())}()})),t.addEventListener("click",(()=>{O(t),function(){const n=document.querySelector("#content");n.textContent="",n.appendChild(function(){const n=document.createElement("div");n.classList.add("contact-content");const e=document.createElement("h2");return e.innerHTML="&#127775;Tasty's: Dine today!&#127775;",n.appendChild(e),n.appendChild(H("📍 Address")),n.appendChild(R("D-12, Connaught Place, Outer Circle, New Delhi - 110001, India")),n.appendChild(H("📞 Phone")),n.appendChild(R("Call us at 011 2345 6789 for reservations, takeout, or inquiries.")),n.appendChild(H("📧 Email")),n.appendChild(R("Reach out to us at tastys.kitchen@email.com for any questions or feedback.")),n.appendChild(H("🕒 Hours of Operation")),n.appendChild(R("Monday to Friday: 11:00 AM - 10:00 PM")),n.appendChild(R("Saturday & Sunday: 9:00 AM - 11:00 PM")),n}())}()})),r.addEventListener("click",(()=>{window.location.href="https://github.com/jnDhruv/restaurant-page"}))}(),document.querySelector("#home").click()})();