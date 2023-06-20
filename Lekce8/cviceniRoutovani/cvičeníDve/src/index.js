/* import { ShopList } from "./ShopList/index.js"; */
import { HomePage } from './pages/HomePage/index.js'
import { RecipesPage } from './pages/RecipesPage/index.js'
import { ErrorPage } from './pages/ErrorPage/index.js'

import './style.css';

const appElement = document.querySelector("#app")

if(location.pathname === "/"){
  appElement.append(HomePage())
}
else if(location.pathname === "/recepty"){
  appElement.append(RecipesPage({
    recipes: "loading"
  }))
}
else{
  appElement.append(ErrorPage())
}

/* document
  .querySelector('main')
  .append(
    ShopList({ day: 'mon', dayResult: 'loading' }),
    ShopList({ day: 'tue', dayResult: 'loading' }),
  ); */




