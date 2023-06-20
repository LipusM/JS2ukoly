import './style.scss'

export const Wine = (props) => {

    const {image, heading, text1, text2} = props

    const element = document.createElement("div")
    element.classList.add("allWines")

    element.innerHTML = `
    <div class="wineImage">
        <img class="wine" src="${image}" alt="Our wine yard"> 
    </div>
    <div class="wineText">
        <h2>${heading}</h2>
        <p>${text1}</p>
        <p>${text2}</p>
    </div>
    `

    return element
}