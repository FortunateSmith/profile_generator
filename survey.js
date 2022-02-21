// Pair programmed with Manuel Casanova

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



let questions = [
"What's your name? Nicknames are also acceptable?",
"What's an activity you like doing?",
"What do you listen to while doing that?",
"Which meal is your favourite (eg: dinner, brunch, etc.)?",
"What's your favourite thing to eat for that meal?",
"Which sport is your absolute favourite?",
"What is your superpower? In a few words, tell us what you are amazing at!"
];

let answers = [];

const newQuestion = function() {

  rl.question(questions.shift(), (answer) => { // this removes first most current question from array
    answers.push(answer);
    if (questions.length === 0) { // if no questions left in array
      rl.close(); // program is closed
    } else {
      newQuestion(); // else it calls the function again (line 34) and loops back to line 24 to read new current question
    }
  });
};

newQuestion();

rl.on('close', () => {
  answers = {
    // array answers as values
    name: answers[0],
    activity: answers[1],
    music: answers[2],
    meal: answers[3],
    food: answers[4],
    sport: answers[5],
    superpower: answers[6]
  };
});

let paragraph = `
${answers.name} likes ${answers.activity} while listening to ${answers.music}. 
${answers.name} loves to eat ${answers.food} for ${answers.meal}. ${answers.name}'s favourite sport is
${answers.sport} and is amazing at ${answers.superpower}.
`;
console.log(paragraph);
