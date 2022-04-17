const openTab=(id,index)=>{
    const tab = document.getElementById(id) 
    const tabs = document.querySelectorAll('.tab')
    const tabButtons = document.querySelectorAll('.tabsHeaderButton') 
    tabs.forEach(item=>item.classList.remove('active'))
    tabButtons.forEach(item=>item.classList.remove('active'))
    tab.classList.add('active')
    tabButtons[index].classList.add('active')
}
const openTab2=(id,index)=>{
    const tab = document.getElementById(id) 
    const tabs = document.querySelectorAll('.tab2')
    const tabButtons = document.querySelectorAll('.tabsHeaderButton2') 
    tabs.forEach(item=>item.classList.remove('active'))
    tabButtons.forEach(item=>item.classList.remove('active'))
    tab.classList.add('active')
    tabButtons[index].classList.add('active')
}