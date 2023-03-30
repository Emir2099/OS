let taskbar = document.getElementsByClassName("taskbar")[0]  // returns full html collection so we want its first elemnt
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-680px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})