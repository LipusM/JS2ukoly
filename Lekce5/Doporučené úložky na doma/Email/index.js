export const Email = (props) => {

    const { id, senderName, subject, time, unread, body } = props

    const element = document.createElement("div")
    element.classList.add("email")

    let iconClass = 'opened'
    if (unread) {
        iconClass = 'closed'
    }

    if(body !== ""){
        element.classList.add("email--expand")
        iconClass = 'opened'
    }

    element.innerHTML = `
    <div class="email__head">
        <button class="email__icon email__icon--${iconClass}"></button>
        <div class="email__info">
            <div class="email__sender">${senderName}</div>
            <div class="email__subject">${subject}</div>
        </div>
        <div class="email__time">${time}</div>
    </div>
    <div class="email__body">${body}</div>
    `;

    const btnElm = element.querySelector("button")
    btnElm.addEventListener("click", () => {

        if(body === ""){
            fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails/${id}`)
            .then(response => response.json())
            .then(data => {
                element.replaceWith(Email({
                    id: data.id,
                    senderName: data.sender.name,
                    subject: data.subject,
                    time: data.time,
                    unread: data.unread,
                    body: data.body,
                }))
            })
        }
        else{
                element.replaceWith(Email({
                    id: id,
                    senderName: senderName,
                    subject: subject,
                    time: time,
                    unread: unread,
                    body: "",
                }))
        }
        
    })

    return element;

}