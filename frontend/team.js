const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const team_id_url = `http://localhost:3000/teams/${id}`

const teamContainer = document.querySelector("#teamContainer")
const teamId = document.querySelector("#teamId")
const taskListContainer = document.querySelector("#taskListContainer")
const taskHeader = document.createElement("h3")
taskHeader.innerText = "Task List"
const tasksUl = document.createElement("ul")

const taskForm = document.querySelector("#taskForm")
const taskContainer = document.getElementById("#taskContainer")

fetch(team_id_url)
    .then(parseJson)
    .then(specificTeamCard)

fetch(team_id_url)
    .then(parseJson)
    .then(createTaskCard)

fetch(`http://localhost:3000/teams`)
    .then(parseJson)
    .then(getTeams)

function parseJson(response){
    return response.json()
}

if (document.addEventListener) {
    window.addEventListener('pageshow', function (event) {
        if (event.persisted || window.performance && 
            window.performance.navigation.type == 2) 
        {
            location.reload()
        }
    })
}

function specificTeamCard(team){
    const teamName = document.querySelector('#teamHeader')
    const teamDescription = document.createElement('h4')
    const teamLeader = document.createElement('h4')
    const teamLeaderImage = document.createElement('img')
    const homeImage = document.createElement('img')
    homeImage.id = "homeImage"

    taskListContainer.style = backgroundColor(team)
    taskForm.style = backgroundColor(team)

    teamName.innerText = `Team ${team.name}` 
    teamDescription.innerText = team.description 
    teamLeader.innerText = `Team Leader: ${team.leader}`
    teamLeaderImage.src = team.leader_image
    homeImage.src = "https://vignette.wikia.nocookie.net/pokemongo/images/3/3b/Gym_Marker_Red.png/revision/latest?cb=20160801180325"

    const leaderCard = document.createElement('div')
    leaderCard.className = "leaderCard"

    teamContainer.append(teamDescription, leaderCard, homeImage)
    leaderCard.append(teamLeader, teamLeaderImage)

    homeImage.addEventListener("click", () => {
        document.location.href = "http://localhost:3001/"
    })
}


function backgroundColor(team){
    return `background-color: ${team.team_color}`
}

function createTaskCard(team){
    team.tasks.map(taskAttributes)
}

function taskAttributes(task){
    const taskDiv = document.createElement("div")
    taskDiv.className = "taskDiv"
    const taskLi = document.createElement("li")
    taskLi.id = "taskList"
    const deleteButton = document.createElement("button")
    deleteButton.id = "deleteButton"
    const edit = document.createElement("a")
    edit.id = "editButton"

    taskLi.innerHTML = ` <a href=task.html?id=${task.id}>${task.name}</a>`
    deleteButton.textContent = "Delete"
    edit.textContent = "Edit"
    edit.href = `task.html?id=${task.id}&edit=true`

    taskDiv.append(taskLi, deleteButton, edit)
    tasksUl.appendChild(taskDiv)
    taskListContainer.append(taskHeader, tasksUl)

    deleteEvent(deleteButton, task)
}

function deleteEvent(deleteButton, task){
    deleteButton.addEventListener("click", event => {
        event.target.parentNode.remove()
        backEndDeleteFetch(task)
    })
}

function backEndDeleteFetch(task){
    return fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "DELETE"
    })
}

function getTeams(teams){
    return teams.map(teamOption)
}

function teamOption(team){
    const option = document.createElement("option")

    option.textContent = team.name
    option.value = team.id

    teamId.append(option)
}