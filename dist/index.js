!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n.p+"./img/layer1.png"},function(e,t,n){e.exports=n.p+"./img/layer2.png"},function(e,t,n){e.exports=n.p+"./img/layer3.png"},function(e,t,n){e.exports=n.p+"./img/layer4.png"},function(e,t,n){"use strict";n.r(t);n(5);var i=n(0),r=n.n(i),s=n(1),o=n.n(s),u=n(2),a=n.n(u),l=n(3),c=n.n(l),f=(n(6),{slides:[r.a,o.a,a.a,c.a],insideText:[["OBERIG","Сила в тобі"],["Лаферобреон","Биофарма"],["Koblevo","Вино того варте"],["Live Chemical","Molecules are Everything"]],frame:0,element:document.getElementById("casesText"),set:function(e){this.element.parentNode.style.backgroundImage="url("+e+")",this.element.childNodes[3].innerHTML=this.insideText[this.frame][0],this.element.childNodes[5].innerHTML=this.insideText[this.frame][1]},start:function(){this.set(this.slides[this.frame])},left:function(){this.frame--,this.frame<0&&(this.frame=this.slides.length-1),this.set(this.slides[this.frame]),this.resetTimer()},right:function(){this.frame++,this.frame===this.slides.length&&(this.frame=0),this.set(this.slides[this.frame]),this.resetTimer()},timer:setInterval(function(){f.right()},5e3),resetTimer:function(){clearInterval(this.timer),this.timer=setInterval(function(){f.right()},5e3)}});document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("casesLeftButton");document.getElementById("casesRightButton").addEventListener("click",function(){f.right()}),e.addEventListener("click",function(){f.left()})}),window.onload=function(){f.start(),f.timer}},function(e,t,n){},function(e,t,n){e.exports=n.p+"videos/mainProjectX.mp4"}]);