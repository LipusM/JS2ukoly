const c = console.log.bind(document)

import './style.css'

export const Header = (prop) => {

    const {showMenu} = prop

    const element = document.createElement("header")

    if(showMenu){
        element.innerHTML = `
        <div class="header__content container">
            <div class="site-logo"></div>
            <div class="navigation">
                <button class="nav-btn"></button>
                <nav class="rollout-nav nav-closed">
                    <a href="#home">domů</a>
                    <a href="#menu">menu</a>
                    <a href="#gallery">galerie</a>
                    <a href="#contact">kontakt</a>
                </nav>
            </div>
        </div>
        `

        const navElm = element.querySelector(".rollout-nav")

        const mobMnShowClose = () => {
    
            navElm.classList.toggle("nav-closed")
        }
        const btnMenuElm = element.querySelector(".nav-btn")
        btnMenuElm.addEventListener("click", mobMnShowClose)
    
    
        const rollMobMnClose = () => {
    
            navElm.classList.add("nav-closed")
        }
        navElm.addEventListener("click", rollMobMnClose)
    }
    else{
        element.innerHTML = `
        <header>
            <div class="header__content container">
                <div class="site-logo"></div>
                <nav class="inline-nav">
                    <a href="/">Hlavní stránka</a>
                </nav>
            </div>
        </header>
        `
    }

    return element
}