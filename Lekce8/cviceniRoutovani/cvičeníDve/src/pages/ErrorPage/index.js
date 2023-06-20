import { Header } from '../../components/Header/index.js'
import { Footer } from '../../components/Footer/index.js'

import './style.css'

export const ErrorPage = () => {

    const element = document.createElement("div")
    element.classList.add("page")

    element.append(Header())
    element.innerHTML += `
    <div class="errorP">
        <h1>Chyba 404</h1>
        <p>Je nám líto, ale tato stránka neexistuje :(</p>
        <button class="backH"> <a href="/">Domovská stránka</a> </button>
    </div>
    `
    element.append(Footer())

    return element
}