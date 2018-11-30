import layer1 from "../img/layer1.jpg";
import layer2 from "../img/layer2.jpg";
import layer3 from "../img/layer3.jpg";
import layer4 from "../img/layer4.jpg";
export let casesSlider = {
    slides:[layer1,layer2,layer3,layer4],
    insideText:[
        ['OBERIG', 'Сила в тобі'],
        ['Лаферобрион', 'Биофарма'],
        ['Koblevo', 'Вино того варте'],
        ['Live Chemicals', 'Molecules are Everything'],
    ],
    frame:0,
    element: document.getElementById("casesText"),
    button: document.getElementById('casesButton'),
    set: function(image) {
        this.element.parentNode.style.backgroundImage = "url("+image+")";
        this.element.children[1].innerHTML=this.insideText[this.frame][0];
        this.element.children[2].innerHTML=this.insideText[this.frame][1];
        this.button.setAttribute('data-path', this.insideText[this.frame][0])
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
function addCasesListeners() {
    let casesLeftButton = document.getElementById("casesLeftButton");
    let casesRightButton = document.getElementById("casesRightButton");
    casesRightButton.addEventListener("click", function () {
        casesSlider.right()
    });
    casesLeftButton.addEventListener("click", function () {
        casesSlider.left()
    });
    casesSlider.button.addEventListener("click", function () {
        localStorage.setItem("chosenProject", casesSlider.button.getAttribute('data-path'));
    });
}
export {addCasesListeners};