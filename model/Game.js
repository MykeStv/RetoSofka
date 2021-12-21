//@ts-check
import { Question } from './Question.js';

export class Game {
    points = 0;
    questionIndex = 0;

    gameOver = false;

    /**
     * 
     * @param {Question[]} questions 
     */
     constructor(questions) {
        this.questions = questions;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    /**
     * 
     * @param {string} answer
     */
    guess(answer) {
        console.log(answer);

        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.points += (100 + this.questionIndex*50);
            this.questionIndex++;
        } else {
            this.points = 0;
            this.gameOver = true;
        }

        
    }
    

    isEnded(){
        if (this.questions.length === this.questionIndex || this.gameOver){
            return true;
        }
    }
}