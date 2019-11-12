const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const team_id_url = `http://localhost:3000/teams/${id}`

const teamContainer = document.createElement('div')
teamContainer.className = "teamContainer"
const taskContainer = document.createElement('div')
taskContainer.className = "taskContainer"
document.body.append(teamContainer, taskContainer)


fetch(team_id_url)
    .then(response => response.json())
    .then(team => {
        const teamName = document.createElement('h2')
        const teamDescription = document.createElement('h4')
        const teamLeader = document.createElement('h4')
        const teamLeaderImage = document.createElement('img')

        teamName.innerText = `Team ${team.name}` 
        teamDescription.innerText = team.description 
        teamLeader.innerText = `Team Leader: ${team.leader}`
        teamLeaderImage.src = team.leader_image

        const leaderCard = document.createElement('div')
        leaderCard.className = "leaderCard"
        
        teamContainer.append(teamName, teamDescription, leaderCard)
        leaderCard.append(teamLeader, teamLeaderImage)
    })

fetch(team_id_url)
    .then(response => response.json())
    .then(createCard)

function createCard(team){
    const taskListContainer = document.createElement("div")
    const taskHeader = document.createElement("h3")
    taskHeader.innerText = "Task List"
    team.tasks.map(task => {
        const tasksUl = document.createElement("ul")
        const taskLi = document.createElement("li")

        taskLi.innerText = task.name

        tasksUl.appendChild(taskLi)
        taskListContainer.appendChild(tasksUl)
    })
    document.body.append(taskHeader,taskListContainer)
}