const cardContainer = document.createElement('div')
cardContainer.className = "cardContainer"
document.body.append(cardContainer)

fetch("http://localhost:3000/teams")
    .then(response => response.json())
    .then(createTeamCards)

function createTeamCards(teams){
    teams.map(teamsCardAttributes)
}

function teamsCardAttributes(team){
    const teamName = document.createElement('h2')
    const teamImage = document.createElement('img')
    const teamButton = document.createElement('button')

    teamName.innerText = `Team ${team.name}` 
    teamImage.src = team.image
    teamButton.innerHTML = `<a href=team.html?id=${team.id}>Enter Team ${team.name}</a>`

    const teamCard = document.createElement('div')
    teamCard.className = "teamCard"
    
    teamCard.append(teamName, teamImage, teamButton)
    cardContainer.append(teamCard)
}    
