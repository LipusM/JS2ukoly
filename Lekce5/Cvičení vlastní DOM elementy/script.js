const c = console.log.bind(document)

//Odkaz: https://kodim.cz/kurzy/daweb/js2/dom-elementy/cv-vlastni-elementy
//1) Tlačítko
/* const appElm = document.querySelector("#app")

const button1 = document.createElement("button")
button1.textContent = "Makčej"
button1.classList.add("btn")

const button2 = document.createElement("button")
button2.textContent = "Skákej"
button2.classList.add("btn")

const button3 = document.createElement("button")
button3.textContent = "Nastupovat"
button3.classList.add("btn")

appElm.append(button1, button2, button3) */

//2)Kontakty
const appElm = document.querySelector("#app")

const contact1 = document.createElement("div")
contact1.classList.add("contact")
contact1.innerHTML = `
<img src="img/contact.jpg" class="contactPhone" alt="contact">
<span class="name">Jaromír Bystřina</span>
<span class="phone">+420 777 666 323</span>
<span class="email">lesni.bystrina@gmail.com</span>
`

const contact2 = document.createElement("div")
contact2.classList.add("contact")
contact2.innerHTML = `
<img src="img/contact.jpg" class="contactPhone" alt="contact">
<span class="name">Jaromír Jágr</span>
<span class="phone">+420 777 594 323</span>
<span class="email">jaromir.jagr@gmail.com</span>
`

const contact3 = document.createElement("div")
contact3.classList.add("contact")
contact3.innerHTML = `
<img src="img/contact.jpg" class="contactPhone" alt="contact">
<span class="name">Albert Einstein</span>
<span class="phone">+420 777 231 985</span>
<span class="email">albert.einstein@gmail.com</span>
`

appElm.append(contact1, contact2, contact3)










/*     const emailShow = emails.map(email => Email(
        {
            senderName: email.senderName,
            subject: email.subject,
            time: email.time,
            unread: email.unread,
        }
    )) */


/* export const EmailSection = (props) => {

    const {heading, emails, folder} = props

    console.log(emails)

    const element = document.createElement("section")
    element.classList.add("inbox")

    element.innerHTML = `
    <h2>${heading}</h2>
    <div class="emails" id="${folder}"></div>
    `

    const emailShow = emails.map(email => Email(
        {
            senderName: email.senderName,
            subject: email.subject,
            time: email.time,
            unread: email.unread,
        }
    ))

    element.querySelector(".emails").append(...emailShow)

    return element
} */







