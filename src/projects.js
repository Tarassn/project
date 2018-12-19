import style from "./_scss/projects.scss";
import burger from './modules/burger';
import addSharingIcons from './modules/addSharingIcons';
import {showPartners,addProjectsListener} from "./modules/projectsLogic";
import setPage from "./modules/projectSetPage";

document.addEventListener("DOMContentLoaded", function() {
    showPartners();
    addProjectsListener();
    burger.init();
    addSharingIcons();
});
