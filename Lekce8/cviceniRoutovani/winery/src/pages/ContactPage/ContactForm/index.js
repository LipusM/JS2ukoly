import './style.scss'
const c = console.log.bind(document)

export const ContactForm = () => {

    const element = document.createElement("form")

    element.innerHTML = `
    <div class="mb-3">
        <label id="labelName" for="yourName" class="form-label">Your first and last name</label>
        <input id="yourName" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>

    <div class="mb-3">
        <label id="labelEmail" for="yourEmail" class="form-label">Email address</label>
        <input id="yourEmail" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>

    <div class="flex-nowrap mb-3">
        <label id="labelMessage" for="yourMessage" class="form-label">Your message (max. 250 characters)</label>
        <textarea id="yourMessage" class="form-control" aria-label="With textarea" maxlength="250"></textarea>
    </div>

    <div>
        <p>Characters: <span id="messageLength">0</span></p>
    </div>

    <div id="sendM">
        <button type="submit" class="btn btn-primary">Send</button>
    </div>
    `

    //Kontrola jména
    const nameCheck = () => {
        let nameCheckBoolean = false

        const labelName = element.querySelector("#labelName")
        const nameValue = element.querySelector("#yourName")

        if(nameValue.value.length < 2){
            labelName.classList.add("stopLabel")
            nameValue.classList.add("wrongInput")
        }
        else{
            labelName.classList.remove("stopLabel")
            nameValue.classList.remove("wrongInput")

            nameCheckBoolean = true
        }

        return nameCheckBoolean
    }


    //Kontrola e-mailu
    const emailDomain = {
        domain: ["@gmail.com", "@yahoo.com", "@seznam.cz", "@email.cz", "@volny.cz", "@protonmail.com"],
         /* character: "@", */ //Nemusí být, jelikož Bootstrap 5.3 toto zahrnuje
     }
    
    const emailCheck = () => {
        let emailCheckBoolean = false

        const labelEmail = element.querySelector("#labelEmail")
        const emailValue = element.querySelector("#yourEmail")
    
        emailDomain.domain.some(email => {
    
            if( !(emailValue.value.includes(email)) ){
                emailValue.classList.add("wrongInput")
                labelEmail.classList.add("stopLabel")
    
            }
            else{
                emailValue.classList.remove("wrongInput")
                labelEmail.classList.remove("stopLabel")
                   
                emailCheckBoolean = true
                return true
            }
        })
    
        return emailCheckBoolean
    }


    //Kontrola zprávy
    const textCheck = () => {
        let textCheckBoolean = false

        const labelMessage = element.querySelector("#labelMessage")
        const yourMessage = element.querySelector("#yourMessage")

        if(yourMessage.value.length > 250 || yourMessage.value === ""){
            labelMessage.classList.add("stopLabel")
            yourMessage.classList.add("wrongInput")
        }
        else{
            labelMessage.classList.remove("stopLabel")
            yourMessage.classList.remove("wrongInput")

            textCheckBoolean = true
        }

        return textCheckBoolean
    }


    //Kontrola délky zprávy
    let charLen = 0

    let messageLength = element.querySelector("#messageLength")

    const keyChar = [16, 17, 18, 66, 37, 38, 39, 40] //shift, ctrl, alt, capslock, vlevo, nahoru, vpravo, dolů

    const textLength = (event) => {

        let yourMessage = element.querySelector("#yourMessage")

        if( charLen <= 249 && event.keyCode !== 8 && !keyChar.includes(event.keyCode) ){ //Aktuální počet znaků při psaní
            charLen += 1
            messageLength.textContent = charLen
        }
        
        if(event.keyCode === 8 && charLen> 0){ //Aktuální počet znaků při mazání

            charLen = yourMessage.value.length
            messageLength.textContent = charLen
        }
    }

    const messageCounter = element.querySelector("#yourMessage")
    messageCounter.addEventListener("keyup", textLength)

    //Odeslání zprávy
    const sendQ = (event) => {
        event.preventDefault()

        nameCheck()
        const nameCheckReturn = nameCheck()

        emailCheck()
        const emailCheckReturn = emailCheck()

        textCheck()
        const textCheckReturn = textCheck()

        if(nameCheckReturn && emailCheckReturn && textCheckReturn){
            element.innerHTML = ``
            element.innerHTML = `
            <div id="thankMessage">
                <h2>Děkujeme za Vaši zprávu</h2>
                <p>Budeme Vás kontaktovat do 48 hodin.</p>
            </div>
            `
        }
        
    }

    element.addEventListener("submit", sendQ)

    return element
}



