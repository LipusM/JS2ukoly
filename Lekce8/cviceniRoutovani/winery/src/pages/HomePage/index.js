import './style.scss'

/* import { Navigation } from '../../components/Navigation/index.js' */

export const HomePage = () => {

    const element = document.createElement("main")

    /* element.append(Navigation()) */
    element.innerHTML += `
    <div id="introHomeP">
        <div class="introText">
            <h1>FROM GRAPE TO GLASS</h1>
            <div class="verticalText">
                <p>Everything is grown and made at our single site in Prague.</p>
                <p>Experience the allure of our extraordinary wines, meticulously cultivated and expertly crafted at our exclusive vineyard 
                in the heart of Prague.</p> 
                <p>Every sip tells the story of our single-site winery, where tradition meets innovation.</p>  
            </div>
        </div>

        <div class="introText">
            <div class="verticalText">
                <p>Immerse yourself in the flavors that embody the essence of Prague's winemaking legacy.</p>
                <p>From vine to glass, our passion for perfection shines through, offering you a sensory journey like no other.</p>
                <p>Uncover the artistry and taste that make our wines truly exceptional. Indulge in the captivating charm of Prague's finest.</p> 
            </div>
        </div>
    </div>
    `

    return element
}