import { ActualMessage } from "../ActualMessage/index.js"

export const MessageForm = (props) => {

    const element = document.createElement("form")

    element.innerHTML = `
    <div class="formular">

        <div>
            <label>Your name:</label>
            <input type="text" id="senderName" class="form-control jmeno1" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>

        <div>
            <label>Message:</label>
            <input type="text" id="senderMessage" class="form-control me-3 zprava1" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>

        <div class="formButton">
            <button type="submit" class="btn btn-primary">Send</button>
        </div>

    </div>
    `
    const senderName = element.querySelector("#senderName")
    const senderMessage = element.querySelector("#senderMessage")

    //Funkce pro odeslání dat ve formuláři
    const sendForm = (event) => {
        event.preventDefault()

        const actualMessage = {
            name: senderName.value,
            message: senderMessage.value,
        }
    
        fetch(`https://czechichat.deno.dev/api/send-message`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(actualMessage),
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === "ok"){
                senderMessage.value = ''
                writtenMessages() 
            }
        })
    }


    //Funkce pro zobrazení odeslané zprávy v chatu. Následně je volaná ve funkci sendForm
    const sentMessages = document.querySelector("#sentMessages")

    const writtenMessages = () => {

        fetch(`https://czechichat.deno.dev/api/list-messages`,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            const odeslaneZpravy = data.messages.map(message => ActualMessage({
                name: message.name,
                message: message.message,
                date: message.date,
            }))
    
            sentMessages.innerHTML = ''
            sentMessages.append(...odeslaneZpravy)
        })
    
    }

    element.addEventListener("submit", sendForm)

    //Refresh zpráv na stránku co 3 vteřiny
    setInterval(writtenMessages, 3000) //Toto je nové

    //Zobrazení zpráv po inicializaci komponenty, resp. načtení stránky
    writtenMessages() //Toto je nové

    return element
}
