var readlineSync = require("readline-sync");
const chalk = require("chalk");

var userName = readlineSync.question(chalk.green("What is your name? "));

// Input
console.log(chalk.red("Hello " + chalk.yellowBright(userName) + ", Welcome to the IRON MAN QUIZ!"));

console.log(chalk.bgMagenta("--- Let's see how much you know your SuperHero ---"));
console.log(chalk.blue.underline.bold('There are a total of 5 questions\nEach right answer will give you 20 points\nBut each wrong answer will give -10 points'));

var end = readlineSync.question(chalk.redBright("Do you want to exit from the program? Press 'E' to exit, any other key to continue - "));

var score = 0;
var lastScore = 0;

var userQuestions = [
  {
    question: `
  Who is Jarvis apart from Stark's AI?
  a: Stark's father
  b: Stakr's family Butler\n`,

    answer: "b"
  },
  {
    question: ` 
  What is the full name of J.A.R.V.I.S.?
  a: Just A Rather Very Intelligent System
  b: Junior Arc Reactor Virtually Intelligent System\n`,

    answer: "a"
  },
  {
    question: `
  What is written on the Arc Reactor?
  a: It's Tony's heart
  b: Proof that Tony STark had a heart\n`,

    answer: "b"
  },
  {
    question: `
  What does EDITH stands for?
  a: Even Dead I'm The Hero
  b: English Dad Is True Hero\n`,

    answer: "a"
  },
  {
    question: `
  Stark used an AI named FRIDAY, what movies was she first shown in?
  a: Iron Man2
  b: Avengers: Age of Ultron\n`,

    answer: "b"
  }
];

if (end == "e" || end == "E") {

  console.log(chalk.bgYellow("Thanks for coming.."));
  finalScore();
  process.exit();

} else {

  start();

};

// function and condition
function quiz(question, answer) {
  var userAnswer = readlineSync.question(chalk.italic.cyan(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {

    console.log(chalk.bold.green("You are right"));
    score = score + 20;

  } else {

    console.log(chalk.bold.red("You are wrong"));
    score = score - 10;

  }

  console.log(chalk.underline.bgBlue("Your score: " + score));
}

function start() {
  for (i = 0; i < userQuestions.length; i++) {
    quiz(userQuestions[i].question, userQuestions[i].answer);
  }
  lastScore = score;
  finalScore();
}

function finalScore() {
  console.log("------------------------");
  console.log(chalk.bgGreen(chalk.black("Your Final Score: " + lastScore)));
  console.log("------------------------");

var highScore = {
    name: "SAM",
    score: 100
  }

if (lastScore >= 100) {

  console.log(chalk.underline.bgYellow("Congrats!!! You made a High Score."));

} else {

  console.log(chalk.bold.bgCyan("High Score is:\n", highScore.name, '\n', highScore.score ,''));

}
};