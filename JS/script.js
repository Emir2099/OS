let windowsicon = document.getElementsByClassName("windowsicon")[0]  // returns full html collection so we want its first elemnt
let startmenu = document.getElementsByClassName("startmenu")[0]

let searchesicon = document.getElementsByClassName("searchesicon")[0]  // returns full html collection so we want its first elemnt
let searchmenu = document.getElementsByClassName("searchmenu")[0]

let vscicon = document.getElementsByClassName("vscicon")[0]  // returns full html collection so we want its first elemnt
let vscimage = document.getElementsByClassName("vscimage")[0]

windowsicon.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-700px"
        windowsicon.style.opacity = "1"
    }
    else{
        startmenu.style.bottom = "50px"
        windowsicon.style.opacity = "0.8"
    }

    if(searchmenu.style.bottom == "50px"){
        searchmenu.style.bottom = "-700px"
        searchesicon.style.opacity = "1"
    }
    else{
        searchmenu.style.bottom = "-700px"
    }

})



searchesicon.addEventListener("click", ()=>{
    if(searchmenu.style.bottom == "50px"){
        searchmenu.style.bottom = "-700px"
        searchesicon.style.opacity = "1"
    }
    else{
        searchmenu.style.bottom = "50px"
        searchesicon.style.opacity = "0.8"
    }

    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-700px"
       windowsicon.style.opacity = "1"
    }
    else{
        startmenu.style.bottom = "-700px"
    }

    
})




vscicon.addEventListener("click", ()=>{
    if(searchmenu.style.bottom == "50px"){
        searchmenu.style.bottom = "-700px"
        searchesicon.style.opacity = "1"
    }
    else{
        searchmenu.style.bottom = "-700px"
    }
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-700px"
        windowsicon.style.opacity = "1"
    }
    else{
        startmenu.style.bottom = "-700px"
    }

    if(vscimage.style.bottom == "150px"){
        vscimage.style.bottom = "-700px"
        vscicon.style.opacity = "1"
    }
    else{
        vscimage.style.bottom = "150px"
        vscicon.style.opacity = "0.8"
    }
})