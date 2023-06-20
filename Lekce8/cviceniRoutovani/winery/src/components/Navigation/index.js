import './style.scss'

import wineLogo from './img/wineLogo.svg'

export const Navigation = () => {

    const element = document.createElement("div")
    element.classList.add("homeP")

    element.innerHTML = `
    <div id="topP">
        <a id="myLogo" href="#"><img src="${wineLogo}" alt="Wine logo"></a> 
    </div>
        <h1>The Blanc winery</h1>
    <nav id="navPages">
        <a href="/" class="navHome">Introduction</a> 
        <a href="/catalogue" class="navCatalogue">Catalogue</a> 
        <a href="/degustation" class="navDegustation">Degustation</a> 
        <a href="/contact" class="navContact">Contact</a> 
    </nav>
    `
    element.querySelector("#myLogo").addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    })


    


    if(location.pathname === "/"){
        element.querySelector(".navHome").classList.add("navlink-active")
    }
    else if(location.pathname === "/catalogue"){
        element.querySelector(".navCatalogue").classList.add("navlink-active")
    }
    else if(location.pathname === "/degustation"){
        element.querySelector(".navDegustation").classList.add("navlink-active")
    }
    else if(location.pathname === "/contact"){
        element.querySelector(".navContact").classList.add("navlink-active")
    }

    return element
}






