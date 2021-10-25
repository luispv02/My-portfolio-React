
export function menuScroll(){
    window.onscroll = () =>{
        const scroll = window.scrollY;
        const header = document.querySelector('.header-top');
        const linksImg = document.querySelectorAll('.img-nav-bottom');
        const enlaces = document.querySelectorAll('.enlace');


        if(scroll === 0){
            header.classList.remove('show')
        }else{
            header.classList.add('show')
        }
        
        // Mobile
        if(scroll > 3000){
            linksImg[3].classList.add('active')
            linksImg[2].classList.remove('active')
            linksImg[1].classList.remove('active')
            linksImg[0].classList.remove('active')
        }else if(scroll > 950){
            linksImg[2].classList.add('active')
            linksImg[1].classList.remove('active')
            linksImg[3].classList.remove('active')
            linksImg[0].classList.remove('active')
        }else if(scroll > 333){
            linksImg[1].classList.add('active')
            linksImg[0].classList.remove('active')
            linksImg[2].classList.remove('active')
            linksImg[3].classList.remove('active')
        }else if(scroll === 0){
            linksImg[0].classList.add('active')
            linksImg[1].classList.remove('active')
            linksImg[2].classList.remove('active')
            linksImg[3].classList.remove('active')
        }

        
        // Desktop
        if(scroll > 1800){
            enlaces[2].classList.add('active-desktop')
            enlaces[1].classList.remove('active-desktop')
            enlaces[0].classList.remove('active-desktop')
        }else if(scroll > 700){
            enlaces[1].classList.add('active-desktop')
            enlaces[0].classList.remove('active-desktop')
            enlaces[2].classList.remove('active-desktop')
        }else if(scroll > 300){
            enlaces[0].classList.add('active-desktop')
            enlaces[1].classList.remove('active-desktop')
            enlaces[2].classList.remove('active-desktop')
        }else{
            enlaces[0].classList.remove('active-desktop')
            enlaces[1].classList.remove('active-desktop')
            enlaces[2].classList.remove('active-desktop')
        }

  
    }
}