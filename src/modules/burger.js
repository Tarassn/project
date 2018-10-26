
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
        let width = window.innerWidth;
        window.addEventListener("resize", function() {
            if(!burger.touched){
                if(window.innerWidth !== width){ //for mobile resize
                    if (window.matchMedia("(min-width: 600px)").matches) {
                        burger.navigation.style.display = 'inline-flex'
                    }
                    else if (window.matchMedia("(max-width: 600px)").matches) {
                        burger.navigation.style.display = 'none'
                    }
                    width = window.innerWidth;
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