!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=53)}({0:function(e,n,t){"use strict";var i={element:document.getElementById("header__burger"),navigation:document.getElementById("headerNav"),touched:!1,delay:100,toggleFunc:function(){i.element.classList.toggle("open"),i.changeNav()},changeNav:function(){i.element.classList.contains("open")?this.navigation.style.display="inline-flex":this.navigation.style.display="none"},init:function(){i.element.addEventListener("click",i.toggleFunc);var e=window.innerWidth;window.addEventListener("resize",function(){i.touched||window.innerWidth!==e&&(window.matchMedia("(min-width: 600px)").matches?i.navigation.style.display="inline-flex":window.matchMedia("(max-width: 600px)").matches&&(i.navigation.style.display="none"),e=window.innerWidth),i.touched=!0,setTimeout(function(){i.touched=!1},i.delay)})}};n.a=i},53:function(e,n,t){"use strict";t.r(n);t(54);t(0).a.init()},54:function(e,n,t){}});