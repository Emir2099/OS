let windowsicon = document.getElementsByClassName("windowsicon")[0]  // returns full html collection so we want its first elemnt
let startmenu = document.getElementsByClassName("startmenu")[0]

let searchesicon = document.getElementsByClassName("searchesicon")[0]  // returns full html collection so we want its first elemnt
let searchmenu = document.getElementsByClassName("searchmenu")[0]

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