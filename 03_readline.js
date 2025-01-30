const readline = require('readline');

// process is a global object given by node
const rl = readline.createInterface({input : process.stdin,
                                     output : process.stdout});

let num1 = Math.floor((Math.random()*10 + 1)); 
let num2 = Math.floor((Math.random()*10 + 1));                  
let answer = num1 + num2;

rl.question(`What is ${ num1 } + ${ num2 }? \n`, (userInput) => {
    if(userInput.trim() == answer){
        rl.close(); // required or else the application will keep on running
    } else {
        rl.setPrompt('Incorrect response, pls try again\n');
        rl.prompt();
        rl.on('line', (userInput)=>{ // "line" triggers an event whenever an user completes a line i.e. presses enter
            if(userInput.trim() == answer){
                rl.close();
            } else {
                rl.setPrompt(`${ userInput } is incorrect, try again\n`);
                rl.prompt();
            }
        })
    }
});

// only gets executed when we close the readline interface
rl.on('close', () => {
    console.log('Correct answer!');
});