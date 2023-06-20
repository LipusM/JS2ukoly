const c = console.log.bind(document)

/********** Doporučené úložky na doma **********/
//Odkaz: https://kodim.cz/kurzy/daweb/js2/server-komunikace/ulozky-na-doma 
//1) E-maily
fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails`)
.then(response => response.json())
.then(data => {
    c(data) //Výpis základní struktury získaných dat
    c(data.emails) //Kontrola, že se mi vypisuje pole objektů (Objekt: info o e-mailu)
    
    //Pro 1)
    /* renderEmail(data.emails)  */

    //Pro 2)
    renderEmailMessages(data.emails)
})



//1) E-maily
/* const renderEmail = (emails) => {
    const inbox = document.querySelector(`#inbox`)

    emails.map(email => {
        c(email.id)

        if(email.unread){
            inbox.innerHTML += `
            <div class="email">
                <div class="email__head">
                    <button class="email__icon email__icon--closed"></button>
                    <div class="email__info">
                        <div class="email__sender">${email.sender.name}</div>
                        <div class="email__subject">${email.subject}</div>
                    </div>
                    <div class="email__time">${email.time}</div>
                </div>
                <div class="email__body"></div>
            </div>
          `
        }
        else{
            inbox.innerHTML += `
            <div class="email">
                <div class="email__head">
                    <button class="email__icon email__icon--opened"></button>
                    <div class="email__info">
                        <div class="email__sender">${email.sender.name}</div>
                        <div class="email__subject">${email.subject}</div>
                    </div>
                    <div class="email__time">${email.time}</div>
                </div>
                <div class="email__body"></div>
            </div>
          `
        }
    })
} */




//2)E-maily, složky
const renderEmailMessages = (emailMessages) => {
    const inbox = document.querySelector(`#inbox`)
    /* const inboxUnread = document.querySelector(`#inboxUnread`) */
    /* const inboxRead = document.querySelector(`#inboxRead`) */

    emailMessages.map(emailMessage => {

        fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails/${emailMessage.id}`)
            .then(response => response.json())
            .then(data => {
                c(data) //Kontrola, že se mi detaily e-mailů vypisují

                 if(data.unread){
                    document.querySelector(`#inboxUnread`).innerHTML += 
                    `
                    <div class="email">
                        <div class="email__head">
                            <button class="email__icon email__icon--closed"></button>
                            <div class="email__info">
                                <div class="email__sender">${data.sender.name}</div>
                                <div class="email__subject">${data.subject}</div>
                            </div>
                            <div class="email__time">${data.time}</div>
                        </div>
                        <div class="email__body">${data.body}</div>
                    </div>
                    `
                }

                else{
                    document.querySelector(`#inboxRead`).innerHTML +=
                    `
                    <div class="email">
                        <div class="email__head">
                            <button class="email__icon email__icon--opened"></button>
                            <div class="email__info">
                                <div class="email__sender">${data.sender.name}</div>
                                <div class="email__subject">${data.subject}</div>
                            </div>
                            <div class="email__time">${data.time}</div>
                        </div>
                        <div class="email__body">${data.body}</div>
                    </div>
                    `
                } 
            })
    })
}



























































