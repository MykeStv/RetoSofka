const scoreList = document.getElementById('scoreList');
const scoreStorage = JSON.parse(localStorage.getItem('players')) || [];

scoreList.innerHTML = scoreStorage.map((player) => {
    return `<li class="score-element">${player.name} - ${player.points}</li>`
}).join('');

//Elimina toda la información del local storage
function deleteScores() {
    localStorage.clear();
    location.reload();
}
