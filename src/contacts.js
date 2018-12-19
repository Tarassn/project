import style from "./_scss/contacts.scss";
import burger from './modules/burger';
import addSharingIcons from './modules/addSharingIcons';
import showArticles from "./modules/aboutShowArticles";
import pagination from "./modules/aboutPagination";

document.addEventListener("DOMContentLoaded", function() {
    addSharingIcons();
    burger.init();
});

