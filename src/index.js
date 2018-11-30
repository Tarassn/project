import style from "./_scss/main.scss";
import video from './videos/mainProjectX.mp4';


import burger from './modules/burger';
import headerOffsetY from './modules/headerOffsetY';
import addSharingIcons from './modules/addSharingIcons';
import {casesSlider,addCasesListeners} from "./modules/casesSlider";
import {partnersSlider,addPartnersListeners} from "./modules/partnersSlider";


document.addEventListener("DOMContentLoaded", function() {
    // cases slider listeners
    addCasesListeners();
    // partners slider listeners
    addPartnersListeners();
    casesSlider.start();
    partnersSlider.start();
    casesSlider.timer;
    // burger menu
    burger.init();
    //header onscroll background change
    headerOffsetY.initListener();
    addSharingIcons();
});

