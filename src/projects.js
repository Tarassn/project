import style from "./_scss/projects.scss";
import burger from './modules/burger';
burger.init();
import projectsOschad from './img/projIMG/projectsOschad.jpg';
import projectsBiosporin from './img/projIMG/projectsBiosporin.jpg';
import projectsKoblevo from './img/projIMG/projectsKoblevo.jpg';
import projectsLenovo from './img/projIMG/projectsLenovo.jpg';
import projectsOschad2 from './img/projIMG/projectsOschad2.jpg';
import projectsLiveChem from './img/projIMG/projectsLiveChem.jpg';
import projectsBeIt from './img/projIMG/projectsBeIT.jpg';
import projectsDSPU from './img/projIMG/projectsDPSU.jpg';
import projectsLaferobreon from './img/projIMG/projectsPharm.jpg';
import projectsNP from './img/projIMG/projectsNP.png';
import projectsRabota from './img/projIMG/projectsRabota.jpg';
import projectsUniP from './img/projIMG/projectsUniP.jpg';
import projectsWinetime from './img/projIMG/projectsWinetime.jpg';
import projectsWatsons from './img/projIMG/projectsWatsons.jpg';
import projectsPumb from './img/projIMG/projectsPumb.jpg';


class Project {
    constructor(name,src,type){
        this.name=name;
        this.src=src;
        this.type=type;
}
}
let oschadBank = new Project('Ощадбанк',projectsOschad,'finances');
let biosporin = new Project('Биоспорин',projectsBiosporin,'pharmacy');
let koblevo = new Project('Коблево',projectsKoblevo,'retail');
let lenovo = new Project('Lenovo',projectsLenovo,'retail');
let oschadBank2 = new Project('Ощадбанк',projectsOschad2,'finances');
let liveChem = new Project('Live Chemicals',projectsLiveChem,'pharmacy');
let beIt = new Project('Be-IT',projectsBeIt,'services');
let dpsu = new Project('ДПСУ',projectsDSPU,'services');
let laferobreon = new Project('Лаферобрион',projectsLaferobreon,'pharmacy');
let novaPoshta = new Project('Нова Пошта',projectsNP,'services');
let rabota = new Project('Rabota.ua',projectsRabota, 'services');
let uniP =new Project('UnIP',projectsUniP, 'services');
let winetime = new Project('Winetime',projectsWinetime, 'retail');
let watsons = new Project('Watsons',projectsWatsons, 'retail');
let pumbBank = new Project('ПУМБ',projectsPumb,'finances');
let allProjects=[oschadBank,biosporin,koblevo,lenovo,oschadBank2,liveChem,beIt,dpsu,laferobreon,novaPoshta,rabota,uniP,winetime,watsons,pumbBank];

function showPartners() {
    let el = document.getElementById('projects-Container');
    for(let i=0;i<allProjects.length;i++){
        let created = document.createElement('img');
        el.appendChild(created);
        created.classList.add('projects__item');
        created.alt=allProjects[i].name;
        created.src=allProjects[i].src;
    }
}
window.onload=function() {
    showPartners();
}