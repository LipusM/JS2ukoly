const c = console.log.bind(document)

/********** Cvičení: Volání API **********/
//Odkaz: https://kodim.cz/kurzy/daweb/js2/server-komunikace/cv-volani-api 
//1) Východ a západ slunce
const showRiseSet = document.querySelector(`#showRiseSet`)
const riseSet = document.querySelector(`#riseSet`)

showRiseSet.addEventListener(`click`, () => {
    fetch(`https://api.sunrise-sunset.org/json?lat=50&lng=14.5`)
    .then(response =>  response.json())
    .then(data => {
        riseSet.innerHTML = `
                            <span>Východ slunce: ${data.results.sunrise}</span>
                            <br>
                            <span>Západ slunce: ${data.results.sunset}</span>
                            `
    })
})

//2) Generátor hesel
const generatePassword = document.querySelector(`#generatePassword`)
const passwordLength = document.querySelector(`#passwordLength`)
const password = document.querySelector(`#password`)

generatePassword.addEventListener(`click`, () => {
    fetch(`https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=${passwordLength.value}`)
    .then(response => response.json())
    .then(data => {
        password.textContent = data.password
    })
})




/********** Zobrazování dat **********/
//Odkaz: https://kodim.cz/kurzy/daweb/js2/server-komunikace/zobrazovani-dat 
/* const renderShoppingList = (items) => {
    const listElm = document.querySelector(`.shopping-list`)
    listElm.innerHTML = items
                        .map(item => 
                            `
                            <li class="item">
                                <div>${item.product}</div>
                                <div>${item.amount}</div>
                            </li>
                            `
                            ).join(``)
} */



/* fetch(`https://nakupy.kodim.app/api/sampleweek/mon/items`)
    .then(response => response.json())
    .then(data => renderShoppingList(data.result) ) */




/********** Cvičení: Zobrazování dat **********/
//Odkaz: https://kodim.cz/kurzy/daweb/js2/server-komunikace/cv-zobrazovani-dat 
//1) Filmy
const renderMovieList = (movieItems) => {
    const movieList = document.querySelector(`.movie-list`)
    movieList.innerHTML = movieItems.map(movie => 
                                        `
                                        <li class="movie-detail">
                                        <div class="movie-poster">
                                          <img 
                                            src="${movie.posterUrl}"
                                            alt="${movie.title}"
                                          />
                                        </div>
                                        <div class="movie-info">
                                          <h2 class="movie-title">${movie.title}</h2>
                                          <div class="movie-year">Rok vydání: ${movie.year}</div>
                                          <div class="movie-link">
                                            <a href="${movie.url}" target="_blank">Odkaz na CSFD</a>
                                          </div>
                                        </div>
                                      </li>
                                        `
                                        ).join(``)
}


fetch(`https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies`)
.then(response => response.json())
.then(data => {
    renderMovieList(data)
})



//2) Filmy dle žánrů
fetch(`https://apps.kodim.cz/daweb/trening-api/apis/movie-api/genres`)
.then(response => response.json())
.then(data => {
  c(data)
    renderGenresList(data)
})


const renderGenresList = (genreItems) => {
    const genresSelect = document.querySelector(`#select-genre`)

    //Původní, ale zbytečně komplikované:
/*     const genres = genreItems.map(genre => genre.genres  ) //Vytvoříme pole polí, kdy jednotlivá vnořená pole obsahují ŽÁNRY
                             .flatMap(pole => pole) //Z pole polí vytvoříme jedno pole, kde budou elementy těch vnořených polí

    const filteredGenres = genres.filter( (element, index) => genres.indexOf(element) === index ) //Z pole vyfiltruje duplicity */

    //Tak, jak to mělo být od začátku:
    genresSelect.innerHTML = genreItems.map(genre => `<option>${ (genre).slice(0, 1).toUpperCase() }${genre.slice(1)}</option>`)
}





const chooseGenreMovie = (event) => {
    event.preventDefault()

    const genresSelect = document.querySelector(`#select-genre`)
    c(genresSelect.value)

    //Původní verze
    /* const selectedOption = genresSelect.options[genresSelect.selectedIndex] */ //Zjistíme, která položka z options je vybrána. Zjistíme, jaký má index (abychom znali textový obsah)
    /* const result = selectedOption.textContent.toLowerCase() */

    //Nová, jednodušší verze
    const result = genresSelect.value.toLowerCase()
    chosenMovies(result)
}
const movieType = document.querySelector(`#movieType`)
movieType.addEventListener("click", chooseGenreMovie)



const chosenMovies = (movies) => {
    const movieList = document.querySelector(`.movie-list`)
    
    fetch(`https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies?genre=${movies}`)
    .then(response => response.json())
    .then(data => 
         movieList.innerHTML = data.map(movie => 
                                        `
                                    <li class="movie-detail">
                                        <div class="movie-poster">
                                          <img 
                                            src="${movie.posterUrl}"
                                            alt="${movie.title}"
                                          />
                                        </div>
                                        <div class="movie-info">
                                          <h2 class="movie-title">${movie.title}</h2>
                                          <div class="movie-year">Rok vydání: ${movie.year}</div>
                                          <div class="movie-link">
                                            <a href="${movie.url}" target="_blank">Odkaz na CSFD</a>
                                          </div>
                                        </div>
                                    </li>
                                        `
                                       ).join(``)
)}
































