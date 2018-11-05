let headerOffsetY={
    element:document.getElementById('header'),
    headerOffsetChange:function () {
        if (window.matchMedia("(max-width: 600px)").matches) {
            if (window.pageYOffset > window.innerHeight){
                this.element.classList.add('header-active');
            }
            if(window.pageYOffset < window.innerHeight){
                this.element.classList.remove('header-active');
            }
        }
    },
    initListener: function () {
        window.addEventListener("scroll",function (){headerOffsetY.headerOffsetChange()})
    }
};
export default headerOffsetY;