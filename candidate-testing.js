const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // //define variable called 'candidateName' w/ initial value of empty string
let candidateName = "";
//TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
//defined question variable
let correctAnswer = 'Sally Ride';
//defined correctAnswer variable
let candidateAnswer = '';
//defined candidateAnswer
let questions = ['Who was the first American woman in space? ', 'True or False: 5000 meters = 5 kilometers. ', '(5+3)/2*10) = ? ', 'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ', 'What is the minimum crew size for the ISS? '];

let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];

//questions & correctAnswers are defined as empty arrays and filled with info in table
let candidateAnswers = [];

let score = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    candidateName = input.question("Candidate name:  ");
};
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    // answer = input.question(question);
    // candidateAnswer = console.log(answer);
    for(let i = 0; i < questions.length; i++){
        answer = input.question(`${i + 1}) ${questions[i]} \nYour answer: `)
        console.log(`Correct Answer: ${correctAnswers[i]}\n`)
        candidateAnswers.push(answer)
        //changed 'prompt' to 'answer to avoid confusion'
    }
        // console.log(candidateAnswers)
}
//removed unneccessary variable

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
    for (let j = 0; j < questions.length; j++){
        if (correctAnswers[j].toLowerCase() === candidateAnswers[j].toLowerCase()){
                score += 1
        }
    //   console.log(score)
    }

    let grade = score/questions.length*100;
    let status = 'FAILED';

    if(grade >= 80){
        status = 'PASSED'
        } 
    console.log(`>>> Overall Grade: ${grade}% (${score} of 5 responses correct) <<<`)
    console.log(`>>> Status: ${status} <<<`)
    return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};