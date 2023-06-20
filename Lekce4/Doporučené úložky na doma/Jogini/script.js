const headerData = {
    title: 'Jogíni',
    links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
                   }

const introData = {
    heading: 'Vítejte mezi Jogíny',
    text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
           něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
           Postupně se seznámíte se základními principy jógy, jak přístupovat k
           sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
           svoje tělo, pocity a emoce.`,
  }

const poseData = {
    src: 'img/yoga-pose.jpg',
}

import { Header } from "./Header/index.js"
import { Intro } from "./Intro/index.js"
import { Pose } from "./Pose/index.js"

const app = document.querySelector("#app")
app.innerHTML = `
    ${Header(headerData)}
    ${Intro(introData)}
    ${Pose(poseData)}
`
