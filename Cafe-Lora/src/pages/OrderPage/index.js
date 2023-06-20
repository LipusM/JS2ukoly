const c = console.log.bind(document)

import './style.css'

import { Header } from '../../components/Header/index.js'
import { Footer } from '../../components/Footer/index.js'

import { Order } from './components/Order/index.js'

export const OrderPage = () => {

    const main = document.createElement("div")
    main.classList.add("page")

    main.append(Header({showMenu: false}))
    main.innerHTML += `
    <main class="order">

    </main>
    `

    main
    .append(Order({
      items: "loading",
    }))

    main.append(Footer())

    return main
}