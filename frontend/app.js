const cardContainer = document.createElement('div')
cardContainer.className = 'cardContainer'
document.body.append(cardContainer)
const teamId = document.querySelector('#teamId')
const signUpButton = document.querySelector('.signUpButton')
const logInButton = document.querySelector('.logInButton')
const signUpForm = document.querySelector('#userForm')
const logInForm = document.querySelector('#logInForm')
const logInInput = document.querySelector('#logInUsername')

const params = new URLSearchParams(window.location.search)
const error = params.get('error')
if (error){
    alert("Username already exists.")
}

fetch('http://localhost:3000/teams')
    .then(response => response.json())
    .then(createTeamCards)

fetch('http://localhost:3000/teams')
    .then(response => response.json())
    .then(getTeams)
    .then(showSignUpForm)

function showSignUpForm(){
    signUpButton.addEventListener('click', (event) => {
        signUpForm.style.display = "block"
    })
}

logInButton.addEventListener('click', (event) => {
    logInForm.style.display = "block"
})
    
logInForm.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => users.map(user => {
    if (user.username === logInInput.value){
        window.location = `http://localhost:3001/team.html?id=${user.team_id}`
    }
    else {
        alert("Username does not exist.")
        window.location = "http://localhost:3001"
    }
}))
})

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
