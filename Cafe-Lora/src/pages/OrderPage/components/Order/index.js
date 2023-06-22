const c = console.log.bind(document)

import './style.css'

import { OrderItem } from '../OrderItem/index.js'

export const Order = (prop) => {

    const {items} = prop

    const element = document.createElement("div")
    element.classList.add("page")
    
    element.innerHTML = `
    <div class="order__content container">
        <h1>Vaše objednávka</h1>
        <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>

        <div class="order__items"></div>

    </div>
    `

    const listOrders = element.querySelector(".order__items")

    if(items === "loading"){

        fetch(`https://cafelora.kodim.app/api/me/drinks`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })
        .then(response => response.json())
        .then(data => {
           const orderedDrinks =  data.result.filter(specificOrder => {
                if(specificOrder.ordered){
                    return specificOrder
                }
            }
        )

            element.replaceWith(Order({
                items: orderedDrinks,
            }
        ))
    })
}
    else if(items.length === 0){
        element.querySelector(".empty-order").classList.remove("empty-order--hide")
    }
    else{
        listOrders.append(...items.map(
            item => 
                OrderItem(item)
        ))
    }

    return element
}























