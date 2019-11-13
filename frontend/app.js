const cardContainer = document.createElement('div')
cardContainer.className = "cardContainer"
document.body.append(cardContainer)
const teamId = document.querySelector("#teamId")
const userForm = document.getElementById('userForm')

fetch("http://localhost:3000/teams")
    .then(response => response.json())
    .then(createTeamCards)

fetch(`http://localhost:3000/teams`)
    .then(response => response.json())
    .then(getTeams)

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

function getTeams(teams){
    return teams.map(teamOption)
}

function teamOption(team){
    const option = document.createElement("option")

    option.textContent = team.name
    option.value = team.id

    teamId.append(option)
}

function changeForm(){
    
    const nav = document.querySelector('nav')
    nav.innerHTML = ''
}


// document.addEventListener("submit", (e) => {
//     userForm.onsubmit()


    
// })

