import "./style.css"

export const Quote = (props) => {

    const {text, author} = props

    const element = document.createElement("div")

    element.innerHTML = `
    <p id="quote">"${text}"</p>
    <p>${author}</p>
    `

    return element
}




