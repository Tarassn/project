export let filter={
    financesArr : document.getElementsByClassName("projects__item-finances"),
    servicesArr : document.getElementsByClassName("projects__item-services"),
    retailArr : document.getElementsByClassName("projects__item-retail"),
    pharmacyArr : document.getElementsByClassName("projects__item-pharmacy"),
    allFilters : document.querySelectorAll('.filters__submenu li input'),
    allFields:[],
    attached:[],
    filterProjects: function(){
        if (filter.allFilters[0].checked === true){
            for(let i=0;i<filter.financesArr.length;i++){
                filter.financesArr[i].style.display='block';
            }
        }
        else{
            for(let i=0;i<filter.financesArr.length;i++){
                filter.financesArr[i].style.display='none';
            }
        }

        if (filter.allFilters[1].checked === true){
            for(let i=0;i<filter.servicesArr.length;i++){
                filter.servicesArr[i].style.display='block';
            }
        }
        else{
            for(let i=0;i<filter.servicesArr.length;i++) {
                filter.servicesArr[i].style.display = 'none';
            }
        }

        if (filter.allFilters[2].checked === true){
            for(let i=0;i<filter.retailArr.length;i++){
                filter.retailArr[i].style.display='block';
            }
        }
        else{
            for(let i=0;i<filter.retailArr.length;i++) {
                filter.retailArr[i].style.display = 'none';
            }
        }

        if (filter.allFilters[3].checked === true){
            for(let i=0;i<filter.pharmacyArr.length;i++){
                filter.pharmacyArr[i].style.display='block';
            }
        }
        else{
            for(let i=0;i<filter.pharmacyArr.length;i++) {
                filter.pharmacyArr[i].style.display = 'none';
            }
        }

        if((filter.allFilters[0].checked === false)&&(filter.allFilters[1].checked === false)&&
            (filter.allFilters[2].checked === false) && (filter.allFilters[3].checked === false)){
            for(let i=0;i<filter.financesArr.length;i++){
                filter.financesArr[i].style.display='block';
            }
            for(let i=0;i<filter.servicesArr.length;i++){
                filter.servicesArr[i].style.display='block';
            }
            for(let i=0;i<filter.retailArr.length;i++){
                filter.retailArr[i].style.display='block';
            }
            for(let i=0;i<filter.pharmacyArr.length;i++){
                filter.pharmacyArr[i].style.display='block';
            }
        }

    },
    filtersListeners:function(){
    for(let i=0;i<filter.allFilters.length;i++) {
        filter.allFilters[i].addEventListener('change', filter.filterProjects);
    }
}
};


