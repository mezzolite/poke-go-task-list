const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const edit = params.get('edit')
console.log(edit)

const task_id_url = `http://localhost:3000/tasks/${id}`

const editTask = document.querySelector("#edit")
const nameInput = document.querySelector("#name")
const descriptionInput = document.querySelector("#description")
const rewardInput = document.querySelector("#reward")
const editForm = document.querySelector("#editForm")

if(edit){
    editForm.style.display = "block"
}

fetch(task_id_url)
    .then(parseJson)
    .then(taskAttributes)

fetch(task_id_url)
    .then(parseJson)
    .then(editTaskAttributes)


// fetch(`http://localhost:3000/teams`)
//     .then(parseJson)
//     .then(getTeams)

function parseJson(response){
    return response.json()
}
    
function taskAttributes(task){
    const attributeContainer = document.createElement("div")
        attributeContainer.className = "taskContainer"
    const nameHeader = document.createElement("h3")
    const descriptionHeader = document.createElement("h4")
    const rewardHeader = document.createElement("h4")

    nameHeader.textContent = `Task name: ${task.name}`
    descriptionHeader.textContent = `Description: ${task.description}`
    rewardHeader.textContent = `Reward: ${task.reward}`
    
    attributeContainer.append(nameHeader, descriptionHeader, rewardHeader)
    document.body.appendChild(attributeContainer)
}

function editTaskAttributes(task){
    nameInput.value = task.name
    descriptionInput.value = task.description
    rewardInput.value = task.reward

    editTask.addEventListener("click", event => {
        event.preventDefault()

        fetch(task_id_url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value,
                description: descriptionInput.value,
                reward: rewardInput.value,
            })
        })
        .then(() => window.location = `http://localhost:3001/task.html?id=${task.id}&edit=true`)
    })
}

// function getTeams(teams){
//     return teams.map(teamOption)
// }
    
// function teamOption(team){
//     const option = document.createElement("option")
    
//     option.textContent = team.name
//     option.value = team.id
    
//     teamId.append(option)
// }