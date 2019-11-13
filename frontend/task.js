const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const task_id_url = `http://localhost:3000/tasks/${id}`
const editTask = document.querySelector("#edit")

fetch(task_id_url)
    .then(response => response.json())
    .then()

fetch(`http://localhost:3000/teams`)
    .then(response => response.json())
    .then(getTeams)

function taskCard(tasks){
    tasks.map()
}

function taskAttributes(task){

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