import partner1 from "../img/partners/partners1.png";
import partner2 from "../img/partners/partners2.png";
import partner3 from "../img/partners/partners3.png";
import partner4 from "../img/partners/partners4.png";
import partner5 from "../img/partners/partners5.png";
import partner6 from "../img/partners/partners6.png";
import partner7 from "../img/partners/partners7.png";
import partner8 from "../img/partners/partners8.png";
import partner9 from "../img/partners/partners9.png";
import partner10 from "../img/partners/partners10.png";
import partner11 from "../img/partners/partners11.png";
import partner12 from "../img/partners/partners12.png";
import partner13 from "../img/partners/partners13.png";
import partner14 from "../img/partners/partners14.png";
import partner15 from "../img/partners/partners15.png";
import partner16 from "../img/partners/partners16.png";
import partner17 from "../img/partners/partners17.png";
import partner18 from "../img/partners/partners18.png";
import partner19 from "../img/partners/partners19.png";
import partner20 from "../img/partners/partners20.png";
import partner21 from "../img/partners/partners21.png";
import partner22 from "../img/partners/partners22.png";
import partner23 from "../img/partners/partners23.png";
import partner24 from "../img/partners/partners24.png";
import {casesSlider} from "./casesSlider";


let partnersSlider = {
    partners:[partner1,partner2,partner3,partner4,partner5,partner6,partner7,partner8,partner9,partner10,partner11,
        partner12,partner13,partner14,partner15,partner16,partner17,partner18,partner19,partner20,
        partner21,partner22,partner23,partner24],
    count:0,
    adder:0,
    elements:document.querySelectorAll('[class="partners__logos"] > img'),
    allCircles:document.querySelectorAll(".partners__circles div"),
    set: function() {
        this.adder=this.count*8;
        if (this.adder>16){
            this.adder=0;
        }
        for(let i=0;i < 8;i++){
            this.elements[i].src = this.partners[i + this.adder]
        }
        this.circlesChange();
    },
    start: function() {
        this.set();

    },
    left: function() {
        this.count--;
        if(this.count < 0){
            this.count = 2
        }
        this.set();
        this.resetTimer();
    },
    right: function() {
        this.start();
        this.count++;
        if(this.count>2){
            this.count=0;
        }
        this.resetTimer();
    },
    timer: setInterval(function() {
        partnersSlider.right();
    },7000),
    resetTimer: function() {
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            partnersSlider.right();
        }, 7000)
    },
    circlesChange:function () {
        for(let i=0;i<this.allCircles.length;i++){
            this.allCircles[i].style.opacity=1;
        }
        this.allCircles[this.count].style.opacity=0.5;
    }
};

function addPartnersListeners() {
    let partnersLeftButton=document.getElementById("partnersLeftButton");
    let partnersRightButton=document.getElementById("partnersRightButton");
    partnersLeftButton.addEventListener("click", function (){partnersSlider.left()});
    partnersRightButton.addEventListener("click", function (){partnersSlider.right()});
}
export {partnersSlider,addPartnersListeners};