const c = console.log.bind(document)
import './style.css'

export const Recipe = (props) => {

    const {title, imageUrl, url} = props

    const element = document.createElement("div")
    /* element.classList.add(".page") */
    element.classList.add("recipe")

    element.innerHTML = `
        <h2>${title}</h2>
        <div>
            <img src="${imageUrl}" alt="Girl in a jacket"> 
        </div>
        <div>Recept  <a href="${url}">zde</a></div>
    `

    return element
}



