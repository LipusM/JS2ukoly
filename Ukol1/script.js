const c = console.log.bind(document)

/********** Doporučené úložky na doma ************/
//Odkaz: https://kodim.cz/kurzy/daweb/js2/server-komunikace/ulozky-na-doma 

//1) E-maily
/* fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails`)
.then(response => response.json())
.then(data => 
     renderEmail(data.emails)
     )

const renderEmail = (emails) => {
    const inbox = document.querySelector("#inbox")

    inbox.innerHTML = emails.map(email => {
        return `
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
    }).join(``)
} */

//2) E-maily, složky
fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
    .then(response => response.json())
    .then(data => {
        renderEmails(data.emails, "unread")
    })


fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
    .then(response => response.json())
    .then(data => {
        renderEmails(data.emails, "read")
    })

const renderEmails = (emails, emailIcon) => {

    let emailBox = ''

    if (emailIcon === "unread") {
        emailIcon = 'email__icon--closed'
        emailBox = document.querySelector("#inboxUnread")
    } 
    else {
        emailIcon = 'email__icon--opened'
        emailBox = document.querySelector("#inboxRead")
    }

    emailBox.innerHTML = emails.map(email => {
        return `
                <div class="email">
                    <div class="email__head">
                        <button class="email__icon ${emailIcon}"></button>
                        <div class="email__info">
                            <div class="email__sender">${email.sender.name}</div>
                            <div class="email__subject">${email.subject}</div>
                        </div>
                        <div class="email__time">${email.time}</div>
                    </div>
                <div class="email__body"></div>
                </div>
                `
    }).join(``)
}