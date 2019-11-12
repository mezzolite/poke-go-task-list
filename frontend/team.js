const params = new URLSearchParams(window.location.search)
const id = params.get('id')

const teamContainer = document.createElement('div')
teamContainer.className = "teamContainer"
const taskContainer = document.createElement('div')
taskContainer.className = "taskContainer"
document.body.append(teamContainer, taskContainer)


fetch(`http://localhost:3000/teams/${id}`)
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