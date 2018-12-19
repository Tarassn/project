import style from "./_scss/about.scss";
import burger from './modules/burger';
import addSharingIcons from './modules/addSharingIcons';
import pagination from './modules/aboutPagination';
import showArticles from './modules/aboutShowArticles';
import {addPartnersListeners, partnersSlider} from "./modules/partnersSlider";
import {addCasesListeners, casesSlider} from "./modules/casesSlider";
import headerOffsetY from "./modules/headerOffsetY";

document.addEventListener("DOMContentLoaded", function() {
    burger.init();
    showArticles();
    addSharingIcons();
    pagination.showProper();
    pagination.addListeners();
});