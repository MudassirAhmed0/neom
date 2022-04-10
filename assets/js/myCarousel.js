var slideNumber =1
const slide  =(slideNum)=>{ 
    slideNumber = slideNum? slideNum :slideNumber
    const nav = document.querySelector('.slideNav')
    const balls = document.querySelectorAll('.nav-ball')
    const slides = document.querySelectorAll('.slide')
    slides.forEach(slide=>{
        slide.classList.add('hidden')
        slide.classList.remove('slide-active')
    })
    switch (slideNum? slideNum :slideNumber) {
        case 1:
            nav.classList.add('gradient1')
            nav.classList.remove('gradient2')
            nav.classList.remove('gradient3')
            nav.classList.remove('gradient4')

            slides[0].classList.remove('hidden')
            slides[0].classList.add('slide-active')

            balls[1].classList.remove('carouselcircleBlue')
            balls[2].classList.remove('carouselcircleBlue')
            balls[3].classList.remove('carouselcircleBlue')
            balls[1].classList.add('bg-[#bfbdb9]')
            balls[2].classList.add('bg-[#bfbdb9]')
            balls[3].classList.add('bg-[#bfbdb9]')
            break;
        case 2:
            nav.classList.remove('gradient1')
            nav.classList.add('gradient2')
            nav.classList.remove('gradient3')
            nav.classList.remove('gradient4')
            
            slides[1].classList.remove('hidden')
            slides[1].classList.add('slide-active')

            balls[1].classList.add('carouselcircleBlue')
            balls[1].classList.remove('bg-[#bfbdb9]')
            balls[2].classList.remove('carouselcircleBlue')
            balls[2].classList.add('bg-[#bfbdb9]')
            balls[3].classList.remove('carouselcircleBlue')
            balls[3].classList.add('bg-[#bfbdb9]')
            break;
        case 3:
            nav.classList.remove('gradient1')
            nav.classList.remove('gradient2')
            nav.classList.add('gradient3')
            nav.classList.remove('gradient4')

            slides[2].classList.remove('hidden')
            slides[2].classList.add('slide-active')

            balls[1].classList.add('carouselcircleBlue')
            balls[1].classList.remove('bg-[#bfbdb9]')
            balls[2].classList.add('carouselcircleBlue')
            balls[2].classList.remove('bg-[#bfbdb9]')
            balls[3].classList.remove('carouselcircleBlue')
            balls[3].classList.add('bg-[#bfbdb9]')
            break;
        case 4:
            nav.classList.remove('gradient1')
            nav.classList.remove('gradient2')
            nav.classList.remove('gradient3')
            nav.classList.add('gradient4')
            
            slides[3].classList.remove('hidden')
            slides[3].classList.add('slide-active')

            balls[1].classList.add('carouselcircleBlue')
            balls[1].classList.remove('bg-[#bfbdb9]')
            balls[2].classList.add('carouselcircleBlue')
            balls[2].classList.remove('bg-[#bfbdb9]')
            balls[3].classList.add('carouselcircleBlue')
            balls[3].classList.remove('bg-[#bfbdb9]')
            
            break;
     
    }
}




let start = false
window.addEventListener('scroll',startCarousel)




const startCarousel =()=>{
  
        let el = document.querySelector('.myCarousel')
        var rect = el.getBoundingClientRect();
    
        if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        ){
            start = true
        }
        if(start){
            
            setInterval(()=>{ 
                slideNumber= slideNumber !== 4? slideNumber + 1: 1
                slide()
            },6000)
            window.removeEventListener('scroll',startCarousel)
        }
    
}
