const c = console.log.bind(document)

export const Task = (props) => {

    const {name, due, done} = props

    let status = done
    if(status){
        status = "✓"
    }
    else{
        status = ""
    }

    return`
    <div class="task">
        <div class="task__body">
            <div class="task__name">${name}</div>
            <div class="task__due">${due}</div>
        </div>
        <div class="task__done">${status}</div>
    </div>
    `
}


