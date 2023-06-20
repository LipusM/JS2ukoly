const c = console.log.bind(document)

/********** Cvičení: Hodnoty, proměnné, podmínky, funkce **********/
//Cvičení zde: https://kodim.cz/kurzy/daweb/js2/opakovani/rodna-cisla 

//Skládá se z 10ti čísel RRMMDD. U žen se ka každému měsící narození připočte 50
//Musí být beze zbytku dělitelné 11
//Zbytek rodného čísla odlišuje osoby narozené ve stejný den
//RČ může tedy vypadat takhle: 7060201236

//1)Rodná čísla
let delkaCisla = null
let celeCislo = null
let delitelnost = null

let valid = false

//Moje původní
/* const functionRodneCislo = (rodneCislo) => {

    if(rodneCislo.length === 10){
        c(`Zadané rodné číslo má správně deset znaků`)
        delkaCisla = true
    }
    else{
        c(`Uživatel zadal rodné číslo neplatné délky`)
    }

    rodneCislo = Number(rodneCislo)
    if( Number.isInteger(rodneCislo) ){
        c(`Rodné číslo je celé číslo.`)
        celeCislo = true
    }
    else{
        c(`Rodné číslo obsahuje nepovolené znaky.`)

    }

    if(rodneCislo % 11 === 0){
        c(`Rodné číslo je dělitelné 11`)
        delitelnost = true
    }
    else{
        c(`Rodné číslo není dělitelné 11`)
    } 

    if(delkaCisla && celeCislo && delitelnost){
        c(`Zadané rodné číslo je platné!`)
    }
    else{
        c(`Uživatel zadal neplatné rodné číslo!`)
    }

}

functionRodneCislo(`7060201236`) */



//Moje nové
/* const functionRodneCislo = (rodneCislo) => {

    if(rodneCislo.length === 10){
        c(`Zadané rodné číslo má správně deset znaků.`)

        if( Number.isInteger(Number(rodneCislo)) ){
            c(`Rodné číslo je celé číslo.`)

            if(rodneCislo % 11 === 0){
                c(`Rodné číslo je dělitelné 11.`)
                c(`Zadané rodné číslo je platné.`)
            }
            else{
                c(`Rodné číslo není dělitelné číslem 11.`)
                c(`Uživatel zadal neplatné rodné číslo.`)
            }
        }
        else{
            c(`Rodné číslo obsahuje nepovolené znaky.`)
        }

    }
    else{
        c(`Uživatel zadal rodné číslo neplatné délky.`)
    }

} */


// functionRodneCislo(`7060201246`)



//2) Platnost jako funkce
/* const rodnaCislaKOtestovani = ['123', 'nepovím', '7060201236', '123456789123456789', '9062185440', '123č56q8y7']
const functionRodneCislo = (rodneCislo) => {

    if(rodneCislo.length !== 10){
        return `invalidLength`
    }

    if( !Number.isInteger(Number(rodneCislo)) ){
        return `notANumber`
    }

    if(rodneCislo % 11 !== 0){
        return `failedChecksum`
    }

    return `ok`


}

rodnaCislaKOtestovani.forEach((rodneCislo) => {
    functionRodneCislo(rodneCislo)
})
 */



/********** Cvičení: Pole, cykly, objekty **********/
//Cvičení zde: https://kodim.cz/kurzy/daweb/js2/opakovani/cv-pole-cykly-objekty 

//1) Kontrola cifer
//a), b)
/*  const digits = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`] */

/*  const functionIsDigit = (digitKonkretni) => {

    digitKonkretni.forEach((digit) => {
        if(digitKonkretni.includes(digit)){
            return true
        }
            return false
    })

}  */

/* functionIsDigit(digits)  */

//c) 
/*  const digits = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`] */

/*  const logInvalidCharacters = (retezec) => {
    retezec = retezec.split(``)
    c(retezec)

    retezec.forEach((hodnotaRetezec) => {
      if(!digits.includes(hodnotaRetezec)){
          c(hodnotaRetezec)
      }  
    })

} */

/* logInvalidCharacters(`123č56q8y7`)  */

//2) Detailní kontrola cifer
// const digits = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]
// let result = []


/* const validateCharacters = (characters) => {
    characters = characters.split(``)

    characters.forEach((specificCharacter) => {

        let objectArray = {
            char: ``,
            digit: ``,
        }

        objectArray.char = specificCharacter
        
        if( digits.includes(specificCharacter) ){
            objectArray.digit = true
        }
        else{
            objectArray.digit = false
        }
        result.push(objectArray)
    })

    c(result)
    return result
} */

// validateCharacters('123č56q8y7')





/********** Cvičení: DOM a události **********/
//Cvičení zde: https://kodim.cz/kurzy/daweb/js2/opakovani/cv-dom-udalosti 
// const kontrolaRC = document.querySelector("#kontrolaRC")
// const vstupRC = document.querySelector("#vstupRC")

/* const checkBirthID = (birthID) => {

    if(birthID.length !== 10){
        return `invalidLength`
    }

    if( !Number.isInteger(Number(birthID)) ){
        return `notANumber`
    }

    if(birthID % 11 !== 0){
        return `failedChecksum`
    }

    const vysledek = `ok`
    return vysledek

}
 */


// const vysledekRC = document.querySelector("#vysledekRC")

/* const kontrolaRodnehoCisla = (event) => {
    event.preventDefault()

    const kontrola = checkBirthID(vstupRC.value)

    if(kontrola === "ok"){
        vysledekRC.textContent = `V pořádku.`
        return
    }
    vysledekRC.textContent = `V rodném čísle jsou chyby.`
} */

// kontrolaRC.addEventListener("submit", kontrolaRodnehoCisla)




/********** Cvičení: innerHTML **********/
//Cvičení zde: https://kodim.cz/kurzy/daweb/js2/opakovani/cv-innerhtml
const digits = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]

 const validateCharacters = (characters) => {
    characters = characters.split(``)
    let result = []

    characters.forEach((specificCharacter) => {

        let objectArray = {
            char: ``,
            digit: ``,
        }

        objectArray.char = specificCharacter
        
        if( digits.includes(specificCharacter) ){
            objectArray.digit = true
        }
        else{
            objectArray.digit = false
        }
        result.push(objectArray)
    })

    const vysledek = result
    return vysledek
}


const kontrolaRC = document.querySelector("#kontrolaRC")
const vstupRC = document.querySelector("#vstupRC")

const checkBirthID = (birthID) => {

    if(birthID.length !== 10){
        return `invalidLength`
    }

    if( !Number.isInteger(Number(birthID)) ){
        return `notANumber`
    }

    if(birthID % 11 !== 0){
        return `failedChecksum`
    }

    const vysledek = `ok`
    return vysledek

}
 
const cislaRC = document.querySelector("#cislaRC")

const kontrolaRodnehoCisla = (event) => {
    event.preventDefault()
    cislaRC.innerHTML = ""


    //Kontrola, zda je RC v pořádku
    const kontrola = checkBirthID(vstupRC.value)
    if(kontrola === "ok"){
        vysledekRC.textContent = `V pořádku.`
    }
    else{
        vysledekRC.textContent = `V rodném čísle jsou chyby.`
    }


    //Procházení jednotlivých hodnot RC a jejich obarvování
    const obarveniRC = validateCharacters(vstupRC.value)

    obarveniRC.forEach((cislo) => {
       const obarveni = document.createElement("div")
        obarveni.textContent = cislo.char

        if(cislo.digit === true){
            
            obarveni.classList.add("spravne")
        }
        else{
            
            obarveni.classList.add("spatne")
        }

        cislaRC.appendChild(obarveni)
    })



}

kontrolaRC.addEventListener("submit", kontrolaRodnehoCisla)







//Správné RC: 7060201236


