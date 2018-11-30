import style from "./_scss/contacts.scss";
import burger from './modules/burger';
import addSharingIcons from './modules/addSharingIcons';
window.onload=function() {
    addSharingIcons();
    burger.init();
};

