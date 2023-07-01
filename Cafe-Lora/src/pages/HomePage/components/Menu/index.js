const c = console.log.bind(document)

import './style.css'

import { Drink } from './components/Drink/index.js'

export const Menu = (prop) => {

  const {drinks} = prop

    const element = document.createElement("section")
    element.classList.add("menu")
    element.setAttribute("id", "menu")

    let introText = "Načítám menu..."

    element.innerHTML = `
    <div class="container">
        <h2>Naše nabídka</h2>
        <p class="menu-intro">
        ${introText}
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


        data.result.map(drinks => {

          const {id, name, ordered, image, layers} = drinks
          
          const oneDrink = Drink({
            id: id,
            name: name,
            ordered: ordered,
            image: image,
            layers: layers,
          })

          element.querySelector(".drinks-list").append(oneDrink)
        })
        element.querySelector(".menu-intro").textContent = "Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu"
      })
    }
    
    return element
}


