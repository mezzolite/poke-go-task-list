const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const team_id_url = `http://localhost:3000/teams/${id}`

const teamContainer = document.querySelector("#teamContainer")
const teamId = document.querySelector("#teamId")
const taskListContainer = document.querySelector("#taskListContainer")
const taskHeader = document.createElement("h3")
taskHeader.innerText = "Task List"
const tasksUl = document.createElement("ul")


fetch(team_id_url)
    .then(response => response.json())
    .then(specificTeamCard)

fetch(team_id_url)
    .then(response => response.json())
    .then(createTaskCard)

fetch(`http://localhost:3000/teams`)
    .then(response => response.json())
    .then(getTeams)

function specificTeamCard(team){
    const teamName = document.querySelector('#teamHeader')
    const teamDescription = document.createElement('h4')
    const teamLeader = document.createElement('h4')
    const teamLeaderImage = document.createElement('img')

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

    taskList.innerText = ` ${task.name}`
    taskLi.type = "checkbox"

    taskDiv.append(taskLi, taskList)
    tasksUl.appendChild(taskDiv)
    taskListContainer.append(taskHeader, tasksUl)
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