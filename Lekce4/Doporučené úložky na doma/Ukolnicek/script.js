const c = console.log.bind(document)

import { Task } from "./Task/index.js"

//Fetchování dat pro fci renderTasks a její volání. Zavolá se hned po načtení stránky.
fetch(`https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks`)
.then(response => response.json())
.then(data => {
    data.map(data => renderTasks({
        name: data.name,
        due: data.due,
        done: data.done,
    }))
})

//Definice fce renderTasks
const toDoTasks = document.querySelector(".todo__tasks")
const renderTasks = (tasks) => {
    toDoTasks.innerHTML += Task(tasks)
}


//Fce pro zaškrtnutí a odškrtnutí checkboxu
const checkBox = (event) => {

    //Zaškrtnutí checkboxu
    if(event.target.checked){
        toDoTasks.innerHTML = ``

        fetch(`https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false`)
        .then(response => response.json())
        .then(data => {
            data.map(data => renderTasks({
                name: data.name,
                due: data.due,
                done: data.done,
            }))
        })
    }
    //Odškrtnutí checkboxu
    else{
        toDoTasks.innerHTML = ``

        fetch(`https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks`)
        .then(response => response.json())
        .then(data => {
            data.map(data => renderTasks({
            name: data.name,
            due: data.due,
            done: data.done,
            }))
        })
    }

}

const checkBoxUndone = document.querySelector("#checkbox-undone")
checkBoxUndone.addEventListener("click", checkBox)

