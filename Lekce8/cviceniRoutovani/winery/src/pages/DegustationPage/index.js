const c = console.log.bind(document)

import './style.scss'
import { Wine } from './Wine/index.js'

/* import { Navigation } from '../../components/Navigation/index.js' */

import wineYard from './img/wineYard.jpg'
import wine1 from './img/wine1.jpg'
import wine2 from './img/wine2.jpg'
import wine3 from './img/wine3.jpg'

const degustationInfo = [
    {
        image: wine1,
        heading: "Sparkling Gold Reserve",
        text1: "Embark on a sensory journey as you indulge in the captivating world of wine tasting. Immerse yourself in a symphony of flavors, aromas, and textures that dance on your palate, revealing the rich and intricate profiles of each carefully crafted wine.",
        text2: "At our wine tasting events, we invite you to explore a selection of exquisite wines from renowned vineyards. Sip and savor as our knowledgeable sommeliers guide you through the nuances and characteristics of each wine, sharing their expertise and passion along the way.",
    },
    {
        image: wine2,
        heading: "Pinot Noir Reserve",
        text1: "Discover the allure of our Pinot Noir Reserve, a red wine that showcases the artistry of our winemaking. Sourced from carefully selected vineyard plots, this velvety and medium-bodied wine boasts a beautiful ruby color and seductive aromas of red berries and earthy undertones.",
        text2: "The palate is treated to a symphony of flavors, including ripe cherries, blackcurrants, and a touch of spice. With its elegant tannins and lingering finish, our Pinot Noir Reserve is the epitome of refinement and charm.",
    },
    {
        image: wine3,
        heading: "Chardonnay Classic",
        text1: "Experience the pure elegance of our Chardonnay Classic. Grown in the sun-kissed vineyards of our estate, this white wine captivates with its vibrant golden hue and enticing aromas of tropical fruits and vanilla.",
        text2: "With each sip, the smooth and creamy texture envelops your senses, revealing layers of citrus and buttery nuances. Immerse yourself in the luxurious flavors of our Chardonnay Classic and elevate your dining experience to new heights.",
    }
]


export const DegustationPage = () => {

    const element = document.createElement("main")

    /* element.append(Navigation()) */
    element.innerHTML += `
    <div id="wineDegustation">

        <div class="wineIntro">
            <div class="wineImage">
                <img class="wine" src="${wineYard}" alt="Our wine yard"> 
            </div>
            <div class="wineText">
                <h2>Experience the art of wine tasting</h2>
                <p>Embark on a sensory journey as you indulge in the captivating world of wine tasting. Immerse yourself in a symphony of flavors, aromas, and textures that dance on your palate, revealing the rich and intricate profiles of each carefully crafted wine.</p>
                <p>At our wine tasting events, we invite you to explore a selection of exquisite wines from renowned vineyards. Sip and savor as our knowledgeable sommeliers guide you through the nuances and characteristics of each wine, sharing their expertise and passion along the way.</p>
            </div>
        </div>

        <div id="specificWine"></div>

    </div>
    `

/*     degustationInfo.map(wineInfo => {

        const degusWine = Wine({
            image: wineInfo.image,
            heading: wineInfo.heading,
            text1: wineInfo.text1,
            text2: wineInfo.text2,
        })

        element.querySelector("#specificWine").append(degusWine)
    }) */

    const degusWine = degustationInfo.map(wineInfo => 

        Wine({
        image: wineInfo.image,
        heading: wineInfo.heading,
        text1: wineInfo.text1,
        text2: wineInfo.text2,
        })
    )

    c(degusWine)
    element.querySelector("#specificWine").append(...degusWine)

    return element
}