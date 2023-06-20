export const Dice = (props) => {
    
    const element = document.createElement("div")
    element.classList.add("dice")

    element.innerHTML = `      
    <div class="dice__side dice__side--${props.side}"></div>
    <button class="btn btn--small roll-btn">hodit</button>
    `

    const roll = () => {
        return Math.floor(Math.random() * 6) + 1
      }

    const btnElm = element.querySelector("button")

    btnElm.addEventListener("click", () => {
        let diceSide = roll()
        element.replaceWith(
            Dice(
                {
                side: `${diceSide}`
                }
            ))
    })

    return element
}