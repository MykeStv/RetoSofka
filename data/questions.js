import { Question } from '../model/Question.js';
import { data } from './data.js';

// map: me permite recorrer el array y modificarlo, este devuelte el array
export const questions = data.map((element) => {
    const question = element[Math.floor(Math.random() * element.length)]
    return new Question(question.question, question.choices, question.answer)
})