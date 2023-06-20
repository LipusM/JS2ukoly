const c = console.log.bind(document)

import { EmailSection } from "./EmailSection/index.js"
const appElm = document.querySelector("#app")

appElm.append(
                EmailSection({
                    heading: "Nepřečtené", 
                 /*    emails: "loading",  */
                    folder: "unread",
                             }),

                EmailSection({
                    heading: "Přečtené", 
                  /*   emails: "loading",  */
                    folder: "read",
                            })
            )











