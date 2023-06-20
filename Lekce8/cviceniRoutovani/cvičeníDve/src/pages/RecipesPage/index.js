const c = console.log.bind(document)

import { Header } from '../../components/Header/index.js'
import { Footer } from '../../components/Footer/index.js'
import { Recipe } from './Recipe/index.js'

import './style.css'

export const RecipesPage = (props) => {

    const {recipes} = props

    const element = document.createElement("div")
    element.classList.add("page")

    element.append(Header())
    element.innerHTML += `
    <main class="container" id="konkretniRecepty">
        <div><h1>Recepty</h1></div>
        <div class="myRecipes"></div>
    </main>
    `
    element.append(Footer())


        if(recipes === "loading"){
            fetch(`https://nakupy.kodim.app/api/me/recipes`,{
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(response => response.json())
            .then(data => {
                c(data.result)
                const recipes = data.result.map(recipe => Recipe({
                    title: recipe.title,
                    imageUrl: recipe.imageUrl,
                    url: recipe.url,
                }))
                element.querySelector(".myRecipes").append(...recipes)
            })

        }

    return element
}