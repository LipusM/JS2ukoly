const c = console.log.bind(document)

/**********  Cvičení: Vyhledávání, dotazování  **********/
//Odkaz: https://kodim.cz/kurzy/daweb/js2/func-data/cv-vyhledavani-dotazovani 

const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56]

const names = [
  'Petr',
  'Jana',
  'Pavel',
  'Zuzana',
  'Eva',
  'Adam',
  'Onyx',
  'Alex',
]

const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 22, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
  { name: 'Alex', age: 29, gender: 'androgyne' },
]

const items = [
  {
    id: 'MFJSFr',
    product: 'Rohlíky',
    amount: '10',
    done: false,
  },
  {
    id: 'wvsbDD',
    product: 'Máslo',
    amount: '500 g',
    done: true,
  },
  {
    id: 'm0CccN',
    product: 'Šunka',
    amount: '200 g',
    done: true,
  },
]

//a)
// persons.forEach( vek => c(vek.age))
// c("MEZERA")

//b) 
/* names.forEach((jmeno) => {
    c(jmeno[0])
}) */
// names.forEach (  jmeno => c(jmeno[0])  )
// c("MEZERA")

//c) 
// const osoba = persons.find(  osoba => osoba.name === `Adam`  )
// c(osoba.name)
// c("MEZERA")

//d) 
// const person = persons.find (  person => person.name === `Onyx`  )
// c(person.gender)
// c("MEZERA")

//e)
// const person1 = persons.findIndex ( person1 => person1.age === 22 && person1.gender === "male" ) 
// c(person1)
// c("MEZERA")

//f)
// const numbers1 = numbers.some( numbers1 => numbers1 % 11 === 0)
// c(numbers1)
// c("MEZERA")

//g)
// const person2 = persons.some( person2 => person2.gender !== "male" && person2.gender !== "female" )
// c(person2)
// c("MEZERA")

//h)
// const person3 = persons.every( person3 => person3.age > 18 )
// c(person3)
// c(`MEZERA`)








/**********  Cvičení: Transformace, agregace **********/
//Odkaz: https://kodim.cz/kurzy/daweb/js2/func-data/cv-transformace-agregace 
//1) Transformace
//a)
// const evenNumbers = numbers.filter( number => number % 2 === 0)
// c(evenNumbers)
// c(`MEZERA`)

//b)
// const adults = persons.filter( adult => adult.age > 18 )
// c(adults)
// c(`MEZERA`)

//c)
// const dividedByThree = numbers.map( number => number/3 )
// c(dividedByThree)
// c(`MEZERA`)

//d)
// c(

//   numbers.map( number => `${number}` )
// )
// c(`MEZERA`)

//e)
// let email = persons.map( person => `${person.name}.@gmail.com.`.toLowerCase() )     
// c(email)
// c(`MEZERA`)

//f)
// const list = persons.map( person => `<li>${person.name} (${person.age})</li>` )
// c(list)
// c(`MEZERA`)


//2) Agregace
const listPeople = document.querySelector("#listPeople")

const people = persons
                      .filter( person => person.age > 18 )
                      .map( person => {

                        if(person.gender === "male"){
                          return(
                            `
                              <li class="male">${person.name} (${person.age})</li>
                            `
                          )
                        }
                        else if(person.gender === "female"){
                          return(
                            `
                              <li class="female">${person.name} (${person.age})</li>
                            `
                          )
                        }
                        else {
                          return(
                            `
                              <li class="nonbinary">${person.name} (${person.age})</li>
                            `
                          )
                        }
                      })

listPeople.innerHTML = people.join("")






/**********  Doporučené úložky na doma **********/
//Odkaz: https://kodim.cz/kurzy/daweb/js2/func-data/cv-nadoma
//1) Zpracování dat
//a)
names.forEach( name => {
  c(
    name.slice(-1)
  )
})

//b)
const names1 = names.filter ( names => names.length > 4 )
c(
  names1
)

//c)
const persons1 = persons.filter ( persons => persons.age >= 18 && persons.gender === `male`)
console.table(
  persons1
)

//d)
/* const persons2 = persons.every ( persons => (persons.age >= 18 && persons.gender === `male` ) || (persons.age >= 18 && persons.gender === `female`) ) */
const persons2 = persons.every (person => (person.gender === `male` || person.gender === `female`) && (person.age >= 18))
c(
  persons2
)


//e)
let soucet = 0
let prumer = 0
numbers.forEach( number => {
  soucet += number

})

c(
  prumer = Number((soucet / numbers.length).toFixed(2))
 )

//2) Nákupní seznam
const shoppingListPrimary = document.querySelector(".shopping-list")

const shoppingListSecondary = items.map( item => 
  
                                        `
                                          <li class="item posunuti">
                                            <div class="item__name">${item.product}</div>
                                            <div class="item__amount">${item.amount}</div>
                                          </li>
                                        `
                                       ).join("")
shoppingListPrimary.innerHTML = shoppingListSecondary




