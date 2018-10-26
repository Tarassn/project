
 let burger={
    element: document.getElementById("header__burger"),
    navigation:document.getElementById('headerNav'),
    touched: false,
    delay:100,
    toggleFunc: function () {
        burger.element.classList.toggle("open");
        burger.changeNav();
    },
    changeNav:function () {
        if(burger.element.classList.contains('open')){
            this.navigation.style.display='inline-flex';
        }
        else{
            this.navigation.style.display='none'
        }
    },
    init:function () {
        burger.element.addEventListener("click", burger.toggleFunc);

        window.addEventListener("resize", function() {
            let width = window.innerWidth;
            if(!burger.touched){
                if($(window).width() !== width){
                    if (window.matchMedia("(min-width: 600px)").matches) {
                        burger.navigation.style.display = 'inline-flex'
                    }
                    else if (window.matchMedia("(max-width: 600px)").matches) {
                        burger.navigation.style.display = 'none'
                    }
                }
            }
            burger.touched=true;
            setTimeout(function() {
                burger.touched = false;
            }, burger.delay);
        });
    }
};
export default burger;