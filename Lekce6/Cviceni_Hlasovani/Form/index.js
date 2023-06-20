export const Form = (props) => {

    const element = document.createElement("form")

    element.innerHTML = `
    <h1>Jak loupete banán?</h1>
    <div id="choices">
    0: od stopky
    1: od špičky
    2: přelomením vejpůl
    </div>
    <div class="form">
      <div>
        <label>Tvoje jméno:</label>
        <input type="text" id="senderName" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
      </div>

      <div>
        <label>Číslo možnosti</label>
        <input type="number" id="senderChoice" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" min="0" max="2" placeholder="0" inputmode="numeric">
      </div>

      <div>
        <button type="submit" class="btn btn-primary">Hlasuj</button>
      </div>
    </div>

    <div id="wrongMessage"></div>
    `


    const senderName = element.querySelector("#senderName")
    const senderChoice = element.querySelector("#senderChoice")

    const wrongMessage = element.querySelector("#wrongMessage") 

    const sendVote = element
    sendVote.addEventListener("submit", (event) => {
        event.preventDefault()

        const oneVote = {
            optionId: Number(senderChoice.value),
            voterName: senderName.value,
        }

    
        fetch(`https://apps.kodim.cz/daweb/hlasovani/api/poll/0`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(oneVote)
        })
        .then(response => response.json())
        .then(data => {
        if(data.code === "multiple-votes"){
            senderName.classList.add("inputWrong")
            wrongMessage.textContent = `Nemůžete hlasovat dvakrát stejným jménem.`
        }
        else if(data.code === "invalid-field"){
            senderName.classList.add("inputWrong")
            wrongMessage.textContent = `Musíte vyplnit jméno.`
        }
        else{
            senderName.value = ""
            senderName.classList.remove("inputWrong")
            wrongMessage.textContent = ``
            }
        })
    })

    return element

}