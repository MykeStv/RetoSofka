

export class UI {

    constructor(){}

   showRound(currentRound) {
        const round = document.getElementById('round');
        round.innerHTML = `Round ${currentRound}`;
   }

   showPoints(points) {
       const pointElement = document.getElementById('points');
       pointElement.innerHTML = `${points} PUNTOS`;
   }

    showQuestions(text) {
        const questionTitle = document.getElementById('question');
        questionTitle.innerHTML = text;
    }

    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        for (let i=0; i < choices.length; i++) {
            const button = document.createElement('button');
            button.addEventListener('click', () => callback(choices[i]));
            
            button.innerText = choices[i];
            button.className = 'btn-choice';

            choicesContainer.append(button);
        }
    }


    confirmAnswer(method) {
        const confirmar = document.getElementById('confirmar');
        confirmar.addEventListener('click', method);
    }
    //REVISAR
    showScore(score) {
        
        const titleElement = document.getElementById('round');
        titleElement.innerHTML = `Game Over`;

        const gameOverHTML = `
            <div class="result">
                <h2>Puntaje obtenido: ${score}</h2>
                <input type="text" id="name" placeholder="nombre">
                <button type="text" id="btnSave" disabled>Guardar</button>
            </div>
        `;
        const element = document.getElementById('card-body');
        element.innerHTML = gameOverHTML;


        const footerBtn = `
            <div class="result-btns">
                <button class="btn btn-back" type="text" id="playAgain">Volver a jugar</button>
                <a class="btn btn-home" href="./home.html" id="home">Inicio</a>
            </div>
        `;
        const elementFooter = document.getElementById('card-footer');
        elementFooter.innerHTML = footerBtn;



        let inputName = document.getElementById('name');
        const btnSave = document.getElementById('btnSave');
        inputName.addEventListener('keyup', () => {
            btnSave.disabled = !inputName.value;
        })
        
    }
    

    savePlayer(score) {

        let inputName = document.getElementById('name').value;
        
        let dataPlayer = {
            name: inputName,
            points: score
        }
        let list = [];

        //guarda los datos del jugador en el localStorage
        let getStorage = localStorage.getItem('players');
        if (getStorage === null){
            list = [];
        } else {
            list = JSON.parse(getStorage);
        }
        list.push(dataPlayer);
        localStorage.setItem('players', JSON.stringify(list));

        //Redirige a la pagina inicio despues de guardar los datos del jugador
        window.location.assign('./home.html');

    }

    showProgress(currentQuestion, total, points){
        const element = document.getElementById('progress');
        element.innerHTML = `Pregunta ${currentQuestion} / ${total}`;

        const nextPoints = document.getElementById('next-point');
        let prize = 100;
        if ( currentQuestion > 1) {
            prize += points + (currentQuestion-1) * 50;
        }

        nextPoints.innerHTML = `Próximo puntaje : ${prize}`
    }

    withdraw(method){
        const buttonWithdraw = document.getElementById('withdraw');
        buttonWithdraw.addEventListener('click', () => method());
    }

    
}