export const ActualMessage = (props) => {

    const element = document.createElement("div")
    element.classList.add("element")

    const {name, message, date} = props

    element.innerHTML = `
    <div id="name">${name}</div>
    <div>${message}</div>
    <div id="date">${date}</div>
    `

    return element
}