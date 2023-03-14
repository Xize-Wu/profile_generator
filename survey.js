const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


arrQuestions = ['What\'s your name? Nicknames are also acceptable :)',
  "What\'s an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"];

// arrQuestions.forEach(ques => {
//   rl.question(ques, (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
  
//     rl.close();
//   });
// });

//callback hell
rl.question(arrQuestions[0], (answer0) => {
  rl.question(arrQuestions[1], (answer1) => {
    rl.question(arrQuestions[2], (answer2) => {
    console.log(answer0, answer1, answer2);
  
    rl.close();
    })
  });
});
