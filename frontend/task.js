const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const edit = params.get('edit')

const task_id_url = `http://localhost:3000/tasks/${id}`

const editTask = document.querySelector("#edit")
const nameInput = document.querySelector("#name")
const descriptionInput = document.querySelector("#description")
const rewardInput = document.querySelector("#reward")
const editForm = document.querySelector("#editForm")
const attributeContainer = document.createElement("div")
attributeContainer.id = "taskContainer"

if(edit){
    editForm.style.display = "block"
}

fetch(task_id_url)
    .then(parseJson)
    .then(taskAttributes)

fetch(task_id_url)
    .then(parseJson)
    .then(editTaskAttributes)



function parseJson(response){
    return response.json()
}
    
function taskAttributes(task){
    const nameHeader = document.createElement("h3")
    nameHeader.id = "nameHeader"
    const descriptionHeader = document.createElement("h4")
    descriptionHeader.id = "descriptionHeader"
    const rewardHeader = document.createElement("h4")
    rewardHeader.id = "rewardHeader"

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

    editEvent(task)
}

function editEvent(task){
    editTask.addEventListener("click", event => {
        event.preventDefault()

        const newName = document.querySelector("#nameHeader")
        const newDescription = document.querySelector("#descriptionHeader")
        const newReward = document.querySelector("#rewardHeader")

        backEndPatchFetch()

        .then(() => window.location = `http://localhost:3001/task.html?id=${task.id}&edit=true`)
        newName.textContent = task.name
        newDescription.textContent = task.description
        newReward.textContent = task.reward
    })
}

function backEndPatchFetch(){
    return fetch(task_id_url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: nameInput.value,
            description: descriptionInput.value,
            reward: rewardInput.value
        })
    })
}
