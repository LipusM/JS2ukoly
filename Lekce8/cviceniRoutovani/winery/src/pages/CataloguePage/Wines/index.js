import './style.scss'

import wine1 from './img/wine1.png'
import wine2 from './img/wine2.png'
import wine3 from './img/wine3.png'
import wine4 from './img/wine4.png'

import leftArrow from './img/leftArrow.svg'
import rightArrow from './img/rightArrow.svg'

export const Wines = () => {

    const element = document.createElement("div")

    element.innerHTML = `
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="actualWine">
                    <div>
                        <img src="${wine1}" class="d-block" alt="...">
                    </div>
                    <div class="wineText">
                        <h2>Sparkling Gold Reserve</h2>
                        <p>
                        Indulge in the enchanting bubbles of our Sparkling Gold Reserve. Crafted with utmost precision and care, this exquisite sparkling wine is a true celebration in every sip. Its lively effervescence dances on your palate, while its delicate flavors of ripe fruits and hints of toasty notes leave a lasting impression. Perfect for toasting special moments or adding a touch of glamour to any occasion, our Sparkling Gold Reserve is a testament to elegance and sophistication.
                        </p>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="actualWine">
                    <div class="wineText">
                        <h2>Chardonnay Classic</h2>
                        <p>
                        Experience the pure elegance of our Chardonnay Classic. Grown in the sun-kissed vineyards of our estate, this white wine captivates with its vibrant golden hue and enticing aromas of tropical fruits and vanilla. With each sip, the smooth and creamy texture envelops your senses, revealing layers of citrus and buttery nuances. Immerse yourself in the luxurious flavors of our Chardonnay Classic and elevate your dining experience to new heights.
                        </p>
                    </div>
                    <div>
                        <img src="${wine2}" class="d-block" alt="...">
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="actualWine">
                    <div>
                        <img src="${wine3}" class="d-block" alt="...">
                    </div>
                    <div class="wineText">
                        <h2>Pinot Noir Reserve</h2>
                        <p>
                        Discover the allure of our Pinot Noir Reserve, a red wine that showcases the artistry of our winemaking. Sourced from carefully selected vineyard plots, this velvety and medium-bodied wine boasts a beautiful ruby color and seductive aromas of red berries and earthy undertones. The palate is treated to a symphony of flavors, including ripe cherries, blackcurrants, and a touch of spice. With its elegant tannins and lingering finish, our Pinot Noir Reserve is the epitome of refinement and charm.
                        </p>
                    </div>
                </div>
            </div>


            <div class="carousel-item">
                <div class="actualWine">
                    <div class="wineText">
                        <h2>Pinot Noir Reserve</h2>
                        <p>
                        Discover the allure of our Pinot Noir Reserve, a red wine that showcases the artistry of our winemaking. Sourced from carefully selected vineyard plots, this velvety and medium-bodied wine boasts a beautiful ruby color and seductive aromas of red berries and earthy undertones. The palate is treated to a symphony of flavors, including ripe cherries, blackcurrants, and a touch of spice. With its elegant tannins and lingering finish, our Pinot Noir Reserve is the epitome of refinement and charm.
                        </p>
                    </div>
                    <div>
                        <img src="${wine3}" class="d-block" alt="...">
                    </div>
                </div>
            </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <img src="${leftArrow}" alt="left"></img>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <img src="${rightArrow}" alt="left"></img>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    `

    return element
}