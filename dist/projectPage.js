!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=67)}([function(e,t,n){"use strict";var i={element:document.getElementById("header__burger"),navigation:document.getElementById("headerNav"),touched:!1,delay:100,toggleFunc:function(){i.element.classList.toggle("open"),i.changeNav()},changeNav:function(){i.element.classList.contains("open")?this.navigation.style.display="inline-flex":this.navigation.style.display="none"},init:function(){i.element.addEventListener("click",i.toggleFunc);var e=window.innerWidth;window.addEventListener("resize",function(){i.touched||window.innerWidth!==e&&(window.matchMedia("(min-width: 600px)").matches?i.navigation.style.display="inline-flex":window.matchMedia("(max-width: 600px)").matches&&(i.navigation.style.display="none"),e=window.innerWidth),i.touched=!0,setTimeout(function(){i.touched=!1},i.delay)})}};t.a=i},function(e,t,n){"use strict";n.r(t);n(18);var i=n(0),r=n(2),a=n.n(r),s=n(3),o=n.n(s),l=n(4),c=n.n(l),u=n(5),p=n.n(u),m=n(6),d=n.n(m),f=n(7),g=n.n(f),v=n(8),h=n.n(v),y=n(9),j=n.n(y),b=n(10),w=n.n(b),A=n(11),x=n.n(A),P=n(12),_=n.n(P),k=n(13),E=n.n(k),q=n(14),I=n.n(q),L=n(15),B=n.n(L),F=n(16),C=n.n(F),N=n(17),S=n.n(N),O=(n(19),n(20),{financesArr:document.getElementsByClassName("projects__item-finances"),servicesArr:document.getElementsByClassName("projects__item-services"),retailArr:document.getElementsByClassName("projects__item-retail"),pharmacyArr:document.getElementsByClassName("projects__item-pharmacy"),allFilters:document.querySelectorAll(".filters__submenu li input"),allFields:[],attached:[],filterProjects:function(){if(!0===O.allFilters[0].checked)for(var e=0;e<O.financesArr.length;e++)O.financesArr[e].style.display="block";else for(var t=0;t<O.financesArr.length;t++)O.financesArr[t].style.display="none";if(!0===O.allFilters[1].checked)for(var n=0;n<O.servicesArr.length;n++)O.servicesArr[n].style.display="block";else for(var i=0;i<O.servicesArr.length;i++)O.servicesArr[i].style.display="none";if(!0===O.allFilters[2].checked)for(var r=0;r<O.retailArr.length;r++)O.retailArr[r].style.display="block";else for(var a=0;a<O.retailArr.length;a++)O.retailArr[a].style.display="none";if(!0===O.allFilters[3].checked)for(var s=0;s<O.pharmacyArr.length;s++)O.pharmacyArr[s].style.display="block";else for(var o=0;o<O.pharmacyArr.length;o++)O.pharmacyArr[o].style.display="none";if(!1===O.allFilters[0].checked&&!1===O.allFilters[1].checked&&!1===O.allFilters[2].checked&&!1===O.allFilters[3].checked){for(var l=0;l<O.financesArr.length;l++)O.financesArr[l].style.display="block";for(var c=0;c<O.servicesArr.length;c++)O.servicesArr[c].style.display="block";for(var u=0;u<O.retailArr.length;u++)O.retailArr[u].style.display="block";for(var p=0;p<O.pharmacyArr.length;p++)O.pharmacyArr[p].style.display="block"}},filtersListeners:function(){for(var e=0;e<O.allFilters.length;e++)O.allFilters[e].addEventListener("change",O.filterProjects)}});n.d(t,"allProjects",function(){return T}),i.a.init();var M=function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.src=n,this.type=i},T=[new M("Ощадбанк",a.a,"finances"),new M("Биоспорин",o.a,"pharmacy"),new M("Koblevo",c.a,"retail"),new M("Lenovo",p.a,"retail"),new M("Ощадбанк",d.a,"finances"),new M("Live Chemicals",g.a,"pharmacy"),new M("Be-IT",h.a,"services"),new M("ДПСУ",j.a,"services"),new M("Лаферобрион",w.a,"pharmacy"),new M("Нова Пошта",x.a,"services"),new M("Rabota.ua",_.a,"services"),new M("UnIP",E.a,"services"),new M("Winetime",I.a,"retail"),new M("Watsons",B.a,"retail"),new M("ПУМБ",C.a,"finances"),new M("OBERIG",S.a,"retail")];function W(e){var t=e.target.alt;localStorage.setItem("chosenProject",t),window.location="projectPage.html"}window.onload=function(){!function(){for(var e=document.getElementById("projects-Container"),t=0;t<T.length;t++){var n=document.createElement("img");e.appendChild(n),n.classList.add("projects__item"),n.classList.add("projects__item-"+T[t].type),n.alt=T[t].name,n.src=T[t].src}}(),function(){for(var e=document.querySelectorAll(".projects__item"),t=0;t<e.length;t++)e[t].addEventListener("click",W);O.filtersListeners()}()}},function(e,t,n){e.exports=n.p+"./img/projectsOschad.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsBiosporin.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsKoblevo.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsLenovo.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsOschad2.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsLiveChem.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsBeIT.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsDPSU.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsPharm.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsNP.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsRabota.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsUniP.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsWinetime.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsWatsons.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsPumb.jpg"},function(e,t,n){e.exports=n.p+"./img/projectsOberig.jpg"},function(e,t,n){},function(e,t,n){e.exports=n.p+"./img/checked-checkbox.png"},function(e,t,n){e.exports=n.p+"./img/unchecked-checkbox.png"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);n(68);var i=n(0),r=n(1);console.log(r.allProjects),i.a.init();var a=document.getElementById("partnerTitle"),s=document.getElementById("partnerText"),o="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc";window.onload=function(){!function(){for(var e=localStorage.getItem("chosenProject"),t=0;t<r.allProjects.length;t++)if(e===r.allProjects[t].name){s.innerHTML='<img id="partnerImage">'+o+o+o;var n=document.getElementById("partnerImage");a.textContent=r.allProjects[t].name,n.src=r.allProjects[t].src,n.alt=r.allProjects[t].name}}()}},function(e,t,n){}]);