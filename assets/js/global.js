const handleDropdownMouseEnter =(selected)=>{
    selected.querySelector('span img').src='./assets/images/svg/goldArrow.svg' 
    selected.querySelector('span img').style.transform ='rotate(180deg)'
    selected.querySelector('span img').style.top ='-2px'
    
}
const handleDropdownMouseLeave =(selected)=>{
    selected.querySelector('span img').src='./assets/images/svg/arrow.svg' 
    selected.querySelector('span img').style.transform ='rotate(0deg)'
    selected.querySelector('span img').style.top ='0'
}