import style from "./_scss/about.scss";
import burger from './modules/burger';
import addSharingIcons from './modules/addSharingIcons';
import pagination from './modules/aboutPagination';
import showArticles from './modules/aboutShowArticles';


window.onload=function() {
    burger.init();
    showArticles();
    addSharingIcons();
    pagination.showProper();
    pagination.addListeners();
};
