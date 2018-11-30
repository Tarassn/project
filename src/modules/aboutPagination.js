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
export default pagination;