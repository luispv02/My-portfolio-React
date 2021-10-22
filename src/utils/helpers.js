
export function menuScroll(){
    window.onscroll = () =>{
        const scroll = window.scrollY;
        const header = document.querySelector('.header-top');
        const linksImg = document.querySelectorAll('.img-nav-bottom');
        const enlaces = document.querySelectorAll('.enlace');
        console.log(scroll)

        if(scroll === 0){
            header.classList.remove('show')
        }else{
            header.classList.add('show')
        }
        
        if(scroll > 3650){
            linksImg[3].classList.add('active')
            linksImg[2].classList.remove('active')
            linksImg[1].classList.remove('active')
        }else if(scroll > 910){
            linksImg[2].classList.add('active')
            linksImg[1].classList.remove('active')
            linksImg[3].classList.remove('active')
        }else if(scroll > 333){
            linksImg[1].classList.add('active')
            linksImg[0].classList.remove('active')
            linksImg[2].classList.remove('active')
        }else if(scroll > 0){
            linksImg[0].classList.add('active')
            linksImg[1].classList.remove('active')
        }

        
        if(scroll > 2100){
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