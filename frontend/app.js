const cardContainer = document.createElement('div')
cardContainer.className = "cardContainer"
document.body.append(cardContainer)

fetch("http://localhost:3000/teams")
    .then(response => response.json())
    .then(teams => teams.map(team => {
        const teamName = document.createElement('h2')
        const teamImage = document.createElement('img')
        const teamButton = document.createElement('button')

        teamName.innerText = `Team ${team.name}` 
        teamImage.src = team.image 
        teamButton.innerText = `Enter Team ${team.name}!`

        const teamCard = document.createElement('div')
        teamCard.className = "teamCard"
        
        teamCard.append(teamName, teamImage, teamButton)
        cardContainer.append(teamCard)
    })
    )
    
