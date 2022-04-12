let  width ; 
if(window.innerWidth < 1441) {
   width =  "94.444%"
} else{
    width = window.innerWidth - 1440 
    width = width  / 2 
    width = width + 1360 
    width = width + "px"
} 


const rightEdgeComponents = document.querySelectorAll('.rightEdge')
rightEdgeComponents.forEach(item=>{
   if(width==='94.444%' && item.classList.contains('rightEdgeCarousel')){
       item.style.maxWidth = '100%'

   }else{
       item.style.maxWidth = width

   }
})