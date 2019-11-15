const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const edit = params.get('edit')

const task_id_url = `http://localhost:3000/tasks/${id}`

const editTask = document.querySelector("#edit")
const nameInput = document.querySelector("#name")
const descriptionInput = document.querySelector("#description")
const rewardInput = document.querySelector("#reward")
const rewardImageInput = document.querySelector("#rewardImage")
const editForm = document.querySelector("#editForm")

const attributeContainer = document.querySelector("#attributeContainer")

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
    const descriptionHeader = document.createElement("h3")
    descriptionHeader.id = "descriptionHeader"
    const rewardHeader = document.createElement("h3")
    rewardHeader.id = "rewardHeader"
    const teamHomeImage = document.createElement("img")
    teamHomeImage.id = "teamHomeImage"


    nameHeader.textContent = `Task: ${task.name}`
    descriptionHeader.textContent = `Description: ${task.description}`
    rewardHeader.textContent = `Reward: ${task.reward}`
    teamHomeImage.src = "https://vignette.wikia.nocookie.net/pokemongo/images/3/3b/Gym_Marker_Red.png/revision/latest?cb=20160801180325"

    if(task.reward_image === null || task.reward_image === ""){
        attributeContainer.append(nameHeader, descriptionHeader, rewardHeader)
    } else {
        const rewardImage = document.createElement("img")
        rewardImage.id = "rewardImageTag"
        rewardImage.src = task.reward_image
        attributeContainer.append(nameHeader, descriptionHeader, rewardHeader, rewardImage)
    }

    document.body.append(teamHomeImage)

    teamHomeImage.addEventListener("click", () => {
        document.location.href = `http://localhost:3001/team.html?id=${task.team_id}`
    })
}

function editTaskAttributes(task){
    nameInput.value = task.name
    descriptionInput.value = task.description
    rewardInput.value = task.reward
    rewardImageInput.value = task.reward_image

    editEvent(task)
}

function editEvent(task){
    editTask.addEventListener("click", event => {
        event.preventDefault()

        backEndPatchFetch()
        .then(response => response.json())
        .then(task => window.location = `http://localhost:3001/task.html?id=${task.id}&edit=true`)
        nameInput.textContent = task.name
        descriptionInput.textContent = task.description
        rewardInput.textContent = task.reward
        rewardImageInput.textContent = task.reward_image
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
            reward: rewardInput.value,
            reward_image: rewardImageInput.value
        })
    })
}
