let windowsicon = document.getElementsByClassName("windowsicon")[0]  // returns full html collection so we want its first elemnt
let startmenu = document.getElementsByClassName("startmenu")[0]

let searchesicon = document.getElementsByClassName("searchesicon")[0]  // returns full html collection so we want its first elemnt
let searchmenu = document.getElementsByClassName("searchmenu")[0]

let vscicon = document.getElementsByClassName("vscicon")[0]  // returns full html collection so we want its first elemnt
// var vsc_app = new ActiveXObject("WScript.shell") 

windowsicon.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-700px"
    }
    else{
        startmenu.style.bottom = "50px"
    }

    if(searchmenu.style.bottom == "50px"){
        searchmenu.style.bottom = "-700px"
    }
    else{
        searchmenu.style.bottom = "-700px"
    }

})



searchesicon.addEventListener("click", ()=>{
    if(searchmenu.style.bottom == "50px"){
        searchmenu.style.bottom = "-700px"
    }
    else{
        searchmenu.style.bottom = "50px"
    }

    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-700px"
    }
    else{
        startmenu.style.bottom = "-700px"
    }
})



vscicon.addEventListener("click", ()=>{
    if(searchmenu.style.bottom == "50px"){
        searchmenu.style.bottom = "-700px"
    }
    else{
        searchmenu.style.bottom = "-700px"
    }
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-700px"
    }
    else{
        startmenu.style.bottom = "-700px"
    }
    window.alert("Open manually!")
})