import style from "./_scss/main.scss";
import layer1 from "./img/layer1.png";
import layer2 from "./img/layer2.png";
import layer3 from "./img/layer3.png";
import layer4 from "./img/layer4.png";
import video from './videos/mainProjectX.mp4';

let casesSlider = {
    slides:[layer1,layer2,layer3,layer4],
    insideText:[
        ['OBERIG', 'Сила в тобі'],
        ['Лаферобреон', 'Биофарма'],
        ['Koblevo', 'Вино того варте'],
        ['Live Chemical', 'Molecules are Everything'],

    ],
    frame:0,
    element: document.getElementById("casesText"),
    set: function(image) {
        this.element.parentNode.style.backgroundImage = "url("+image+")";
        this.element.childNodes[3].innerHTML=this.insideText[this.frame][0];
        this.element.childNodes[5].innerHTML=this.insideText[this.frame][1];

    },
    start: function() {
        this.set(this.slides[this.frame]);
    },
    left: function() {
        this.frame--;
        if(this.frame < 0) this.frame = this.slides.length-1;
        this.set(this.slides[this.frame]);
        this.resetTimer();
    },
    right: function() {
        this.frame++;
        if(this.frame === this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
        this.resetTimer();
    },
    timer: setInterval(function() {
        casesSlider.right();
    },5000),
    resetTimer: function() {
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            casesSlider.right();
        }, 5000)
    }
};
document.addEventListener("DOMContentLoaded", function() {
    let leftButton=document.getElementById("casesLeftButton");
    let rightButton=document.getElementById("casesRightButton");
    rightButton.addEventListener("click", function (){casesSlider.right()});
    leftButton.addEventListener("click", function (){casesSlider.left()});
});

window.onload = function() {
    casesSlider.start();
    casesSlider.timer;
};