import './helper.css'

export function menuScroll(){
    window.onscroll = () =>{
        const scroll = window.scrollY;
        console.log(scroll)
        const linksImg = document.querySelectorAll('.img-nav-bottom');

        
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
    }
}