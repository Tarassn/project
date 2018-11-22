import style from "./_scss/about.scss";
import burger from './modules/burger';
burger.init();
import articleImg1 from './img/articles/articles1.jpg'
import articleImg2 from './img/articles/articles2.jpg'
import articleImg3 from './img/articles/articles3.jpg'
import articleImg4 from './img/articles/articles4.jpg'
import articleImg5 from './img/articles/articles5.jpg'
import articleImg6 from './img/articles/articles6.jpg'
import articleImg7 from './img/articles/articles7.jpg'
import articleImg8 from './img/articles/articles8.jpg'
import articleImg9 from './img/articles/articles9.jpg'
import articleImg10 from './img/articles/articles10.jpg'
import articleImg11 from './img/articles/articles11.jpg'
import articleImg12 from './img/articles/articles12.jpg'


class Article {
    constructor(title,imageSrc,author){
        this.title=title;
        this.imageSrc=imageSrc;
        this.author=author;
    }
}
let article1=new Article('Article title',articleImg1,'Антон Сквозник-Дмухановский');
let article2=new Article('Article title',articleImg2,'Пётр Бо́бчинский');
let article3=new Article('Article title',articleImg3,'Пётр До́бчинский');
let article4=new Article('Article title',articleImg4,'Иван Хлестаков');
let article5=new Article('Article title',articleImg5,'Пётр Бо́бчинский');
let article6=new Article('Article title',articleImg6,'Пётр До́бчинский');
let article7=new Article('Article title',articleImg7,'Антон Сквозник-Дмухановский');
let article8=new Article('Article title',articleImg8,'Пётр До́бчинский');
let article9=new Article('Article title',articleImg9,'Иван Хлестаков');
let article10=new Article('Article title',articleImg10,'Антон Сквозник-Дмухановский');
let article11=new Article('Article title',articleImg11,'Пётр До́бчинский');
let article12=new Article('Article title',articleImg12,'Пётр Бо́бчинский');
export let allArticles=[article1,article2,article3,article4,article5,article6,article7,article8,article9,article10,
    article11,article12];
function showArticles() {
    let el = document.getElementById('about__articles');
    for(let i=0;i<allArticles.length;i++){
        let created = document.createElement('div');
        created.classList.add('articles__item');
        el.appendChild(created);
        let createdImg = document.createElement('img');
        createdImg.src=allArticles[i].imageSrc;
        createdImg.alt=allArticles[i].title + ' image';
        let createdDiv = document.createElement('div');
        createdDiv.classList.add('articles__item_text-block');
        let createdText = document.createElement('p');
        createdText.innerText= allArticles[i].title;
        let createdAuthor= document.createElement('h6');
        createdAuthor.innerText= allArticles[i].author;
        created.appendChild(createdImg);
        created.appendChild(createdDiv);
        createdDiv.appendChild(createdText);
        createdDiv.appendChild(createdAuthor);
    }
}
let pagination = {
    items:document.getElementsByClassName('articles__item'),
    clickableElements:document.querySelectorAll('.pagination > a'),
    selected:1,
    count:function () {
        return this.selected * 4;
    },
    hide:function () {
        for(let i=0;i<this.items.length;i++){
            this.items[i].style.display='none';
        }
    },
    showProper:function () {
        //renders necessary items
        pagination.hide();
        for(let i=this.count()-4;i<this.count();i++){
            this.items[i].style.display='flex';
        }
        for(let i=1;i<this.clickableElements.length -1;i++){
            this.clickableElements[i].classList.remove('active');
        }
        this.clickableElements[this.selected].classList.add('active');
    },
    checkSelected:function () {
        //checks if selected property does not exceed page count;
        if(this.selected<1){
            this.selected=this.clickableElements.length -2;
        }
        if(this.selected>=this.clickableElements.length -1){
            this.selected=1;
        }
    },
    addListeners:function () {
        //left arrow
        this.clickableElements[0].addEventListener('click',function (e) {
            e.preventDefault();
            pagination.selected-=1;
            pagination.checkSelected();
            pagination.showProper();
        });
        //number buttons
        for(let i=1;i<this.clickableElements.length - 1;i++){
            this.clickableElements[i].addEventListener('click',function (e) {
                e.preventDefault();
                pagination.selected = +pagination.clickableElements[i].innerText;
                pagination.showProper();
            })
        }
        //right arrow
        this.clickableElements[this.clickableElements.length - 1].addEventListener('click',function (e) {
            e.preventDefault();
            pagination.selected+=1;
            pagination.checkSelected();
            pagination.showProper();
        })
    }
};

window.onload=function() {
    showArticles();
    console.log(pagination.items);
    pagination.showProper();
    pagination.addListeners();

};
