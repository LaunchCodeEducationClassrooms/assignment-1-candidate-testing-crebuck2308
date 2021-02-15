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
let questions = [
    'Who was the first American woman in space? ', 
    'True or False: 5000 meteres = 5 kilometers. ', 
    '(5+3)/2*10) = ? ', 
    'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ', 
    'What is the minimum crew size fo the ISS? ',
    ];

let correctAnswers = [
    'Sally Ride',
    'True',
    '40',
    'Trajectory',
    '3'
    ];

//questions & correctAnswers are defined as empty arrays and filled with info in table
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    candidateName = input.question("Please enter your name: ");
};
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    prompt = input.question(question);
    candidateAnswer = console.log(prompt);
    for(let i = 0; i < questions.length; i++){
        prompt = input.question(`${i+1}) `+ questions[i])
        candidateAnswers.push(prompt);
        // console.log('\n')
    }
    // console.log(candidateAnswers)
}

let numCorrect = 0
let numQuestions = questions.length
let status = ''

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
    for(let j = 0; j < candidateAnswers.length; j++){
        console.log(`Your answer: ${questions[j]}`);
        console.log(`Your answer: ${candidateAnswers[j]}`);
        console.log(`Correct answer: ${correctAnswers[j]}`);
        console.log('\n')


      if(correctAnswers[j].toLowerCase() === (candidateAnswers[j].toLowerCase())){
          numCorrect += 1
      }
      
    //   console.log(numCorrect)
  }

  let grade = ((numCorrect) / (numQuestions)) * 100 ;
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log('Candidate Name: ' + candidateName);
  askQuestion();
  let grade = gradeQuiz(this.candidateAnswers);
  console.log(`Overall Grade: ${grade}% (${numCorrect} of ${numQuestions} responses correct) `)
  if(grade >= 80){
      console.log('Status: PASSED')
  }else{
      console.log('Status: FAILED')
  }
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