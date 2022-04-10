var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true, 
    margin:40, 
    dots:false,
    // autoplay:true,
    lazyLoad:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1.275,
        },
        1000:{
            items:1.275, 
        }
    }, 
});



$(".owl-carousel").owlCarousel({
    // you can use jQuery selector
    navText: [$('.am-next'),$('.am-prev')]
 
});

$('.am-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.am-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})


// owl.on('changed.owl.carousel', function(event) {
//     setTimeout(()=>{
//         let lastItem  = $('.owl-carousel .owl-item')[$('.owl-carousel .owl-item').length -1]
//         let firstItem  = $('.owl-carousel .owl-item')[0]
//         let  next =document.querySelector('.am-next')
//         let  prev =document.querySelector('.am-prev')
//         if(lastItem.classList.contains('active')){
//             next.classList.remove('opacity-1')
//             next.classList.add('opacity-[0.3]')
//         }else{

//             next.classList.remove('opacity-[0.3]')
//             next.classList.add('opacity-1')
//         }
//         if(firstItem.classList.contains('active')){
//             prev.classList.remove('opacity-1')
//             prev.classList.add('opacity-[0.3]')
//         }else{
//             prev.classList.remove('opacity-[0.3]')
//             prev.classList.add('opacity-1')
//         }

//     },500)
// })
 