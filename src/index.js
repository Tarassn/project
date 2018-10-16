console.log(`I've been required by Webpack`);
import style from "./_scss/main.scss";

let casesSlider = {
    slides:['layer1.png','layer2.png','layer3.png','layer4.png'],
    insideText:[
        ['OBERIG', 'Сила в тобі'],
        ['Лаферобреон', 'Биофарма'],
        ['Koblevo', 'Вино того варте'],
        ['Live Chemical', 'Molecules are Everything'],

    ],
    frame:0,
    element: document.getElementById("casesText"),
    set: function(image) {
        this.element.parentNode.style.backgroundImage = "url(src/img/"+image+")";
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