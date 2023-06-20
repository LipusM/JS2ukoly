const c = console.log.bind(document)

//Odkaz: https://kodim.cz/kurzy/daweb/js2/komponenty/cv-komponenty
//1) Produkt
const products = [
    {
      name: 'Mlýnek na kávu',
      price: 520,
      currency: 'Kč',
    },
    {
      name: 'Varná konvice',
      price: 670,
      currency: 'Kč',
    },
    {
      name: 'Sada hrničků',
      price: 1020,
      currency: 'Kč',
    },
    {
      name: 'Kávovar',
      price: 5800,
      currency: 'Kč',
    },
  ];

const Product = (props) => {
    const {name, price, currency} = props

    return`
    <div class="product">
        <h2 class="product__name">${name}</h2>
        <p class="product__price">Cena: ${price} ${currency}</p>
    </div>

    `
}

const renderProducts = () => {
    const productsSection = document.querySelector("#products-section")

    productsSection.innerHTML = products.map(product => Product(product)).join(``)
}
renderProducts()

//2) Hodiny
const times =[
    {
        hours: 12,
        minutes: 34,
    },
    {
        hours: 8,
        minutes: 5,
    },
    {
        hours: 15,
        minutes: 1,
    },
]

const Clock = (props) => {
    const {hours, minutes} = props

    return `
    <div class="clock">
        <span class="clock__hours">${hours}</span>:<span class="clock__minutes">${minutes}</span>
    </div>
    `
}

const renderTime = () => {
    const app = document.querySelector("#app")

     const formattedTimes = times.map(time => {
        return {
            hours: time.hours.toString().padStart(2, "0"), 
            minutes: time.minutes.toString().padStart(2, "0")
               } 
    }) 

      app.innerHTML = formattedTimes.map(time => Clock(time)).join(``) 
}
renderTime()

















