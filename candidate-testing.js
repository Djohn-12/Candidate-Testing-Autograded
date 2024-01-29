const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ['Sally Ride', 'true', "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
  console.log("Hello, " + candidateName +  "!");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0 ; i < questions.length; i++){
    console.log(questions[i]);
    candidateAnswers[i] = input.question();
  }
}
function gradeQuiz(candidateAnswers) {
  let correctCount = 0;

  console.log("Candidate's Responses:");

  for (let i = 0; i < questions.length; i++) {
    console.log(`${i + 1}. ${questions[i]}\n   Your Answer: "${candidateAnswers[i]}"\n   Correct Answer: "${correctAnswers[i]}"`);

    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      correctCount++;
    }
  }

  let grade = (correctCount / questions.length) * 100;
  
  console.log(` Grade: ${grade}% - ${correctCount} of ${questions.length} correct)`);
    if (grade >= 80) {
    console.log("Test: PASSED");
  } else {
    console.log("Test: FAILED");
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
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