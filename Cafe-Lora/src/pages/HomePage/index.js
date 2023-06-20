const c = console.log.bind(document)

import './style.css'

import { Header } from '../../components/Header/index.js'
import { Footer } from '../../components/Footer/index.js'

import { Banner } from './components/Banner/index.js'
import { Menu } from './components/Menu/index.js'
import { Gallery } from './components/Gallery/index.js'
import { Contact } from './components/Contact/index.js'

export const HomePage = () => {

    const main = document.createElement("main")
    main.classList.add("page")

    main.append(Header({showMenu: true}))
    main.append(Banner(), Menu({ drinks: 'loading'}), Gallery(), Contact()) 
    main.append(Footer())

    return main
}

















