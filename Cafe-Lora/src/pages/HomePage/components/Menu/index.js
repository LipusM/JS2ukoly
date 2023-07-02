const c = console.log.bind(document)

import './style.css'

import { Drink } from './components/Drink/index.js'

export const Menu = (prop) => {

  const {drinks} = prop

    const element = document.createElement("section")
    element.classList.add("menu")
    element.setAttribute("id", "menu")

    let introText1 = "Načítám menu..."
    let introText2 = "Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu"

    element.innerHTML = `
    <div class="container">
        <h2>Naše nabídka</h2>
        <p class="menu-intro">
        ${introText1}
        </p>
        <div class="drinks-list"></div>
        
    </div>
    `

    //Button for order detail
    const orderDetail = document.createElement("div")
    orderDetail.classList.add("order-detail")
  
    orderDetail.innerHTML = `
    <a href="/objednavka">Detail objednávky</a>
    `
    element.querySelector(".container").append(orderDetail)
    


    if(drinks === "loading"){
      
      fetch(`https://cafelora.kodim.app/api/me/drinks`,{
        method: 'GET',
        headers:{
          'Content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      })
      .then(response => response.json())
      .then(data => {

          const allDrinks = data.result.map(drinks => 
          
           Drink({
            id: drinks.id,
            name: drinks.name,
            ordered: drinks.ordered,
            image: drinks.image,
            layers: drinks.layers,
          })
        )
       
        element.querySelector(".drinks-list").append(...allDrinks)
        element.querySelector(".menu-intro").textContent = introText2
      })
    }
    
    return element
}


