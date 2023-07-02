const c = console.log.bind(document)

import './style.css'

import { HomePage } from './pages/HomePage/index.js'
import { OrderPage } from './pages/OrderPage/index.js'

const { pathname } = window.location

const cesta = location.pathname

const insert = document.querySelector("#app")

if(pathname === "/"){
    insert.append(HomePage())
}
else if(pathname === "/objednavka"){
    insert.append(OrderPage())
}



