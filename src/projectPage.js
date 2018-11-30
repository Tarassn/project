import style from "./_scss/projectPage.scss";
import burger from './modules/burger';
import addSharingIcons from './modules/addSharingIcons';
import setPage from './modules/projectSetPage';
window.onload=function() {
    burger.init();
    setPage();
    addSharingIcons();
};