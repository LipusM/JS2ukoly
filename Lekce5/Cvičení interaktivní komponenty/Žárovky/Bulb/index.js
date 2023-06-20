export const Bulb = (props) => {

    const element = document.createElement("div")
    element.classList.add("bulb")

    if(props.isOn){
        element.classList.add("bulb--on")
    }

    element.innerHTML = `
    <div></div>
    `

    element.addEventListener("click", () => {
        element.classList.toggle("bulb--on")
    })

    return element
}