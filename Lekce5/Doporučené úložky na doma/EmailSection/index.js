 const c = console.log.bind(document)

 import { Email } from "../Email/index.js";

export const EmailSection = (props) => {

    // let { heading, /* emails = [],  */folder } = props; 
    let { heading, emails = [], folder } = props; 

    const element = document.createElement("section");
    element.classList.add("inbox");

    element.innerHTML = `
    <h2>${heading}</h2>
    <div class="emails" id="${folder}"></div>
    `

    /* if(emails === "loading"){ */
    if(emails.length === 0){ 
        fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=${folder}`)
        .then(response => response.json())
        .then(data => {
            const section = data.emails.map(oneEmail => Email(
                {
                    id: oneEmail.id,
                    senderName: oneEmail.sender.name,
                    subject: oneEmail.subject,
                    time: oneEmail.time,
                    unread: oneEmail.unread,
                    body: "",
                }));
        element.querySelector('.emails').append(...section);
        })
    }
   /*  } */

    return element;
}
 
