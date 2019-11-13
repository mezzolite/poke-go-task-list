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
            location.reload();
        }
    })
}

function specificTeamCard(team){
    const teamName = document.querySelector('#teamHeader')
    const teamDescription = document.createElement('h4')
    const teamLeader = document.createElement('h4')
    const teamLeaderImage = document.createElement('img')

    taskListContainer.style = `background-color: ${team.team_color}`
    taskForm.style = `background-color: ${team.team_color}`
    teamName.innerText = `Team ${team.name}` 
    teamDescription.innerText = team.description 
    teamLeader.innerText = `Team Leader: ${team.leader}`
    teamLeaderImage.src = team.leader_image

    const leaderCard = document.createElement('div')
    leaderCard.className = "leaderCard"

    teamContainer.append(teamDescription, leaderCard)
    leaderCard.append(teamLeader, teamLeaderImage)
}

function createTaskCard(team){
    team.tasks.map(taskAttributes)
}

function taskAttributes(task){
    const taskDiv = document.createElement("div")
    const taskLi = document.createElement("input")
    taskLi.id = "taskList"
    const taskList = document.createElement("label")
    taskList.for = "taskList"
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    const edit = document.createElement("a")
    edit.id = "editButton"
    edit.textContent = "Edit"
    edit.href = `task.html?id=${task.id}&edit=true`

    taskList.innerHTML = ` <a href=task.html?id=${task.id}>${task.name}</a>`
    taskLi.type = "checkbox"

    taskDiv.append(taskLi, taskList, deleteButton, edit)
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