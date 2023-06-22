const c = console.log.bind(document)

import './style.css'

import { HomePage } from './pages/HomePage/index.js'
import { OrderPage } from './pages/OrderPage/index.js'

const { pathname } = window.location

const insert = document.querySelector("#app")

if(pathname === BASE_PATH + "/"){
    insert.append(HomePage())
}
else if(pathname === BASE_PATH + "/objednavka"){
    insert.append(OrderPage())
}



