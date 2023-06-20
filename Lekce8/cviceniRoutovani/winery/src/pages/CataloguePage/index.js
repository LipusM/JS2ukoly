import './style.scss'

/* import { Navigation } from '../../components/Navigation/index.js' */
import { Wines } from './Wines/index.js'

export const CataloguePage = () => {

    const element = document.createElement("main")

    /* element.append(Navigation()) */
    element.innerHTML += `
        <div id="availableWines"></div>
    `
    element.querySelector("#availableWines").append(Wines())

    return element
}




