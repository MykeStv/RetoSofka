import { questions } from './data/questions.js';
import { Game } from './model/Game.js';
import { UI } from './model/UI.js';



const renderPage = (game, ui) => {
    
    

    if(game.isEnded()){
        
        ui.showScore(game.points);
        const btnSave = document.getElementById('btnSave');
        // btnSave.addEventListener('click', this.savePlayer(score))
        btnSave.onclick = () => {
            ui.savePlayer(game.points)
        }
        
        //vuelve a iniciar la pagina
        document.getElementById('playAgain').onclick = () => {
            location.reload();
        }

    } else {
        
        ui.showRound(game.questionIndex + 1);
        ui.showPoints(game.points);
        ui.showQuestions(game.getQuestionIndex().text);
        ui.showChoices(game.getQuestionIndex().choices, (currentChoice) => {
            game.guess(currentChoice);
            renderPage(game, ui);
        });
        ui.withdraw(() => {
            game.gameOver = true
            renderPage(game, ui)
        })
        
        ui.showProgress(game.questionIndex + 1, game.questions.length, game.points);
    }

}


function main() {

    const game = new Game(questions);
    const ui = new UI();

    renderPage(game, ui);

    
}

main();