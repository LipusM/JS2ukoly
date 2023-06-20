const c = console.log.bind(document)

/********** Cvičení: Import/export **********/
//Odkaz: https://kodim.cz/kurzy/daweb/js2/komponenty/cv-import-export 
//1) Filmy - komponenta 
import { Movie } from "./Movie/index.js"

const movieList = document.querySelector(".movie-list");
  
fetch(`https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies`)
.then(response => response.json())
.then(data => {

    movieList.innerHTML = data
    .map(movieData => Movie({
        posterUrl: movieData.posterUrl,
        title: movieData.title,
        year: movieData.year,
        url: movieData.url
    })).join("")
  
})







