const c = console.log.bind(document)

//Cvičení: Interaktivní komponenty
//Odkaz: https://kodim.cz/kurzy/daweb/js2/dom-elementy/cv-interaktivni-komponenty 
import { Bulb } from "./Bulb/index.js"

const lightBulbs = [
    {
        isOn: false,
    },
    {
        isOn: false,
    },
    {
        isOn: true,
    },
    {
        isOn: true,
    },
]

const appElm = document.querySelector("#app")
/* appElm.append(Bulb({isOn: false}), Bulb({isOn: true}), Bulb({isOn: false})) */
const ligthBulbElm = lightBulbs.map(bulb => Bulb(bulb))
appElm.append(...ligthBulbElm)




